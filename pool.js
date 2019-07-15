const mysql=require('mysql');
var pool=mysql.createPool({
    host:'127.0.0.1',
    Port:'3306',
    user:'root',
    password:'',
    database:'1world',
    connectionLimit:20
    });
    module.exports=pool;