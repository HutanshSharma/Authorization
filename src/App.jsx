import { useEffect, useState } from "react";
import AuthPage from "./components/Auth/Auth";
import Toast from "./components/Toast";
import { Routes, Route, Navigate, useLocation} from "react-router-dom"
import MainPage from "./components/MainPage/Mainpage";
import ResetPassword from "./components/Auth/ResetPassword";
import VerifyEmail from "./components/Auth/VerifyEmail";
import { UserProvider } from "./store/UserContext";

function PrivateRoute({ children ,addToast }) {
  const token = localStorage.getItem("refresh_token");
  return token ? children : <Navigate to="/auth" replace />;
}

function LogChecker({ children, location }){
  const token = localStorage.getItem("refresh_token");
  let next_page = '/'
  if(location.pathname !== '/auth') next_page = location.pathname
  return token ? <Navigate to={next_page} replace /> : children; 
}

function App() {
  const [toast, setToast] = useState(null)
  const location = useLocation()

  const addToast = (message, type) => {
    if(toast===null){
      setToast({ message, type });
    }
  };

  useEffect(()=>{
    const timer = setTimeout(()=>{
        removeToast()
    },5000)
    return ()=>clearTimeout(timer)
  },[toast])

  const removeToast = () => {
      setToast(null);
  };

  return (
    <>
    <Routes >
      <Route path="/auth" element={
        <LogChecker location={location}>
        <AuthPage addToast={addToast}/>
        </LogChecker>}/>

      <Route path="/" element={
        <UserProvider addToast={addToast} >
          <PrivateRoute addToast={addToast} >
            <MainPage addToast={addToast}/>
          </PrivateRoute>
        </UserProvider>
        } />

      <Route path="/reset_password/:token" element={<ResetPassword addToast={addToast} />}/>

      <Route path="/verify_email/:token" element={<VerifyEmail addToast={addToast} />} />
    </Routes>
    {toast && <Toast message={toast.message} type={toast.type}/> }
    </>
  )
}

export default App
