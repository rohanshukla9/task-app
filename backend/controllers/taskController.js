import asyncHandler from 'express-async-handler'
import Task from '../models/taskModel.js'



//@desc create task
//@route POST /api/tasks
//@access Private

const createTask = asyncHandler(async(req, res) => {
  
  const { description } = req.body;

  if(description && description.length === 0){

    res.status(404)

    throw new Error('Description is required')
  } else {
    const task = new Task({
      description,
      user: req.user._id
    })
    const createdTask = await task.save()
    if(createdTask)
    {
      res.status(201).json(createdTask) 
    
    } else {
      throw new Error('Something went wrong!')
    }
  }

})

//@desc Fetch auth user tasks
//@route GET /api/tasks/mytasks
//@access Private


const getAuthUserTasks = asyncHandler(async(req, res) => {

  const tasks = await Task.find({ user: req.user._id })

  res.json(tasks)
})

export {
  createTask,
  getAuthUserTasks
}
