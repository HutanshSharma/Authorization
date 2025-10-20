import { useState } from 'react';
import RightPanel from './RightPanel';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import ForgotPassword from './ForgotPassword';

export default function AuthPage({addToast}) {
  const [isLogin, setIsLogin] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showConfirmPassword, setShowComfirmPassword] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [forgotpasswordData, setForgotPasswordData] = useState({
    email: ''
  })
  const [isPasswordChange, setisPasswordChange] = useState(false)

  const checkPasswordRequirements = (password) => ({
    length: password.length >= 8,
    numberOrSymbol: /[0-9!@#$%^&*]/.test(password),
    caseRequirement: /[a-z]/.test(password) && /[A-Z]/.test(password)
  });

  const requirements = checkPasswordRequirements(signupData.password);  

  return (
    <div className="min-h-screen bg-[#a9c1ff] flex items-center justify-center p-5">
      <div className="flex max-w-6xl w-full bg-[rgb(255,255,255,0.6)] rounded-3xl overflow-hidden shadow-2xl">
        <div className="flex-1 p-16 relative overflow-hidden">
          <div className="absolute top-8 right-8 text-sm text-gray-600">
            {isLogin ? 'New member?' : 'Already member?'}{' '}
            <button 
              onClick={() => {
                setIsLogin(!isLogin)
                setisPasswordChange(false)
              }}
              className="text-indigo-600 font-medium hover:underline"
            >
              {isLogin && !isPasswordChange ? 'Sign up' : 'Log in'}
            </button>
          </div>

          <div className="form-wrapper">
            <div className={`form login-form ${isLogin && !isPasswordChange ? 'active' : ''}`}>
              <LoginForm
                setLoginData={setLoginData}
                showLoginPassword={showLoginPassword}
                loginData={loginData}
                setShowLoginPassword={setShowLoginPassword}
                addToast = {addToast}
                setisPasswordChange = {setisPasswordChange}
                setIsLogin = {setIsLogin}
              />
            </div>

            <div className={`form signup-form ${!isLogin && !isPasswordChange ? 'active' : ''}`}>
              <SignUpForm
                setShowSignupPassword={setShowSignupPassword}
                setSignupData={setSignupData}
                signupData={signupData}
                showSignupPassword={showSignupPassword}
                requirements={requirements}
                setShowComfirmPassword={setShowComfirmPassword}
                showConfirmPassword={showConfirmPassword}
                addToast={addToast}
                setIsLogin={setIsLogin}
              />
            </div>

            <div className={`form signup-form ${!isLogin && isPasswordChange ? 'active' : ''}`}>
              <ForgotPassword 
                setForgotPasswordData = {setForgotPasswordData}
                forgotpasswordData = {forgotpasswordData}
                setIsLogin = {setIsLogin}
                setisPasswordChange = {setisPasswordChange}
                addToast = {addToast}
              />
            </div>
          </div>
        </div>
        <RightPanel />
      </div>
    </div>
  );
}
