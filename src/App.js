import React, {useState, useEffect} from "react"
import './App.css';
import Navbar from "./components/Navbar"
import {Routes, Route, redirect, Navigate, useNavigate} from 'react-router-dom'
import Login from "./components/Login"
import {privateRoutes, publicRoutes} from "./router";
import {useSelector} from "react-redux";


function App() {
    const {isAuth} = useSelector(state => state.isAuth)
    const navigate = useNavigate()

  useEffect(() => {
      if(!isAuth) {
          navigate("/login")
      }
  }, [])

  return (
    <div className="App">
      <Navbar isAuth={isAuth}/>
      <Routes>
          {isAuth ? privateRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={<route.Element />} exact={route.exact} />
          )) : publicRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={<route.Element />} exact={route.exact} />
          ))}
      </Routes>
    </div>
  )
}

export default App
