// models/taskModel.js

import mongoose, { Schema } from "mongoose";

// // {
//     "_id": "661571d3dd6ed067c12f4c4f",
//     "title": "new title",
//     "description": "updated",
//     "completed": true,
//     "__v": 0
//     }

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    completed: {
        type: Boolean,
        default: false
    }
});

const Task = mongoose.model('Task', taskSchema);

export { Task };
