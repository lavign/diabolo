import sequelize from './db/sequelize'

sequelize.sync()
  .then(() => {
    console.log('Database & tables created!')
  })
