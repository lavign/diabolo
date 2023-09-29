import { useState } from 'react'
import axios from 'axios'

export default function Home () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/login', { email, password })
      setToken(res.data.token)
    } catch (error) {
      console.error('Error en el login', error)
    }
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>Diabolo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Login</button>
      </form>
      {token && <p>Token: {token}</p>}
    </main>
  )
}
