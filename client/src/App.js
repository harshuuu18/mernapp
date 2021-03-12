import React,{useEffect,createContext,useReducer, useContext} from 'react' 
import './App.css';
import {BrowserRouter, Route, Switch, useHistory} from 'react-router-dom'
import TopNav from './Home/topNav'
import Mainpage from './Home/mainPage'
import Signup from './Signup/signup'
import Login from './Login/Login'
import ExtraSpace from './ExtraSpace'
import Afterlogin from './Afterlogin/Afterlogin'
import UploadCrushBtn from './Afterlogin/UploadCrush'
import UploadCrush from './Afterlogin/Upload'
import SocialMedias from './Home/SocialLinks'
import {reducer,initialState} from './reducer/userReducer'

export const UserContext = createContext()
//24
const Routing = () => {
  const history = useHistory()
  const {state,dispatch} = useContext(UserContext)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (user) {
      dispatch({type:"USER",payload:user})
      history.push('/')
    } else {
      history.push('/home')
    }
  },[])
  return (
    <Switch>
      <Route exact path='/main'>
        <ExtraSpace />

        <Afterlogin />

        <UploadCrushBtn />
        <ExtraSpace />
        
      </Route>
      
      <Route  path='/home'>
        <Mainpage />
      </Route>
      
      <Route  path='/signup'>
        <ExtraSpace />
        <Signup />
        
      </Route>

      <Route  path='/login'>
        <ExtraSpace />
        <Login />
        
      </Route>

      <Route  path='/crush'>
        <ExtraSpace />
        <UploadCrush />
        
      </Route>
    </Switch>
  )
}

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      <TopNav />
      
      <Routing />
      
      <SocialMedias />
    </BrowserRouter>
    </UserContext.Provider>
  );
  
}

export default App;
