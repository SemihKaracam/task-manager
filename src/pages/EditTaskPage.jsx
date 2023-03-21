import React, { useEffect, useState } from 'react'
import { Form, Link, redirect, useLoaderData, } from 'react-router-dom'
import Button from '../components/Button'
import { getTask, updateTask } from '../services/task'

const EditTaskPage = () => {
  const task = useLoaderData()
  return (
    <Form className='p-4 [&>*]:mb-2' method='PUT'>
      <Link to={`/tasks/${task.id}`}>
        <Button bgColor="bg-[#182B42]" text="Back" />
      </Link>
      <h3 className='font-semibold text-xl'>Edit task: {task.name}</h3>
      <input name="task-name" className='block p-2 border-[1px] text-sm bg-[#141D2F]' defaultValue={task.name} type="text" placeholder='Task name'/>
      <textarea name="task-description" className='block p-2 border-[1px] text-sm bg-[#141D2F]' placeholder='Description' defaultValue={task.description}/>
      <div className='flex items-center gap-1'>
        <input name="task-completed" className='rounded-[0px]' id="completed" defaultChecked={task.completed} type="checkbox" />
        <label className='text-sm' for="completed">Completed</label>
      </div>
      <div>
        <Button type="submit" bgColor="bg-[#182B42]" text="Change" />
      </div>
    </Form>
  )
}


export const editTaskPageSubmitAction = async ({request,params})=>{
  const formData = await request.formData()
  const name = formData.get("task-name")
  const description = formData.get("task-description")
  const completed = formData.get("task-completed")
  const task = {
    id:params.id,
    name,
    description,
    completed
  }
  await updateTask(task)
  return redirect("/tasks/"+params.id) 
}


export const taskEditPageLoader = async ({params})=>{
  return getTask(params.id)
}

export default EditTaskPage
