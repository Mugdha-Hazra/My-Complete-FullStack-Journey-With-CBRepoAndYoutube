const Sequelize=require('sequelize');

const db=new Sequelize('sampledb1','sampleuser1','02225660917',{
    host:'localhost',
    dialect:'mysql'
})

db.authenticate()
.then(()=>{console.log("Connection worked");})
.catch((err)=>{console.log(err)})


module.exports={
    db
}