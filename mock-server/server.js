const jsonServer = require('json-server');
const server = jsonServer.create();
const middleWare = jsonServer.defaults();
const data = require('./mocks');

server.use(middleWare);
server.use(jsonServer.bodyParser);

// HTTP mocks for users data
server.get('/users', (req, res) => {
    res.status(200).send(data.usersData);
});


// Mock server running on port 3000
server.listen(3000, () => {
    console.log('JSON Server is running at 3000 port');
});
