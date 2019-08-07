module.exports = (syl,value,cb) => {
    const mysql = require('mysql')
    const conn = mysql({

        host:'localhost',
        port:3306,
        user:'root',
        password:'',
        database:'yingxiong',
        multipleStatements:true

    })
    conn.connect()
    conn.query(syl,value,cb)
    conn.end();
}