import { START_DATE, END_DATE } from "../globals"

export const getLocalStorageData = () => {
    const trainingDays = localStorage
    return Object.entries(trainingDays).sort((a,b) => new Date(a[0]) - new Date(b[0]))
}

export const setMissingData = () => {
    const trainingDays = localStorage
    const today = new Date().toLocaleDateString()
    var start = START_DATE
    var end = END_DATE

    while(start < end){         
       var newDate = start.setDate(start.getDate() + 1);
       start = new Date(newDate);
       console.log(trainingDays.indexOf(start.toLocaleDateString()))
    }
}