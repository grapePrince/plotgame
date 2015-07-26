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
	var sQuery = 'select category, name from Card join Configuration where version = ' + mMysql.escape(nVer) + ';',
	    i, nLen,
	    oResult = {},
	    row;

	mConn.query(sQuery, function(err, rows, fields) {
    	if (err) throw err;
    	if (rows) {
    		for (i = 0, nLen = mCom.nCategory ; i < nLen ; i++) {
    		    oResult[i] = [];    	
    		}
    		for (i = 0, nLen = rows.length ; i < nLen ; i++) {
    			row = rows[i];
    			oResult[row.category].push(row.name);
    		}
    		console.log(oResult);
    		mCom.response(oRes, stringfy(oResult));
    	}
	});
};

//프로그래밍 한다음에 라떼에 올려서 돌려볼것. 
//CRUD