const Article = require('../models').Article;
const User = require('../models').User;
module.exports = {
    createGet: (req, res) => {
        res.render('article/create');
    },

    createPost: (req, res) => {
        const title = req.body.title;
        const content = req.body.content;

        let errorMsg = false;
        if (!req.isAuthenticated()) {
            errorMsg = 'You should be logged in to make articles!'
        } else if (!title) {
            errorMsg = 'Invalid title!';
        } else if (!content) {
            errorMsg = 'Invalid content!';
        }

        if (errorMsg) {
            res.render('article/create', {error: errorMsg, title, content});
            return;
        }
        const authorId = req.user.id;
        const article = {
            title,
            content,
            authorId,
        };

        Article.create(article).then(article => {
            res.redirect('/')
        }).catch(e => {
            console.log(e.message);
            res.render('article/create');
        });
    },

    details: (req, res) => {
        const articleId = Number(req.params.id);
        Article.findById(articleId, {
            include: [{
                model: User
            }]
        }).then(article => {
            if (article == null) {
                throw new Error('Article not found: ' + articleId);
            }
            res.render('article/details', article.dataValues)
        }).catch(e => {
            console.log(e.message);
            res.redirect('/404');
        });
    },
    editGet: function (req, res) {
        let articleId = req.params.id;
        Article
            .findById(articleId)
            .then(article => {
                res.render('article/edit', article.dataValues)
            });
    },
    editPost: function (req, res){
        let articleArgs = req.body;
        let articleId = req.params.id;

        Article
            .findById(articleId)
            .then(article => {
                article
                    .update(articleArgs)
                    .then(() => {
                        res.redirect('/user/myarticles');
                    })
            })
    },
    deleteGet: function (req, res) {
        let articleId = req.params.id;
        Article
            .findById(articleId)
            .then(article => {
                res.render('article/delete', article.dataValues)
            });
    },
    deletePost: function (req, res) {
        let articleId = req.params.id;

        Article
            .findById(articleId)
            .then(article => {
                article
                    .destroy()
                    .then(() => {
                        res.redirect('/');
                    })
            })
    }
};