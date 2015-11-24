var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var transactionSchema = new Schema({
CustId: ObjectId,
name: {
first: String,
last: String
}
email: String,
phoneNumber: number,
purchaseDate: { type: Date, default: Date.now },
});