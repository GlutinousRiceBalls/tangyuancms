const http = require('http')
const express = require('express')
const mysql = require('mysql')
const ejs = require('ejs')
const uuid = require('uuid').v1
const session = require('express-session')
const bodyParser = require('body-parser')
const path = require('path')
const request = require('request')


var app = express()
var router = express.Router()
var dbOptions = {
    host: "127.0.0.1",
    user: "tangyuan",
    passwrod: "666888",
    database: "tangyuancms"
}
var conn = mysql.createConnection(dbOptions)

conn.connect()
conn.query('select 1', function(error, result, ob) {
    console.log(error)
    conn.end()
})

app.listen(80)