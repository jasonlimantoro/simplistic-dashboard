const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router(require('./data/db')());

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const port = 3004;
server.listen(port, () => {
	// eslint-disable-next-line
	console.log(`listening on port ${port}`);
});
