import { DataTypes } from 'sequelize'
import sequelize from './sequelize'
import {Subject} from './Student'

const Teacher = sequelize.define('Teacher', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  phone: DataTypes.STRING,

})

const TeacherSubject = sequelize.define('TeacherSubject', {
  maxLevel: DataTypes.INTEGER
});

TeacherSubject.belongsTo(Subject, { constraints: false, foreignKey: 'subjectId', as: 'subject' });
TeacherSubject.belongsTo(Teacher, { constraints: false, foreignKey: 'teacherId', as: 'teacher' });


export default Teacher
