import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()

  async function handleSubmit(e) {
    e.preventDefault()

    // @TODO: add login logic
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input-email">Email</label>
        <input id="input-email" type="email" ref={emailRef} />

        <label htmlFor="input-password">Password</label>
        <input id="input-password" type="password" ref={passwordRef} />

        <br />

        <button type="submit">Login</button>
      </form>

      <br />

{/* Add this 👇 */}
<p>
  Don't have an account? <Link to="/signup">Sign Up</Link>
</p>

    </>
  )
}
