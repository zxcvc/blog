/* eslint-disable camelcase */
const mongoose = require('mongoose')
mongoose.connect(' mongodb://127.0.0.1:27017/blog', {
    useNewUrlParser: true
})
const Schema = mongoose.Schema

let user_scm = new Schema({
    username: String,
    password: String
})
let article_scm = new Schema({
    title: String,
    author: String,
    time: Date,
    describe: String,
    content: String
})
let message_boader_scm = new Schema({
    username: String,
    message: String,
    time: Date
})

let user_model = mongoose.model('user', user_scm, 'user')
let article_model = mongoose.model('article', article_scm, 'article')
let message_boader_model = mongoose.model('message_boader', message_boader_scm, 'message_boader')

module.exports = {
    user_model,
    article_model,
    message_boader_model
}
