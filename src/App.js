import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Alert } from "react-bootstrap"
import Interface from "./components/Interface"
import Display from "./components/Display"

import { setDummyData } from "./utils"
import { START_DATE, END_DATE } from "./globals"

class App extends Component {


    constructor (props) {
        super(props)
        this.state = {count: 0, chartData: [], chartLabels: []}
        this.getLocalStorageData = this.getLocalStorageData.bind(this)
        this.addCount = this.addCount.bind(this)
        this.clearAll = this.clearAll.bind(this)
    }

    componentDidMount () {
      setDummyData()
      this.getLocalStorageData()
    }

    getLocalStorageData () {
        const trainingDays = localStorage
        const sortedTrainingDays = Object.entries(trainingDays).sort((a,b) => new Date(a[0]) - new Date(b[0]))
        const chartLabels = new Array()
        const chartData = new Array()

        for (let entry of sortedTrainingDays) {
            chartLabels.push(entry[0])
            chartData.push(entry[1])
        }
        this.setState({chartLabels: chartLabels, chartData: chartData})
    }

    addCount (event, count) {
        const today = new Date()
        const todayKey = today.toLocaleDateString()
        let todayCount = parseInt(localStorage.getItem(todayKey)) || 0
        todayCount = todayCount + count
        localStorage.setItem(todayKey, todayCount)

        let chartLabels = this.state.chartLabels
        let chartData = this.state.chartData

        chartLabels.push(todayKey)
        chartData.push(count)  

        this.setState({count: todayCount, chartData: chartData, chartLabels: chartLabels})
    }

    clearAll () {
        localStorage.clear()
        this.setState({chartData: [], chartLabels: [], count: 0})
    }

    render() {
        console.log("render")
        const { chartData, chartLabels, count } = this.state

        console.log(chartData)

        let sumPushUps = chartData.reduce((a, b) => parseInt(a) + parseInt(b), 0)
        let sumDays = chartLabels.length

        return (
            <div className="App">
                <div id="line">
                    <Alert>Hey! You have done an incredible amount of {sumPushUps} in {sumDays} days so far!</Alert>
                    <Interface addCount={this.addCount} clearAll={this.clearAll} count={count} />
                    <Display count={count} chartData={chartData} chartLabels={chartLabels} />
                </div>
            </div>
        )
    }
}

export default App;
