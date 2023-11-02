import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../firebase/config';
import Loader from '../components/Loader';

const Register = () => {
  const [email,setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [cPassword, setCpassword] = React.useState("")
  const [loading, setIsLoading] = React.useState(false)
  const navigate = useNavigate()

  const registerUser = (e) =>{
    e.preventDefault()
    // console.log(email,password,cPassword)
    if(password !== cPassword){
      toast.error("Ogbeni, your password no match jare")
    }
    setIsLoading(true)

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    setIsLoading(false)
    toast.success('Mr Man, thanks for registring')
    navigate("/login")
   })
  .catch((error) => {
    toast.error(error.message)
    setIsLoading(false)
  });
  }

    return (
      <>
      <ToastContainer/>
      {loading && <Loader/>}
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-center mb-4">Register</h2>
    
            <form onSubmit={registerUser}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Your Email"
                  required
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
    
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-600">Password</label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
    
              <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-gray-600">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Confirm Password"
                  required
                  value={cPassword}
                  onChange={(e)=>setCpassword(e.target.value)}
                />
              </div>
    
              <button type='submit' className="bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-600">Register</button>
            </form>
    
            <p className="text-center mt-4">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link> </p>
          </div>
        </div>
        </> 
      );
}

export default Register
