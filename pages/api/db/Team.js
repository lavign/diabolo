import { DataTypes } from 'sequelize'
import sequelize from './sequelize'

const Team = sequelize.define('Team', {
  name: DataTypes.STRING,
  code: DataTypes.STRING,
  maxStudents: {
    type: DataTypes.INTEGER,
    defaultValue: 4
  },
})

const Room = sequelize.define('Room', {
  name: DataTypes.STRING,
  maxStudents: DataTypes.INTEGER,
})

Team.belongsTo(Room, { constraints: false, foreignKey: 'roomId', as: 'room' });


export default Team
