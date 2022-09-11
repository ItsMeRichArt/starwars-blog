import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Vehicles(){
    return (
    <div>
        <h1>Vehicles</h1>
        <Outlet />
    </div>)
}