const express=require('express');
const router=express.Router();

router.get('/meal',(req,res)=>{
    const mealsRouter = req.app.get('mealsRouter');
    const randomIndex=Math.floor(Math.random()*mealsRouter.length);
    const answer=mealsRouter[randomIndex];
    res.send(answer);
})
module.exports=router;