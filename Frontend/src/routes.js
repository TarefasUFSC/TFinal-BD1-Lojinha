import React from 'react';
import{BrowserRouter, Route, Switch} from 'react-router-dom';

//import LoginB from './pages/LoginB'
import HomeDeslogado from './pages/HomeDeslogado';
import Login from './pages/Login';                          // Oficial
import Register from './pages/Register';                    // Oficial
import Profile from './pages/Profile';
import newIncident from './pages/NewIncident';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomeDeslogado}/> 
                <Route path="/login" exact component={Login}/>
                <Route path="/register" exact component={Register}/>
                <Route path="/profile" exact component={Profile}/>
                <Route path="/incidents/new" exact component={newIncident}/>
            </Switch>
        </BrowserRouter>
    );
}