import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"As32@d45",
    database:"test"
})

app.use(express.json())
app.use(cors())

app.get("/", (req,res)=>{
    res.json("Hello from backend")
})

app.get("/books", (req,res)=>{
    const q = "select * from books"
    db.query(q, (err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/books", (req,res)=>{
    const q = "insert into books (`title`,`desc`,`cover`,`price`) values (?)"
    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover,
        req.body.price,
    ]

    db.query(q,[values], (err,data)=>{
        if(err){
            console.log(err)
            return res.send(err)
        }
        return res.json("new book created")
    })
})

app.put("/books/:id",(req,res)=>{
    const bookId = req.params.id
    const q = "update books set `title`= ?, `desc`= ?, `cover`= ?, `price`= ? where id= ?"

    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover,
        req.body.price,
    ]

    db.query(q,[...values,bookId], (err,data)=>{
        if(err) return res.send(err)
        return res.json(data)
    })
})

app.delete("/books/:id",(req,res) => {
    const bookId = req.params.id
    const q = "delete from books where id = ? "

    db.query(q,[bookId],(err,data)=>{
        if(err) return res.send(err)
        return res.json(data)
    })
})

app.listen(8800, ()=>{
    console.log("connected to backend")
})