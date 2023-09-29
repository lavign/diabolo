import { DataTypes } from 'sequelize'
import sequelize from './sequelize'
import bcrypt from 'bcrypt'

const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    set (value) {
      const hash = bcrypt.hashSync(value, 10)
      this.setDataValue('password', hash)
    }
  }
})

export default User
