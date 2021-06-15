const details = require('../utils/data')

function getLeaveBalance (req, res) {
    try {
        tempObj = details.leaveBalance
        res.send('Leave Balance: ' + (JSON.stringify(tempObj)))
    } catch (e) {
        res.send(400).send(e)
    }
}

module.exports.getLeaveBalance = getLeaveBalance
