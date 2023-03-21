import React from 'react'
import { VscEmptyWindow } from "react-icons/vsc"
import { Link } from 'react-router-dom'
import Button from './Button'
const EmptyScreen = () => {
    return (
        <div className='p-4 text-white'>
            <VscEmptyWindow size={40}/>
            <h3 className='mt-2 text-[24px] font-semibold'>There is no task created yet.</h3>
            <p className='my-2'>Click on the button below to create the first one</p>
            <Link to="/tasks/create">
                <Button bgColor='bg-[#56B890]' text="Create Task" />
            </Link>
        </div>
    )
}

export default EmptyScreen