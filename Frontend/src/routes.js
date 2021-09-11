import React from 'react';
import{BrowserRouter, Route, Switch} from 'react-router-dom';

//import LoginB from './pages/LoginB'
import Home from './pages/Home';
import Login from './pages/Login';                          // Oficial
import Register from './pages/Register';                    // Oficial
import Profile from './pages/Profile';
import newIncident from './pages/NewIncident';

export default function Routes(){
    /*const id = localStorage.getItem('reqid');
    let path = {};
    if(id === ''||id === undefined) path = {HomeDeslogado};
    else path = {HomeLogado};*/
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/register" exact component={Register}/>
                <Route path="/profile" exact component={Profile}/>
                <Route path="/incidents/new" exact component={newIncident}/>
            </Switch>
        </BrowserRouter>
    );
}