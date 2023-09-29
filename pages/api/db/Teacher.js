import { DataTypes } from 'sequelize'
import sequelize from './sequelize'

const Teacher = sequelize.define('Teacher', {
  email: {
    type: DataTypes.STRING
  }
})

export default Teacher
