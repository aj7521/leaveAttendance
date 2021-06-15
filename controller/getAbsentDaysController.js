const details = require('../utils/data')

function getAbsentDays (req, res) {
    try {
        res.send('Absent Days: ' +  details.absentDays)
    } catch (e) {
        res.send(400).send(e)
    }
}

module.exports.getAbsentDays = getAbsentDays