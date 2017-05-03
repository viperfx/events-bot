'use strict'

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const webhookURL = process.env.SLACK_WEBHOOK;
const channel = process.env.SLACK_CHANNEL;
const request = require('request');

module.exports.check_new = (event, context, callback) => {
    var slack_payload = {
        "text": "Hello",
        "channel": channel,
        "username": "torontojs-events-bot"
    }
    request.post(webhookURL, {body: slack_payload, json:true}, function (error, response, body) {
        // console.log(response);
        console.log(body);
    });
}