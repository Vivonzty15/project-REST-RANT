const router = require('express').Router()
const Comment = require('../models/comment.js')
const commentSeedData = require('../models/seed_comments.js')

router.get('/data/seed', (req, res) => {
    Comment.insert
})