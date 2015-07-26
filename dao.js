var mMysql = require('mysql');
var mCom = require('./common');
var mConn = mMysql.createConnection({
    connectionLimit : 100, //important
  	host     : '127.0.0.1',
  	user     : 'rahata',
  	password : 'latte!23',
  	database : 'plotgame'
});

mConn.connect();

exports.getCardList = function(oReq, oRes, nVer) {	
	var sQuery = 'select category, name from Card join Configuration where version = ' + mMysql.escape(nVer) + ';';
	getResult(sQuery, getCardListCallback, oRes);    
};

function getCardListCallback(oRes, rows) {
	var i, nLen,
	    oResult = {},
	    row;
	if (rows) {
    	for (i = 0, nLen = mCom.nCategory ; i < nLen ; i++) {
    		oResult[i] = [];    	
    	}
    	for (i = 0, nLen = rows.length ; i < nLen ; i++) {
    		row = rows[i];
    		oResult[row.category].push(row.name);
    	}
    	mCom.response(oRes, oResult);
    }
}

function getResult(sQuery, fCallback, oRes) {
    mConn.getConnection(function(err,conn){
        if (err) {
          conn.release();
          oRes.json({"code" : 100, "status" : "Error in connection database"});
          return;
        }
        conn.on('error', function(err) {      
              oRes.json({"code" : 100, "status" : "Error in connection database"});
              return;     
        });   
        console.log('connected as id ' + conn.threadId);
        conn.query(sQuery,function(err,rows){
            conn.release();
            if(!err) {
            	fCallback.call(this, oRes, rows);
            }           
        });
  });
}