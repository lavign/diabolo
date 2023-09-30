import { DataTypes } from 'sequelize'
import sequelize from './sequelize'
import Teacher from './Teacher'

const Student = sequelize.define('Student', {
  // datos del alumno
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  phone: DataTypes.STRING,
  // datos del tutor
  tutorsName: DataTypes.STRING,
  tutorsEmail: DataTypes.STRING,
  tutorsPhone: DataTypes.STRING,
  tutorsIdentify: DataTypes.STRING,
  tutorsAddress: DataTypes.STRING,
  // campos no reset
  bacYear: DataTypes.STRING,
  // campos reset
  liceoTeacher: DataTypes.STRING
})


const Subject = sequelize.define('Subject', {
  name: DataTypes.STRING,
});

const StudentSubject = sequelize.define('StudentSubject', {
  comment: DataTypes.STRING
});

StudentSubject.belongsTo(Subject, { constraints: false, foreignKey: 'subjectId', as: 'subject' });
StudentSubject.belongsTo(Student, { constraints: false, foreignKey: 'studentId', as: 'student' });

Student.belongsTo(Teacher, { constraints: false, foreignKey: 'teacherId', as: 'teacher' });

export { StudentSubject, Subject }

export default Student
