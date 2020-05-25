const express = require('express')
const {User} = require('./models')
const jwt = require('jsonwebtoken')

const app = express()
app.use(require('cors')())
const SECRET = 'skahdksahdaiwruiwiq'
app.use(express.json())

const auth = async (req, res, next) =>{
    const raw = String(req.headers.authorization).split(' ').pop() 
    const {id} = jwt.verify(raw, SECRET)
    req.user = await User.findById(id)
    next()
}

app.get('/user', auth, async (req, res)=>{
    res.send(req.user)
})

app.post('/register', async (req, res)=>{
    const user = await User.create({
        username:req.body.username,
        password:req.body.password,       
    })
    res.send(user)
})

app.post('/login', async (req, res)=>{
    const user = await User.findOne({
        username:req.body.username
    })
    if(!user){
        return res.status(422).send({
            message:'doesnt exist'
        })
    }
    const isPassValid = require('bcrypt').compareSync(
        req.body.password,
        user.password
    )
    if(!isPassValid){
        return res.status(422).send({
            message:'wrong'
        })
    }
    const token = jwt.sign({
        id:String(user._id)
    },SECRET)

    res.send({
        user,
        token:token
    })
})



app.get('/profile', auth, async(req, res)=>{
    res.send(req.user)
})

app.listen(3002,()=>{
    console.log('http:localhost:3002');
    
})