const route=require('express').Router();
const {Product}=require('../../db.js')

route.get('/',(req,res)=>{
    Product.findAll({})
    .then((products)=>{
        res.status(200).send(products);
    })
    .catch((err)=>{
        res.status(500).send({
            error:err
        })


    })
});

route.post('/',(req,res)=>{
    if(isNaN(req.body.price)){
        res.status(403).send({
            error:"Price is not valid Number"
        })
        res.send("2nd Time");
        return ;
    }
    //Add a new Product

    Product.create({
        name:req.body.name,
        manufacturer:req.body.manufacturer,
        price:parseFloat(req.body.price)
    })
    .then((product)=>{
        res.status(201).send(product);

    })
    .catch((err)=>{
        res.status(501).send({
            error:err
        })
    })
})

module.exports=route;