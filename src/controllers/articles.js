const articlesCtrl = {};
const Articles = require('../models/Articles');


// Get all products
articlesCtrl.getProducts = async (req, res) => {
    await Articles.find()
        .then(article => res.json(article))
        .catch(err => res.status(400).res.json(`Error: ${err}`));
}


// Create Product
articlesCtrl.createProduct = async (req, res) => {
    const newArticle = new Articles({
        title: req.body.title,
        description: req.body.description,
        authorName: req.body.authorName
    })

    await newArticle.save()
        .then(() => res.json('Created'))
        .catch(err => res.status(400).json(`Error: ${err}`));
}


// Get product
articlesCtrl.getProduct = async (req, res) => {
    await Articles.findById(req.params.id)
        .then(article => res.json(article))
        .catch(err => res.status(400).json(`Error: ${err}`))
}


// Update product
articlesCtrl.updateProduct = async (req, res) => {
    await Articles.findById(req.params.id)
        .then(article  => {
            article.title = req.body.title;
            article.description = req.body.description;
            article.authorName = req.body.authorName;

            article.save()
                .then(() => res.json('Edited'))
                .catch(err => res.status(400).json(`Error: ${err}`))
        })
        .catch(err => res.status(400).json(`Error: ${err}`))
}


// Delete product
articlesCtrl.deleteProduct = async (req, res) => {
    await Articles.findByIdAndDelete(req.params.id)
        .then(() => res.json('Deleted'))
        .catch(err => res.status(400).json(`Error: ${err}`))
}


module.exports = articlesCtrl;