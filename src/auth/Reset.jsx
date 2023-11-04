import { sendPasswordResetEmail } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase/config'
import { toast, ToastContainer } from 'react-toastify'
import Loader from '../components/Loader';

const Reset = () => {
  const [email, setEmail] = React.useState("")
  const[loading, setIsLoading] = React.useState(false)

  const resetPassword = (e) =>{
    e.preventDefault()
    setIsLoading(true)
    sendPasswordResetEmail(auth, email)
  .then(() => {
    alert("e don shele o")
    setIsLoading(false)
    toast.success("check your email")
  })
  .catch((error) => {
    setIsLoading(false)
    toast.error(error.message)
  });
  }


  return (
    <>
    <ToastContainer/>
    {loading && <Loader/>}
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Reset Password</h2>

        <form onSubmit={resetPassword}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Your Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <button type='submit' className="bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-600">Reset Password</button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Reset
