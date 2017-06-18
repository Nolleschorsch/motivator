import { START_DATE, END_DATE } from "../globals"

export const setDummyData = () => {
    let start = START_DATE
    const end = END_DATE

    const min = 10
    const max = 15

    while(start < end){         
       const newDate = start.setDate(start.getDate() + 1)
       start = new Date(newDate)
       localStorage.setItem(start.toLocaleDateString(), Math.floor(Math.random() * (max - min)) + min)
    }
}