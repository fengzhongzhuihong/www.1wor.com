const express=require('express');
var router=express.Router();
const pool=require('../pool.js');
router.post("/v1/regpro",(req,res)=>{
    var uname=req.body.uname;
    var upwd=req.body.upwd;
    var email=req.body.email;
    var phone=req.body.phone;
    pool.query("insert into user set ?",[req.body],function(err,result){
    if(err)throw err;
    res.send("1");
    // console.log(result.affectedRows);
    // if(result.length>0){
    //     res.send("1");
    // }else{
    //     res.send("0");
    // }
});
});
router.get("/v1/isRepeate/:uname",(req,res)=>{
    var $uname=req.params.uname;
    var sql="select * from user where uname=?";
    pool.query(sql,[$uname],(err,result)=>{
        if(err)throw err;
        if(result.length>0)
        {res.send("1");}else{res.send("0");}
        
    });
});
router.get("/v1/login/:uname&:upwd",(req,res)=>{
    var $uname=req.params.uname;
    var $upwd=req.params.upwd;
    console.log(req.params);
    pool.query("select * from user where uname=? and upwd=?",[$uname,$upwd],(err,result)=>{
        if(err)throw err;
        console.log(result);
        if(result.length>0){
            res.send("1");
        }else if(result.length==0){
            res.send("0");
        }
    });
});
router.get("/v1/showuserlist",(req,res)=>{
    pool.query("select * from user",(err,result)=>{
        if(err)throw err;
            res.send(result);
    });
});

router.delete("/v1/deluser/:uid",(req,res)=>{
    var $uid=req.params.uid;
pool.query("delete from user where uid=?",[$uid],(err,result)=>{
    if(err)throw err;
    res.send("1");
});
});
router.get("/v1/queryuser/:uid",(req,res)=>{
    var $uid=req.params.uid;
    pool.query("select * from user where uid=?",[$uid],(err,result)=>{
        if(err)throw err;
            res.send(result);
            // console.log(result);
    });
});
router.put("/v1/updateuser",(req,res)=>{
    var $uid=req.body.uid;
    var $uname=req.body.uname;
    var $upwd=req.body.upwd;
    var $email=req.body.email;
    var $phone=req.body.phone;
    var $user_name=req.body.user_name;
    var $sex=req.body.sex;
pool.query("update user set uname=?,upwd=?,email=?,user_name=?,sex=?,phone=? where uid=?",[$uname, $upwd,$email,$user_name,$sex,$phone,$uid],(err,result)=>{
    if(err)throw err;
    res.send("1");
});
});
module.exports=router;