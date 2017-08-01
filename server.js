	var http = require('http');

	var PORT1 = 7000;
	var PORT2 = 7500;

	function handleRequest(req,res){
		res.end('Server works YAY' + req.url);
	}

	var server = http.createServer(handleRequest);

	server.listen(PORT1,function(){
		console.log(`Server works  : http://localhost:${PORT}`);
	});


	function handleRequest2(req,res){
		res.end('Server does not work' + req.url);
	}

	var server = http.createServer(handleRequest2);

	server.listen(PORT2,function(){
		console.log(`Server does not work : http://localhost:${PORT}`);
	});


