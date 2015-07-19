var mongo = require('./dao');
 
exports.getCardList = function(oReq, oRes, oQuery) {
	console.log(oReq.query);
    console.log(oQuery);
};
