import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Button from '../components/Button'
import EmptyScreen from '../components/EmptyScreen'
import Task from '../components/Task'
import TaskList from '../components/TasksList'
import { getTasks } from '../services/task'

const TasksPage = () => {
  const data = useLoaderData()
  return (
    <div className='p-4'>
      {
        !data.length ? <EmptyScreen /> :
          <>
            <Link to="/tasks/create">
              <Button bgColor="bg-[#56B890]" text="Create Task" />
            </Link>
            <TaskList />
          </>
      }
    </div>
  )
}

export const tasksPageLoader = (params) => {
  return getTasks()
}

export default TasksPage