import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js";

import { Task } from "../models/task.model.js"

// This function is use to create task in database

const createTask = asyncHandler(async (req, res) => {

    const { title, description, completed } = req.body

    console.log(req.body)

    if (!title || title === "") {
        throw new ApiError(400, "Title is required")
    }
    if (!description || description === "") {
        throw new ApiError(400, "Description is required")
    }
    if (completed === undefined) {
        throw new ApiError(400, "Completed is required")
    }

    const task = await Task.create({
        title,
        description,
        completed
    })

    const createdTask = await Task.findById(task._id)

    res.status(201).json(new ApiResponse(201, createdTask))

}
)

// This function is use to retrieve all tasks from database

const getTasks = asyncHandler(async (req, res) => {
    const tasks = await Task.find()

    res.status(200).json(new ApiResponse(200, tasks))
})

// This function is use to update task in database


const updateTask = asyncHandler(async (req, res) => {
    const { id } = req.params
    const { title, description, completed } = req.body

    let task = await
        Task.findById(id)

    if (!task) {
        throw new ApiError(404, "Task not found")
    }

    task.title = title
    task.description = description
    task.completed = completed

    await task.save()


    res.status(200).json(new ApiResponse(200, task))
}
)

export { createTask, getTasks, updateTask }