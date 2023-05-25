const express = require('express');
const app = express();
const bp = require('body-parser');
const db = require('mongoose');
const url = 'mongodb+srv://learn:1234@cluster0.jli3jxo.mongodb.net/Project'

db.connect(url).then(()=>{
    console.log('DB is on')
}).catch((err) =>{
    if (err) throw err;
});

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use(express.static('pages'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/index.html')
})


app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/pages/signup.html')
})


app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/pages/login.html')
})


app.get('/cart', (req, res) => {
    res.sendFile(__dirname + '/pages/cart.html')
})

app.get('/all', (req, res) => {
    res.sendFile(__dirname + '/pages/all.html')
})


const usersSchema = db.Schema({
    name: String,
    email: String,
    pass: Number
})

const usersList = db.model('users', usersSchema);

app.post('/signup', (req , res) => {

    const checkIfUserExists = async () => {
        let result = await usersList.findOne(
            {
                email: req.body.email,
            });
            if(result === null){
                let temp = {
                    name: req.body.name,
                    email: req.body.email,
                    pass: req.body.password
                }
                const AddToDb = async (user) => {
                    await usersList.insertMany(user)
                }
                console.log(temp);
                AddToDb(temp);
                res.redirect('/');

                
            }
            else{
                res.send(`<script>alert ('This Email exist in the systme'); location.href = "SignUp" </script> `)
            }}
            checkIfUserExists()

})


app.listen(4000, () => { console.log('server works on port 4000') })