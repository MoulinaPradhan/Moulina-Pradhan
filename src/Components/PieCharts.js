import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import Tilt from 'react-parallax-tilt';
import { Wave,Random } from 'react-animated-text';

class PieCharts extends Component {
 
    constructor(props) {
        super(props);

        this.state = {
            series: [44, 55, 41, 17, 15,12,9,5,4,8],
            options : {
                labels: 
                [ 'React',
                'Redux',
                'JavaScript',
                'Java',
                'DSA',
                'HTML',
                'CSS',
                'MongoDB',
                'Firebase',
                'Node.js',
                'Express.js'],
                colors: ["#F153A7","#34c38f","#8DFF33", "#556ee6","#f46a6a", "#50a5f1", "#f1b44c","#FF5B33","#A453F1","#53F1EC","#ECF153"],
                legend: {
                    show: true,
                    position: 'bottom',
                    horizontalAlign: 'center',
                    verticalAlign: 'middle',
                    floating: false,
                    fontSize: '25px',
                    offsetX: 0,
                    offsetY: -20,
                   
                },
                responsive: [{
                   
                    breakpoint: 600,
                    options: {
                        chart: {
                            height: 240
                        },
                        legend: {
                            show: true,
                            color:"white"
                        },
                    }
                }]
              
              }
        }
    }
    render() {
        return (
 <div id="skills" style={{marginTop:'10%'}}>
<h2 align="center">
<Random
  text="Skills"
 effect="pop"
  effectDirection="up"
  effectChange={0.6}
/>
</h2>
<Tilt> <ReactApexChart options={this.state.options} series={this.state.series} type="pie" height="550" /></Tilt> 

            </div>
        );
    }
}

export default PieCharts;