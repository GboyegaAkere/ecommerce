import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from '../firebase/config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../components/Loader';







const Login = () => {
  const [email,setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")  
  const [loading, setIsLoading] = React.useState(false)
  const navigate = useNavigate()

  const loginUser = (e) =>{
    e.preventDefault()
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
      setIsLoading(false)
      toast.success("success...")
      navigate("/")
      // ...
    })
    .catch((error) => {
      setIsLoading(false)
      toast.error(error.message)
    });
  }
  
  const provider = new GoogleAuthProvider();
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    console.log(user)
    toast.success("login successful")
    navigate("/")
  }).catch((error) => {
    toast.error(error.message)
  });
  }

    return (
        <>
        <ToastContainer/>
        {loading && <Loader/>}
          <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
    
            <form onSubmit={loginUser}>
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
    
              <div className="mb-4 flex justify-between">
                <Link to="/reset" className="text-blue-500 hover:underline">Forgot Password</Link>
                <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
              </div>
    
              <button type='submit' className="bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-600">Login</button>
            </form>
    
            <p className="text-center mt-4">Or</p>
            <button onClick={loginWithGoogle} className="bg-red-500 text-white w-full py-2 rounded-md mt-2 hover:bg-red-600">Login with Google</button>
          </div>
        </div>
        </>
      );
}

export default Login
