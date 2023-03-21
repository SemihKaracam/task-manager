import React, { useState } from 'react'
import { Form, redirect, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import { addTaskToLocalStorage } from '../services/task'
const CreateTaskPage = () => {
  return (
    <Form className='p-4 flex flex-col items-start gap-2' method='post'>
      <input name='task-name' className='block p-2 border-[1px] text-sm bg-[#141D2F]' type="text" placeholder='Task name' />
      <textarea name='task-description' className='block p-2 border-[1px] text-sm bg-[#141D2F]' placeholder='Description'></textarea>
      <div>
        <Button type="submit" text="Submit" bgColor='bg-[#182B42]' />
      </div>
    </Form>
  )
}

export const createTaskPageSubmitAction = async({request}) => {
  const formData = await request.formData()
  const id = Date.now()
  const name = formData.get("task-name")
  const description = formData.get("task-description")
  await addTaskToLocalStorage({
    id,
    name,
    description,
    completed:false
  })
  return redirect(`/tasks/${id}`)
}

export default CreateTaskPage
