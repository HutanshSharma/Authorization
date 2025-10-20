import handleChangePassword from "./handleChangePassword"
import { MailCheck } from "lucide-react"

export default function ForgotPassword({setForgotPasswordData,forgotpasswordData,setIsLogin,setisPasswordChange,addToast}){
    return (
        <div className="mt-6 h-full">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Change Password</h1>
            <p className="text-gray-400 mb-5 text-sm">Enter you email address</p>

            <div className="mb-10">
                <div className="flex items-center border-b-2 border-gray-400 rounded-xl px-4 py-2 focus-within:border-indigo-600 transition-colors">
                <span className="text-gray-400 mr-3 text-lg"><MailCheck /></span>
                <input
                    type="email"
                    placeholder="Email Address"
                    value={forgotpasswordData.email}
                    onChange={(e) => setForgotPasswordData({email: e.target.value})}
                    className="flex-1 outline-none text-gray-800"
                />
                </div>
            </div>

            <button className="bg-[#3a47b0] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-3 mt-4 hover:scale-105 transition-transform cursor-pointer"
                onClick={async ()=>{
                    const data = await handleChangePassword(forgotpasswordData, addToast)
                    if(data) {
                        setIsLogin(true)
                        setisPasswordChange(false)
                    }
                }}
            >
                Send Mail
                <span>→</span>
            </button>
            </div>
    )
}