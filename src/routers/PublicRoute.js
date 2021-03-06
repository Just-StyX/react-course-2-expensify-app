import React from 'react'
import { connect } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
//import Header from "../components/Header";

export const PublicRoute = ({ isAuthenticated }) => {
    return isAuthenticated ?  <Navigate to="/dashboard" /> : <Outlet />
}

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PublicRoute)