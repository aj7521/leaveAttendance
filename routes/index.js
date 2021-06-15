const express = require('express')
const request = require('request')
const router = express.Router()

const getAbsentDaysController = require('../controller/getAbsentDaysController')
const getAbsentDetailsController = require('../controller/getAbsentDetailsController')
const getLeaveBalanceController = require('../controller/getLeaveBalanceController')
const getHolidayCalenderController = require('../controller/getHolidayCalenderController')
const getErrorController = require('../controller/getErrorController')

router.get('', (req,res) => {
    res.render('index', {
        title: 'Leave & Attendance',
        name: 'Aman Jain'
    })
})
router.get('/absentDays/', (req,res) => {
    getAbsentDaysController.getAbsentDays(req, res);
})

router.get('/absentDetails/', (req,res) => {
    getAbsentDetailsController.getAbsentDetails(req, res);
})

router.get('/leaveBalance/', (req,res) => {
    getLeaveBalanceController.getLeaveBalance(req, res);
})

router.get('/holidayCalender/', (req,res) => {
    getHolidayCalenderController.getHolidayCalender(req, res);
})

router.get('*', (req,res) => {
    getErrorController.getError(req, res);
})

module.exports = router