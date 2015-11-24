var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var designSchema = new Schema({
webId: ObjectId,
type: String,
title: String,
description: String,
customerTestimonial: String,
price: Number,
completionDate: { type: Date, default: Date.now },
});