const { exec } = require("../db/mysql");

const login = (username,password)=>{
    const sql = `select * from users where username='${username}' and password='${password}'`
    console.log(22);
    return exec(sql).then(rows=>{
        return rows[0] || {}
    })
}
module.exports = {
    login
}