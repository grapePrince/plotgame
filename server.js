var mExpress = require('express'),
    mRoute = require('./router'),
    mApp = mExpress();     

var arGetUrls = [
	'/',
	'/cardList/get'
];

var arPostUrls = [
	'/'
]

for (url in arGetUrls) {
	mApp.get(arGetUrls[url], mRoute.route);
};

for (url in arPostUrls) {
	mApp.post(arPostUrls[url], mRoute.route);
};

var mServer = mApp.listen(7101, function () {
  var nHost = mServer.address().address;
  var nPort = mServer.address().port;
  console.log('Example app listening at http://%s:%s', nHost, nPort);
});
