import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="SidebarContainer">
            <NavLink className="SidebarOption" to="/" >Home</NavLink>
            <NavLink className="SidebarOption" to="/">List of Countries</NavLink>
            <NavLink className="SidebarOption" to="/">Countries</NavLink>
        </div>
    )
}

export default Sidebar
