const error = require('../utils/error')

function getError (req, res) {
    try {
        res.send('ERROR: ' + error.errorMsg)
    } catch (e) {
        res.send(400).send(e)
    }
}
module.exports.getError = getError
