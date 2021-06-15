const details = {
    absentDays: 9.0,
    absentDetails: ["1/6/2021",
                    "2/6/2021",
                    "3/6/2021",
                    "4/6/2021"],
    leaveBalance: [{
        leaveType: "Contingency Leaves",
        totalLeaves: 6,
        validity: "31/12/2021"
    },{
        leaveType: "Optional Holidays",
        totalLeaves: 3,
        validity: "31/12/2021"
    },{
        leaveType: "Special Privilege Leaves",
        totalLeaves: 10,
        validity: "31/12/2021"
    }],
    holidayCalender: [{
        date: "15th August",
        weekday: "Sunday",
        occassion: "Independence Day"
    },{ 
        date: "10th September",
        weekday: "Friday",
        occassion: "Ganesh Chaturthi"
    },{
        date: "2nd October",
        weekday: "Saturday",
        occassion: "Gandhi Jayanti"
    }]
}

module.exports = details