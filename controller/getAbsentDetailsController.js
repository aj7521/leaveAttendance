const details = require('../test/data')

function getAbsentDetails
(req, res) {
    try {
        res.send('Absent Details: ' + details.absentDetails)
    } catch (e) {
        res.send(400).send(e)
    }
}

module.exports.getAbsentDetails = getAbsentDetails
