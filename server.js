const express = require('express');
const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server);

io.on('connection', function(socket){
    console.log('something connected')
    socket.on('disconnect', function(){
        console.log('someone disconnected')
    })
})

app.use(express.static(__dirname));
app.get('/', (req, res)=> {
    console.log('hit the point')
    res.sendFile('src/index.html')
});
app.listen(process.env.PORT || 2000, () => console.log(`Listening on port ${process.env.PORT || 2000}!`));
