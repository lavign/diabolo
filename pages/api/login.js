import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from './db/User'

export default async (req, res) => {
  const { email, password } = req.body

  // Buscar usuario
  const user = await User.findOne({ where: { email } })
  if (!user) return res.status(401).json({ error: 'User not found' })

  // Verificar contraseña
  if (!bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ error: 'Incorrect password' })
  }

  // Crear y enviar JWT
  const token = jwt.sign({ id: user.id }, 'yourSecretKey', { expiresIn: '1h' })
  res.status(200).json({ token })
}
