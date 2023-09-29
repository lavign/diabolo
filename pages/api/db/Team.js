import { DataTypes } from 'sequelize'
import sequelize from './sequelize'

const Team = sequelize.define('Team', {
  email: {
    type: DataTypes.STRING
  }
})

export default Team
