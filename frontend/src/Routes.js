import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminRoute from './auth/helper/AdminRoutes';
import Home from './core/Home'
import Signin from './user/Signin';
import Signup from './user/Signup';
import PrivateRoutes from './auth/helper/PrivateRoutes'
import UserDashBoard from './user/UserDashBoard';
import AdminDashboard from './user/AdminDashBoard';


export default function Routes()
{
  return(
    <BrowserRouter>
    <Switch>
  <Route path='/' exact component={Home} />
  <Route path='/signup' exact component={Signup} />
  <Route path='/signin' exact component={Signin} />
  <PrivateRoutes path='/user/dashboard' exact component={UserDashBoard} />
  <AdminRoute path='/admin/dashboard' exact component={AdminDashboard} />
  
    </Switch>
    </BrowserRouter>
  )
}


