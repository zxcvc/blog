/* eslint-disable camelcase */
const {
    user_model,
    article_model,
    message_boader_model
} = require('./db')

async function get_user_byName (username) {
    let ret = await user_model.findOne({
        username: username
    })
    return ret
}

async function add_user (user_obj) {
    let ret = await user_model.create(user_obj)
    return Boolean(ret)
}

async function get_allArticles () {
    let ret = await article_model.find()
    return ret
}

async function get_oneArticle_byId (id) {
    let ret = await article_model.findOne({ _id: id })
    return ret
}

async function add_article (article_obj) {
    let ret = await article_model.create(article_obj)
    return Boolean(ret)
}

async function get_messageBoard () {
    let ret = await message_boader_model.find()
    return ret
}

async function add_message (message_obj) {
    let ret = message_boader_model.create(message_obj)
    return ret
}

module.exports = {
    get_user_byName,
    add_user,
    add_article,
    get_allArticles,
    get_oneArticle_byId,
    get_messageBoard,
    add_message
}
