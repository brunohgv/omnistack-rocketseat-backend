const Box = require('../models/Box')

class BoxController {
    async store(req, res) {
        const box = await Box.create({ title: req.body.title })

        return res.json(box)
    }

    async show(req, res) {
        const box = await Box.findById(req.params.id).populate('files')
    
        return res.json(box)
    }

    async getAll(req, res) {
        const boxes = await Box.find({}, (err, result) => {
            return result
        })

        return res.json(boxes)
    }
}

module.exports = new BoxController()