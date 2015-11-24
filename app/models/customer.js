var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var customerSchema = new Schema({
CustId: ObjectId,
name: {
first: String,
last: String
}
email: String,
phoneNumber: number,
lastWorkedWith: { type: Date, default: Date.now },
});