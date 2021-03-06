const  route=require('express').Router();

let students=[
    {name: "Rahul", college: "DTU", year: "I"},
    {name: "Neha", college: "NSIT", year: "II"},
    {name: "Saksham", college: "JIIT", year: "III"},
    {name: "Parul", college: "IIIT", year: "IV"}
]


route.get('/',(req,res)=>res.send(students));
route.post('/',(req,res)=>{
    students.push({
        name:req.body.name,
        college:req.body.college,
        year:req.body.year
    })
    res.send(students);
})


route.get('/:id',(req,res)=>res.send(students[req.params.id]))

module.exports=route;