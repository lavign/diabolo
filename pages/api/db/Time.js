import { DataTypes } from 'sequelize'
import sequelize from './sequelize'

const Time = sequelize.define('Time', {
  reference: DataTypes.ENUM('TEAM', 'TEACHER', 'STUDENT'),
  tuple: DataTypes.INTEGER,
  weeksday: DataTypes.ENUM('MONDAY', 'TUESDAY', 'WENDESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'),
  start: DataTypes.TIME,
  end: DataTypes.TIME
})

export default Time
