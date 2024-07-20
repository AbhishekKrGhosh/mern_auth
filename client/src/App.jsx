import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Profile from "./pages/Profile"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import { Header } from "./components/Header"
import PrivateRoute from "./components/PrivateRoute"
import { useDispatch } from 'react-redux';
import { isCookieExpired } from './utils/checkCookie';
import { signOut } from './redux/user/userSlice';
import { useEffect } from "react"

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      if (isCookieExpired()) {
        dispatch(signOut());
      }
    }, 1000 * 60);

    return () => clearInterval(interval);
  }, [dispatch]);
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route element={<PrivateRoute/>}>
      <Route path="/profile" element={<Profile/>}/>
      </Route>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
