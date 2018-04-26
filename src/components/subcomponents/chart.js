import React, { Component } from 'react';
import {connect} from 'react-redux';
import Chart from 'chart.js'
import {getChartData} from '../../redux/axios/bugs.js'

class BugChart extends Component {
  constructor(props){
    super(props);
    this.props.loadChart();
    this.state = {
        selectedOption:'pie',
    }
  }

  componentDidUpdate(){
    var myChart = new Chart(this.ctx, {
        type: this.state.selectedOption,
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
    return (
        <div>
            <div class="btn-group btn-group-toggle" data-toggle="buttons">
            <div className="radio">
                <label class={(this.state.selectedOption=='pie')?'btn btn-primary btn-lg active':'btn btn-primary btn-lg'}>
                    <input style={{position: 'absolute',clip: 'rect(0, 0, 0, 0)'}} type="checkbox" value="pie" checked={this.state.selectedOption === 'pie'} onChange={()=>this.setState({selectedOption:'pie'})} /> Pie
                </label>
            </div>
            <div className="radio">
                <label class={(this.state.selectedOption=='doughnut')?'btn btn-primary btn-lg active':'btn btn-primary btn-lg'}>
                    <input style={{position: 'absolute',clip: 'rect(0, 0, 0, 0)'}} type="radio" value="doughnut" checked={this.state.selectedOption === 'doughnut'} onChange={()=>this.setState({selectedOption:'doughnut'})}/> Doughnut
                </label>
            </div>
            </div>
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