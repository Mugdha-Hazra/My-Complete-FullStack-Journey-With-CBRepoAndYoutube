const express=require('express');
const path=require('path');
const app=express();
const { Center, Season, Course, Batch } = require(__dirname + '/db/model')

app.set('view engine','hbs');
app.use(express.urlencoded({extended:true}));
app.set('views',path.resolve(__dirname,'../views'));
app.use(express.json());

app.get('/batchcode',async(req,res)=>{
    try{
        const centers=await Center.findAll();
        const seasons=await Season.findAll();
        const courses=await Course.findAll();
        const years=[2018, 2019, 2020, 2021, 2022, 2023];

        res.render('batchcode',{
            centers,
            seasons,
            courses,
            years
        })


    }catch(err){
        console.error(err);
    }
})

app.post('/batchcode',async(req,res)=>{
    let batchcode='';
    batchcode+=req.body.course;
    batchcode+=req.body.center;
    batchcode+=req.body.season;
    batchcode+=req.body.year.substr(2);
    batchcode+=req.body.batchno;

    try{
        const batch=await Batch.create({
            code:batchcode,
            year:req.body.year,
            start:Date.parse(req.body.start),
            end:Date.parse(req.body.end),
            courseId:req.body.course,
            centerId:req.body.center,
            seasonId:req.body.season

        })

        res.send(batch.code);



    }catch(err){
        console.error(err);
    }
})

app.get('/batches',async (req,res)=>{
    try{
        const batches=await Batch.findAll({
            include:[Course,Center,Season]
        })
        res.render('batches',{batches});
    }
    catch(e){
        console.error(e);

    }
})

module.exports={
    app
}