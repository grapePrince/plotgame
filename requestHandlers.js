var mDao = require('./dao');
 
exports.getCardList = function(oReq, oRes, oQuery) {
	if (oQuery && oQuery.version) {
		mDao.getCardList(oReq, oRes, Number(oQuery.version));
	} else {
		console.log('getCardList : invalid version')
	}
};
