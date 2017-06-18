import React from "react"
import {Line as LineChart} from "react-chartjs"
import { getLocalStorageData, createTargetedData } from "../utils"
import { TARGET_DATA } from "../globals"

const options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    suggestedMax: 125
                }
            }]
        }
    }

const targetedData = createTargetedData(TARGET_DATA)


export default class Display extends React.Component {

    constructor (props) {
        super(props)
        this.state = {chartLabels: [], chartData: []}
        this.updateData = this.updateData.bind(this)
    }

    componentWillReceiveProps (nextProps) {
        this.setState({chartLabels: nextProps.chartLabels, chartData: nextProps.chartData})
    }

    updateData () {

        let fooData = []

        for (let entry in this.state.chartData) {
            const date = this.state.chartLabels[entry]
            console.log(date)
            if(targetedData[date] !== undefined) {
                console.log(entry, date, targetedData)
                fooData.push(targetedData[date])
            } else {
                fooData.push(null)
            }
        }

        console.log(fooData)

        return (
            {
                labels: this.state.chartLabels,
                datasets: [{
                    fill: true,
                    label: 'My Push-up Count',
                    data: this.state.chartData,
                    borderWidth: 1,
                    backgroundColor: ['rgba(0, 255, 0, 0.4)']
                },
                {
                    fill: 0,
                    label: 'My Targeted Push-up Count',
                    data: fooData,
                    borderWidth: 1,
                    backgroundColor: ['rgba(0, 0, 255, 0.5)']
                }
                ]
            }
        )
    }

    render () {
        const data = this.updateData()
        return (
            <LineChart data={data} options={options} />
        )
    }
}