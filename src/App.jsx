import { Switch, Route } from 'react-router-dom'
import { useReducer } from 'react';
import Home from './pages/Home'
import DetailedNews from './pages/DetailedNews';
import Header from './comonents/header';
import SignIn from './pages/SignIn'
import {AuthContext, authReduser, initialState} from './context/authContext'
function App() { 

    const [state, disPach]  =useReducer(authReduser, initialState)

    return (
        <div className="app">
            <Header />
            <AuthContext.Provider>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/posts/:newsID" component={DetailedNews} />
                <Route exact path="/signin" component={SignIn}/> 
             </Switch>
            </AuthContext.Provider>
        </div>
    )
}

export default App;