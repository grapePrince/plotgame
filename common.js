
exports.response = function(oResponse, oResult) {
	oResponse.writeHead(200, {"Content-Type": "text/html"});
    oResponse.write(oResult);
    oResponse.end(); 
}

exports.nCategory = 2;