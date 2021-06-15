const details = require('../test/data')

function getHolidayCalender
(req, res) {
    try {
        tempObj = details.holidayCalender
        res.send('Holiday Calender: ' + (JSON.stringify(tempObj)))
    } catch (e) {
        res.send(400).send(e)
    }
}

module.exports.getHolidayCalender = getHolidayCalender
