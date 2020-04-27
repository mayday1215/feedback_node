

var comments = [
    {
        name:'张三',
        message:'今天是个好天气',
        dateTime:'2019年7月10日'
    },
    {
        name:'李四',
        message:'今天是个好天气',
        dateTime:'2019年7月10日'
    },
    {
        name:'王五',
        message:'今天是个好天气',
        dateTime:'2019年7月10日'
    },
    {
        name:'赵六',
        message:'今天是个好天气',
        dateTime:'2019年7月10日'
    }
]


const express = require("express")
const bodyParser = require("body-parser")
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



app.engine('html', require('express-art-template'))

app.use("/public/",express.static("./public"))

app.get("/",(req,res) => {
    res.render("index.html",{
        comments:comments
    })
    
})

app.get("/post",(req,res) => {
   res.render("post.html",{})
})

// app.get("/pinglun",(req,res) => {
//     let obj = req.query
//     obj.dateTime = new Date()
//     comments.push(obj)

//     res.redirect("/")
    
//  })

 app.post("/pinglun",(req,res) => {
    let obj = req.body
    obj.dateTime = new Date()
    comments.push(obj)
    res.redirect("/")
    
 })


app.listen("3000",() => {
    
    console.log('服务器启动成功，请访问127.0.0.1:3000')
})
