import React from 'react'
import { connect } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import Header from "../components/Header";

export const PrivateRoute = ({ isAuthenticated }) => {
    return isAuthenticated ? <div><Header style={() => ({marginBottom: "2rem"})}/> <Outlet /> </div> : <Navigate to="/" />
}

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)