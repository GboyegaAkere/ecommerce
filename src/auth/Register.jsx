import React from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-center mb-4">Register</h2>
    
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Your Email"
                />
              </div>
    
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-600">Password</label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Password"
                />
              </div>
    
              <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-gray-600">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Confirm Password"
                />
              </div>
    
              <button className="bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-600">Register</button>
            </form>
    
            <p className="text-center mt-4">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link> </p>
          </div>
        </div>
      );
}

export default Register
