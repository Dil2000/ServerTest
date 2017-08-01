	var http = require('http')

	var PORT = 8080;

	function handleRequest(req,res){
		res.end('Server works' + req.url);
	}

	var server = http.createServer(handleRequest);

	server.listen(PORT,function(){
		console.log(`server listening on : http://localhost:${PORT}`);
	});
