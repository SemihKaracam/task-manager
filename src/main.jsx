import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import RootLayout from './layouts/RootLayout'
import CreateTaskPage, { createTaskPageSubmitAction } from './pages/CreateTaskPage'
import EditTaskPage, { editTaskPageSubmitAction,taskEditPageLoader } from './pages/EditTaskPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import SingleTaskPage, { singleTaskPageLoader } from './pages/SingleTaskPage'
import TasksPage,{tasksPageLoader} from './pages/TasksPage'

const router = createBrowserRouter([
  {
    path:"/",
    element:<RootLayout/>,
    errorElement:<h1 className='text-white'>Error Component</h1>,
    children:[
      {
        index:true,
        element:<HomePage/>
      },
      {
        path:"/tasks",
        element:<TasksPage/>,
        loader:tasksPageLoader
      },
      {
        path:"/tasks/create",
        element:<CreateTaskPage/>,
        action:createTaskPageSubmitAction
      },
      {
        path:"/tasks/:id",
        element:<SingleTaskPage/>,
        loader:singleTaskPageLoader
      },
      {
        path:"/tasks/edit/:id",
        element:<EditTaskPage/>,
        loader:taskEditPageLoader,
        action:editTaskPageSubmitAction
      },
      {
        path:"/projects",
        element:<HomePage/>
      },
      {
        path:"/settings",
        element:<HomePage/>
      },
      {
        path:"/*",
        element:<NotFoundPage/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
