const express=require('express');
const router=express.Router();
router.get('/reservations',(req,res)=>{
    const reservationRouter=req.app.get('reservationRouter');
    res.send(reservationRouter);
})
module.exports=router;








