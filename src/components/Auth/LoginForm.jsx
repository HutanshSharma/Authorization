import { MailCheck, LockKeyhole, Eye, EyeOff} from 'lucide-react'
import handleLogIn from './handLogIn'

export default function LoginForm({setLoginData, setShowLoginPassword, loginData, showLoginPassword, addToast, setisPasswordChange, setIsLogin}){

  return (
    <div className="mt-6 h-full">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Log In</h1>
      <p className="text-gray-400 mb-5 text-sm">Welcome Back</p>

      <div className="mb-3">
        <div className="flex items-center border-b-2 border-gray-400 rounded-xl px-4 py-2 focus-within:border-indigo-600 transition-colors">
          <span className="text-gray-400 mr-3 text-lg"><MailCheck /></span>
          <input
            type="email"
            placeholder="Email Address"
            value={loginData.email}
            onChange={(e) => setLoginData({...loginData, email: e.target.value})}
            className="flex-1 outline-none text-gray-800"
          />
        </div>
      </div>

      <div className="mb-3">
        <div className="flex items-center border-b-2 border-gray-400 rounded-xl px-4 py-2 focus-within:border-indigo-600 transition-colors">
          <span className="text-gray-400 mr-3 text-lg"><LockKeyhole /></span>
          <input
            type={showLoginPassword ? "text" : "password"}
            placeholder="Password"
            value={loginData.password}
            onChange={(e) => setLoginData({...loginData, password: e.target.value})}
            className="flex-1 outline-none text-gray-800"
          />
          <span 
            className="text-gray-600 cursor-pointer text-lg"
            onClick={() => setShowLoginPassword(!showLoginPassword)}
          >
            {showLoginPassword ? <Eye/> : <EyeOff /> }
          </span>
        </div>
      </div>

      <div className="text-right mb-4">
        <button onClick={()=>{
          setIsLogin(false)
          setisPasswordChange(true)
        }} className="text-indigo-600 text-sm hover:underline">Forgot Password?</button>
      </div>

      <button className="bg-[#3a47b0] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-3 mt-4 hover:scale-105 transition-transform cursor-pointer"
        onClick={()=>handleLogIn(loginData, addToast)}
      >
        Log In
        <span>→</span>
      </button>

      <div className="flex items-center my-6 text-gray-400 text-sm">
        <div className="flex-1 h-px bg-gray-400"></div>
        <span className="mx-4">Or</span>
        <div className="flex-1 h-px bg-gray-400"></div>
      </div>

      <div className="flex gap-4">
        <button className="flex-1 p-3 border-2 border-gray-400 rounded-xl hover:border-indigo-600 transition-colors flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#1877f2">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </button>
        <button className="flex-1 p-3 border-2 border-gray-400 rounded-xl hover:border-indigo-600 transition-colors flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
        </button>
      </div>
    </div>
  )
}