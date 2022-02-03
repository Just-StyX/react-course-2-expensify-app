import React from 'react'
import { NavLink } from 'react-router-dom'

const EditItems = () => (
    <div>
        <p>Edit the expense items <NavLink to="edit" style={({ isActive }) => ({ color: isActive ? 'green' : 'blue', fontWeight: isActive ? 'bold': "" })}>here</NavLink></p>
    </div>
)

export default EditItems