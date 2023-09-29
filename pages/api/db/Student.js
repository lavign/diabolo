import { DataTypes } from 'sequelize'
import sequelize from './sequelize'

const Student = sequelize.define('Student', {
  email: {
    type: DataTypes.STRING
  }
})

export default Student
