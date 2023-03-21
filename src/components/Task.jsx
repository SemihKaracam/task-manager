import React from 'react'

const Task = ({ task }) => {
  return (
    <div className={`p-2 rounded-[8px] ${task.completed ? 'border-l-greenBorder' : 'border-l-redBorder'} text-white border-l-[2px] bg-taskBg min-w-[250px]`}>
      <span className='text-[12px]'>{task.completed ? "Completed":"Not Completed"}</span>
      <h3 className='text-xl font-bold'>{task.name}</h3>
      <p className='text-[14px]'>{task.description}</p>
    </div>
  )
}

export default Task