import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { getTasks } from '../services/task'
import Task from './Task'

const TasksList = () => {
  const tasks = useLoaderData()
  return (
    <div className='flex flex-wrap gap-2 mt-2'>
      {
        tasks.map((task) => (
          <Link to={`/tasks/${task.id}`}>
            <Task task={task}/>
          </Link>
        ))
      }
    </div>
  )
}

export default TasksList

