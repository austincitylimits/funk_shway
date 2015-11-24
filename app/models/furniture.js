var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var furnitureSchema = new Schema({
webId: ObjectId,
type: String,
title: String,
description: String,
price: Number,
listDate: { type: Date, default: Date.now },
});
