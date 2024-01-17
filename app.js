const express = require('express')
const app = express()
const sequelize= require('./database/db')
const User= require('./database/models/User')

const PORT=process.env.PORT||3000

app.get('/',(req, res) => {
   User.create({
    username:"Lucas",
    birthday:new Date(2000,9,25)
   })
   .then(user =>{
    res.json(user)
   }) 
})

app.listen(PORT, () => {
    console.log(`App listening on  http://localhost:${PORT}`);

    //aca nos conectamos a la base de datos
  sequelize.sync({force:false})
  .then(() => {
    console.log("nos conectamos a la base de datos...")
  })
  .catch(err => {
    console.log('Se ha producido un error: ' + err)    
  });

})