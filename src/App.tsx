import {Box, Button, CssBaseline, ThemeProvider, Typography} from '@mui/material'
import { createContext, useState } from 'react'
import {Navigate, Route, Routes, useNavigate} from 'react-router-dom'
import Admin from './components/admin/Admin'
import Analytics from './components/analytics/Analytics'
import DashBoard from './components/dashboard/Dashboard'
import Home from './components/home/Home'
import Landing from './components/landing/Landing'
import NavBar from './components/navbar/Navbar'
import PrivateRoute from './components/route/PrivateRoute'
import { useUser } from './contexts/UserContext'
import {appTheme} from './theme/appTheme'


const App = () => {
  const user = useUser()

  return (
        <Box component={"div"}>
          <CssBaseline/>
          <ThemeProvider theme={appTheme}>
            <NavBar/>
            <Routes>
              <Route index element={<Home />} />
              <Route path="dashboard" element={ <PrivateRoute 
                                                  isAuthenticated={user.loggedin}
                                                  redirectRoute="/"
                                                >
                                                  <DashBoard />
                                                </PrivateRoute>} 
              />
              {/* nested private route */}
              <Route element={<PrivateRoute 
                                isAuthenticated={user.loggedin} 
                                hasRole={user.role} 
                                allowedRoles={["admin"]}  
                                redirectRoute="/"
                              />}
              >
                <Route path="analytics" element={<Analytics />} />
                <Route path="admin" element= {<Admin/>} />
              </Route>
              <Route path="*" element= {<Box><Typography component="p">route non valide: 404</Typography></Box>} />
            </Routes>
          </ThemeProvider>
        </Box>
  )
}

export default App
