import React from 'react';
import {Bar} from 'react-chartjs-2';

import colors from './colors';

const BarChartComponent = (props) => {
    let { results } = props;
    let dataValues = [];
    let bgColors = [];
    let labels = [];
    results.map((vote, i) =>  { 
        dataValues.push(vote.votes) 
        bgColors.push(colors[i])
        labels.push(vote.poll_value)
    })
    let data = {
        labels: labels,
        datasets: [{
            label: 'Atkvødur',
            data: dataValues,
            backgroundColor: bgColors,
            borderWidth: 1
        }],
    }

    let options = {
        title: {
            display: true,
            text: 'Tal av atkvøðum'
        },
        legend: {
            labels: {
                fontSize: 0
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    stepSize: 1
                    }
                }]
        },
    }
    return(
        <Bar data={data} width={100} height={50} options={options}/>
    )
}

export default BarChartComponent;