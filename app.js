import express from 'express';
import cors from 'cors';  // for cross origin request response
import dotenv from 'dotenv'; // for environment variables
dotenv.config();

const app = express();

app.use(cors({
    origin: '*',
    credentials: true
}));
app.use(express.json(
    {
        limit: '50mb'
    }
));
app.use(express.urlencoded(
    {
        limit: '50mb',
        extended: true
    }
));
app.use(express.static('public')); //  for templates 





//routes imports
import taskRouter from './routes/task.routes.js';



//routes declarations(http://localhost:3000/api/v1/task)
app.use('/api/v1/task', taskRouter);


//routes declarations(http://localhost:3000)
app.get('/', (req, res) => {
    res.send('Hello, World');
}
);

//routes declarations(http://localhost:3000/async)
app.get('/async', (req, res) => {
    setTimeout(() => {
        res.send('Async response after 2 seconds');
    }, 2000);
}
);


export {
    app
} 