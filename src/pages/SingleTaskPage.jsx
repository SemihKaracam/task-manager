import React, { useState } from 'react'
import { Link, useLoaderData, useLocation } from 'react-router-dom'
import Button from '../components/Button'
import Loading from '../components/Loading'
import { completeTask, getTask } from '../services/task'

const SingleTaskPage = () => {
  const task = useLoaderData()
  const [completed,setCompleted] = useState(task.completed)
  const [isLoading,setIsLoading] = useState(false)
  const handleCompleteTask = async(e)=>{
    e.preventDefault()
    setIsLoading(true)
    await completeTask(task.id)
    setCompleted(!completed)
    setIsLoading(false)
  }

  return (
    <div className='p-4 text-white flex items-start flex-col gap-2'>
      <Link to={`/tasks/edit/${task.id}`}>
        <Button bgColor="bg-[#415562]" text="Edit" />
      </Link>
      <button onClick={handleCompleteTask} disabled={isLoading} className={`${completed ? 'bg-greenBg' : 'bg-redBg'} flex items-center gap-2 text-[12px] font-bold px-3 py-2 rounded-sm`}>
        {completed ? "Completed" : "Not Completed"}
        {isLoading && <Loading/>}
      </button>
      <h3 className='font-bold text-[40px]'>{task.name}</h3>
      <p>{task.description}</p>
    </div>
  )
}

export const singleTaskPageLoader = async ({params}) => {
  return getTask(params.id)
}

export default SingleTaskPage
