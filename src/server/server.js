/* eslint-disable camelcase */
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({
    extended: false
}))

const {
    get_user_byName,
    add_user,
    add_article,
    get_allArticles,
    get_oneArticle_byId,
    get_messageBoard,
    add_message
} = require('./tools')

// parse application/json
app.use(bodyParser.json())

app.listen(3000, () => {
    console.log('ok=========')
})

app.get('/haveusername', async (req, res) => {
    let ret = await get_user_byName(req.query.username)
    res.send({
        have: ret
    })
})

app.post('/register', async (req, res) => {
    let ret = await add_user(req.body)
    if (ret) {
        res.send({
            success: true
        })
    }
})

app.post('/login', async (req, res) => {
    let success = false
    let msg = 'ok'
    let ret = await get_user_byName(req.body.username)
    if (!ret) {
        msg = '用户不存在'
        res.send({
            success: success,
            msg: msg
        })
        return
    }
    if (ret.password !== req.body.password) {
        msg = '用户名或密码错误'
        res.send({
            success: success,
            msg: msg
        })
        return
    }
    success = true
    res.send({
        success: success,
        msg: msg,
        username: ret.username
    })
})

app.get('/articles', async (req, res) => {
    let ret = await get_allArticles()
    res.send(ret.reverse())
})

app.get('/detile', async (req, res) => {
    let id = req.query.id
    let ret = await get_oneArticle_byId(id)
    res.send(ret)
})

app.post('/addArticle', async (req, res) => {
    let article = req.body
    let ret = await add_article(article)
    if (ret) {
        res.send({
            tips: '发表成功',
            success: true
        })
    } else {
        res.send({
            tips: '发表失败 请重试',
            success: false
        })
    }
})

app.get('/getMessage', async (req, res) => {
    let ret = await get_messageBoard()
    res.send(ret.reverse())
})

app.post('/addMessage', async (req, res) => {
    try {
        let ret = await add_message(req.body)
        res.send(ret)
    } catch (e) {
        console.log(e)
    }
})
