// ./models/subscriber.js
"use strict";

const { default: mongoose } = require("mongoose");

/**
 * @TODO: Listing 14.3 (p. 206)
 * 스키마 정의
 */
const Mongoose = require("mongoose"),
    subscriberSchema = mongoose.Schema({
        name: String,
        email: String,
        newsletter: Boolean
    });

module.exports = mongoose.model(
    "Subscriber",
    subscriberSchema
);
// Subscriber 모델 생성
