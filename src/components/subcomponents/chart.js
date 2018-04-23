import React, { Component } from 'react';
import {connect} from 'react-redux';
import Chart from 'chart.js'
import {getChartData} from '../../redux/axios/bugs.js'

class BugChart extends Component {
  constructor(props){
    super(props);
    this.props.loadChart();
  }

  componentDidUpdate(){
    var myChart = new Chart(this.ctx, {
        type: 'pie',
        data: {
            labels: ["Duplicate Bugs", "Unique Bugs"],
            datasets: [{
                label: '# of Votes',
                data: [this.props.data.duplicate,this.props.data.total-this.props.data.duplicate],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
  }
  render() {
      console.log(this.props.data);
    return (
        <div>
            <h1 className = "text-center">Stats for Bug Duplication </h1>
        <canvas id="bugChart" width="100" height="100" ref = {(elem)=>{this.ctx = elem}}></canvas>
        </div>
    );
  }
}

const mapStateToProps = (state)=>{
    console.log(state);
    return {
        data:state.bugs.chart,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        loadChart:()=>{dispatch(getChartData())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BugChart);