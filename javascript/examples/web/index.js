const http = require('http');
const os = require('os');
const mp = require('./metaparticle-package');

const port = 3000;

const server = http.createServer((request, response) => {  
	console.log(request.url);
	response.end(`Hello World: hostname: ${os.hostname()}\n`);
});

mp.containerize(
	{
		ports: [3000],
		repository: 'brendanburns',
		publish: true,
		public: true
	},
	() => {
		server.listen(port, (err) => {  
			if (err) {
				return console.log('server startup error: ', err);
			}
			console.log(`server up on ${port}`);
		});
	}
);
