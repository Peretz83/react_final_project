import React from 'react'
import { useInputText } from '../hooks/useInputText';
import FormLayout from '../components/FormLayout';
import Title from '../components/Title';

type Props = {}

const Login = (props: Props) => {
  const emailProp = useInputText("");
  const passwordProp = useInputText("");
  return (
   <>
    <div className="min-vw-100 min-vh-100 py-4 signupWrap">
   <Title mainText='LOGIN'/>

   <FormLayout>
    <div className="d-flex flex-column align-items-center">
              <div className="form-floating mb-3 w-50 ">
                <input
                  {...emailProp}
                  type="email"
                  className="form-control bg-light rounded-1"
               
                  placeholder="email@email.com"
                />
                <label htmlFor="floatingInput">
                  <span className="input-text text-dark">Email:</span>
                </label>
              </div>

              <div className="form-floating mb-3  w-50">
                <input
                  {...passwordProp}
                  type="password"
                  className="form-control bg-light rounded-1"
                
                  placeholder="Password"
                />
                <label htmlFor="floatingInput">
                  <span className="input-text text-dark">Password:</span>
                </label>
              </div>
            </div>

            <div className='d-flex justify-content-center'>
            <button
              
              className="w-30 mb-2 btn btn-lg btn-primary border rounded-3 modal-submit-btn"
              type="submit"
            >
              LOGIN
            </button>
            </div>
            </FormLayout>
            </div>
   </>
  )
}

export default Login