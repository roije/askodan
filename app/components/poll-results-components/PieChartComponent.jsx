import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.piecelabel.js';

import colors from './colors';

const PieChartComponent = (props) => {
    let { results } = props;
    let dataValues = [];
    let bgColors = [];
    let labels = [];
    results.map((vote, i) =>  { 
        dataValues.push(vote.percentage) 
        bgColors.push(colors[i])
        labels.push(vote.poll_value)
    })
    let data = {
        datasets: [{
            data: dataValues,
            backgroundColor: bgColors
        }],    
        labels: labels
    };
    let options = {
        title: {
            display: true,
            text: 'Atkvøður (%)'
        },
        legend: {
            labels: {
                fontSize: 0
            }
        },
        pieceLabel: {
            // precision for percentage, default is 0
            precision: 0,
            // font size, default is defaultFontSize
            fontSize: 14,
            // font color, default is '#fff'
            fontColor: '#fff',
            // font family, default is defaultFontFamily
            fontFamily: "'Raleway', sans-serif'"
        }
    }
    return(
        <Pie data={data} options={options}/>
    )
}

export default PieChartComponent;