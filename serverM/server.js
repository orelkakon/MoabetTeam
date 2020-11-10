const express = require('express')
const cors = require('cors')
const sql = require('mysql')
const http = require('http');
const socketIO = require('socket.io');

const connection = sql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '207772922',
    database: 'moabet',
})

const app = express();
app.use(cors())
app.use(express.json())


// get all users and pass
app.get('/getdata', (req, res) => {
    const SELECT_ALL_DATA = 'SELECT * from users_passwords';
    connection.query(SELECT_ALL_DATA, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

// get all debts
app.get('/getdebts', (req, res) => {
    const SELECT_ALL_DEBTS = 'SELECT * from debts';
    connection.query(SELECT_ALL_DEBTS, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            
            res.send(result)
        }
    })
})

// add debt
app.get('/addDebt', (req, res) => {
    const ADD_DEBT = 'INSERT INTO debts (userInDebt,userNeedGetDebt,sum) VALUES ('
                                    +"'"+req.query.from+"'"+','+"'"+req.query.to+"'"+','+"'"+req.query.sum+"'"+')';
    connection.query(ADD_DEBT, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send('added')
        }       
    })
})

app.delete('/deleteDebt/:from/:to/:sum', (req,res)=>{
    const DELETE_DEBT = `DELETE FROM debts WHERE (userInDebt = '${req.params.from}' && userNeedGetDebt = '${req.params.to}' && sum = ${req.params.sum} );`;
    console.log(DELETE_DEBT)                            
    connection.query(DELETE_DEBT,(err, result)=>{
        if (err) {
            console.log(err)
        } else {
            res.send('deleted')
        } 
    })      
})

app.listen(3001, () => {
    console.log('server up')
})


//--------------------------------

const port = 4001;

const server = http.createServer(app);

const io = socketIO(server);

io.on('connection', socket => {

    io.sockets.emit('CREATE_MESSAGE', {
        content: `Someone Connected`
    });

    socket.on('SEND_MESSAGE', (messageObject) => {
        io.sockets.emit('CREATE_MESSAGE', messageObject);
    });
});

server.listen(port, () => console.log(`Listening on port ${port}`));