const express = require('express')
const request = require('request')
const router = express.Router()

const getAbsentDaysController = require('../controller/getAbsentDaysController')
const getAbsentDetailsController = require('../controller/getAbsentDetailsController')
const getLeaveBalanceController = require('../controller/getLeaveBalanceController')
const getHolidayCalenderController = require('../controller/getHolidayCalenderController')

router.get('', (req,res) => {
    res.render('index', {
        title: 'Leave & Attendance',
        name: 'Aman Jain'
    })
})
router.get('/absentDays/', (req,res) => {
    res.render('absentDays', {
        title: 'Absent Days',
        name: 'Aman Jain',
        absentDays: getAbsentDaysController.absentDays
    })
})
router.get('/absentDetails/', (req,res) => {
    res.render('absentDetails', {
        title: 'Absent Details',
        name: 'Aman Jain',
        absentDetails: getAbsentDetailsController.absentDetails
    })
})

router.get('/leaveBalance/', (req,res) => {
    var CL = getLeaveBalanceController.leaveBalance[0]
    var OL = getLeaveBalanceController.leaveBalance[1]
    var PL = getLeaveBalanceController.leaveBalance[2]
    var endDate = '31/12/2021'
    res.render('leaveBalance', {
        title: 'Leave Balance',
        name: 'Aman Jain',
        totalCL: CL,
        optional: OL,
        specialPL: PL,
        endDate: endDate
    })
})

router.get('/holidayCalender/', (req,res) => {
    res.render('holidayCalender', {
        title: 'Holiday Calender',
        name: 'Aman Jain',
        holidayCal: getHolidayCalenderController.holidayCalender
    })
})

router.get('*', (req,res) => {
    res.render('404page', {
        title: '404 Page',
        name: 'Aman Jain',
        errormsg:  'Page Not Found.'
    })
})

module.exports = router