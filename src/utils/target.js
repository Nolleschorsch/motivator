export const targetedData = {
    "6/18/2017": 10,
    "6/25/2017": 15,
    "7/2/2017": 20,
    "7/9/2017": 25,
    "7/16/2017": 30,
    "7/23/2017": 35,
    "7/30/2017": 40,
    "8/6/2017": 45,
    "8/13/2017": 50,
    "8/20/2017": 55,
    "8/27/2017": 60,
    "9/3/2017": 65,
    "9/10/2017": 70,
    "9/17/2017": 75,
    "9/24/2017": 80,
    "10/1/2017": 85,
    "10/8/2017": 90,
    "10/15/2017": 95,
    "10/22/2017": 100
}

export const createTargetedData = (config) => {
    const {startDate, increasePerWeek, targetAmount } = config
    let { startAmount } = config
    let start = new Date(startDate)
    let targetedData = {}
    targetedData[start] = startAmount
    while(startAmount < targetAmount){      
       const newDate = start.setDate(start.getDate() + 7)
       start = new Date(newDate)
       startAmount = startAmount + increasePerWeek
       targetedData[start.toLocaleDateString()] = startAmount
       //localStorage.setItem(start.toLocaleDateString(), Math.floor(Math.random() * (max - min)) + min)
    }
    console.log("the data", targetedData)
    return targetedData
}