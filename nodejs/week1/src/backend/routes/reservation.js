const express = require('express');
const router = express.Router();
router.get('/reservation',(req,res)=>{
    const reservationRouter=req.app.get('reservationRouter');
    const index=Math.floor(Math.random()*reservationRouter.length);
    const answer=reservationRouter[index];
    res.send(answer);
})
module.exports=router;