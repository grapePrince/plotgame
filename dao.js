var mMysql = require('mysql');
var mCom = require('./common');
var mConn = mMysql.createConnection({
  host     : '127.0.0.1',
  user     : 'rahata',
  password : 'latte!23',
  database : 'plotgame'
});

mConn.connect();

exports.getCardList = function(oReq, oRes, nVer) {	
	var sQuery = 'select * from Card join Configuration where version = ' + mMysql.escape(nVer) ';';
	mConn.query(sQuery, function(err, rows, fields) {
    	if (err) throw err;
    	if (rows) {
    		console.log(rows);
    		mCom.response(oRes, rows);
    	}
	});
};

//프로그래밍 한다음에 라떼에 올려서 돌려볼것. 
//CRUD