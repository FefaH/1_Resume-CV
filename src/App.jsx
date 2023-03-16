import React, { useState } from 'react'
import './css/App.css'
import { HomePage } from "./components/HomePage"
import { Addition } from "./components/Addition"
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import { Subtraction } from "./components/Subtraction"
import { Multiplication } from "./components/Multiplication"
import { AboutMe } from './components/AboutMe'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { InitialPage } from './components/InitialPage'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'


//Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales
export const App = () => {

  const routePath = {
    pathSuma: '/NumbersAddition',
    pathResta: '/NumbersSubtraction',
    pathMultiplicacion: '/NumbersMultiplication',
    pathAboutMe: '/AboutMePage',
    pathProjects: '/ProjectsPage',
    pathContact: '/ContactPage',
    pathInitialHome:'/'
  }

  const actionsDial = [
    { icon: <AccessAlarmIcon />, name: 'alarm' },
    { icon: <AccountBoxIcon />, name: 'acount' },
    { icon: <AccessibilityIcon />, name: 'access' },
    { icon: <AcUnitIcon />, name: 'ice' }
  ]

  const [selectPath, setSelectPath] = useState('')

  const pathValue = (e) => {
    setSelectPath(e)
    console.log(e)
  }

  console.log('selectPath: ', selectPath)
  return (
    <Router>
      <div className="containerApp">
        <HomePage routePath={routePath} actionsDial={actionsDial} />
        
        <Routes>
          <Route path={routePath.pathInitialHome} element={<InitialPage/>}/>
          <Route path={routePath.pathProjects} element={<Projects/>}/>
          <Route path={routePath.pathSuma} element={<Addition />} />
          <Route path={routePath.pathResta} element={<Subtraction />} />
          <Route path={routePath.pathMultiplicacion} element={<Multiplication />} />
          <Route path={routePath.pathAboutMe} element={<AboutMe />} />
          <Route path={routePath.pathContact} element={<Contact/>}/>
        </Routes>
      </div>
    </Router >
  )
}