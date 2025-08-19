import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router';
import { usePuterStore } from '~/lib/puter'

export const meta = () => ([
 {title: 'Resumind | Auth'},
 {name: 'description', content: 'Log into your account'}
])
const Auth = () => {
  const {isLoading, auth} = usePuterStore();
  //when a user tries to access a secured route while not authentticated, he'll be directed to the auth page(sign up/log in) then after successful authentication you can redirect them back to the page tey wanted to go in the first place. thats what line 12 - 21 (where the useEffect for auth.isAuthenticated is the dependency) is doing 
  const location = useLocation();
  const next = location.search.split('next=')[1]
  const navigate = useNavigate()
  useEffect(() => {
    if(auth.isAuthenticated) {
       navigate(next)
    }
  
    
  }, [auth.isAuthenticated, next])
  
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen flex items-center justify-center">
      <div className="gradient-border shadow-lg">
        <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
          <div className='flex flex-col items-center gap-2 text-center'>
             <h1>Welcome</h1>
             <h2>Log In to Continue Your Job Journey</h2>
          </div>
          <div>
            {isLoading ? (
              <button className='auth-button animate-pulse'>
                <p>Signing you in...</p>
              </button>
            ): (
              <>
                {auth.isAuthenticated ? ( 
                  <button className='auth-button' onClick={auth.signOut}><p>Log Out</p></button>
                ):(
                  <button className="auth-button" onClick={auth.signIn}><p>Sign In</p></button>
                )

                }
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  )
}

export default Auth