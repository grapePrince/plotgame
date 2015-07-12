var mUrl = require("url");
var mRequestHandlers = require("./requestHandlers");

//var sApi = "plotgame/api";
var oHandle = [];
oHandle["cardList/get"] = mRequestHandlers.getCardList;

function route(oReq, oRes) {
	
	
	var sPath = mUrl.parse(oReq.url).pathname;
	//var sPath = mUrl.parse(oRequest.url).pathname.split(sApi)[1];
    sPath = sPath ? sPath.replace(/^\/|\/$/g, "") : "";
	var sQuery = mUrl.parse(oReq.url).query;
	
	console.log(oReq.url);
	console.log(sQuery);
	console.log(sPath);
	console.log(oHandle);

	if (oHandle[sPath]) {
		console.log('dfdfdfdf');
		oHandle[sPath](sQuery, oRes);
	} else {
    	console.log("No request handler found for " + sPath);
    	oRes.writeHead(404, {"Content-Type": "text/plain"});
    	oRes.write("404 Not found");
    	oRes.end();
  	}
}

exports.route = route;