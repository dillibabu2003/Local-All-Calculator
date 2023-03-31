import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useState, useEffect } from "react";

export default function Chart({ points }) {

    const [options, setOptions] = useState({
        chart: {
            type: 'area',
            styleMode: true,
            backgroundColor: 'transparent',
            animation: false,
            height: '232.5px',
        },

        title: {
            text: ""
        },

        xAxis: {
            //tickInterval: 2,
            tickLength: 0,
            labels: {
                step: 1
            },
            gridLineWidth: 1,
            gridZIndex: 2,
        },

        yAxis: {
            enabled: false,

            title: {
                text: "",
            },
            labels: {
                enabled: false,
            },
            gridLineColor: 'transparent',
        },

        plotOptions: {
            series: {
                pointStart: new Date().getFullYear(),
                fillColor: {
                    linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                    stops: [
                        [0, 'rgba(0, 221, 111, 0.65)'],
                        [1, 'rgba(204, 255, 230,0.2)']
                    ]
                }
            },
            area: {
                color: '#00DD6F',
            },

        },

        tooltip: {
            backgroundColor: '#FFFFFF',
            borderColor: '#FFFFFF',
            borderRadius: 20,
            style: {
                color: '#000000',
            },
            formatter() {
                return `${this.series.name} <strong>\u20B9 ${Number(this.y.toFixed(0)).toLocaleString("en-In")}</strong> <br> Year <strong> ${this.x} </strong>`
            }
        },

        legend: {
            enabled: false,
        },

        series: [
            {
                data: null,
            }
        ],

        credits: {
            enabled: false
        },

        responsive: {
            rules: [{
                condition: {
                    minWidth: 615
                },
                chartOptions: {
                    tooltip: {
                        backgroundColor: '#FFFFFF',
                        borderColor: '#FFFFFF',
                        borderRadius: 20,
                        style: {
                            display: 'flex',
                            color: '#000000',
                            fontSize: '14px',
                            zIndex: '90',
                            position: 'absolute',
                        },
                        formatter() {
                            return `${this.series.name} <strong>\u20B9 ${Number(this.y.toFixed(0)).toLocaleString("en-In")}</strong> <br> Year <strong> ${this.x} </strong>`
                        }
                    },
                    xAxis: {

                        allowDecimals: false,
                        //tickInterval: 2,

                        tickLength: 0,

                        gridLineWidth: 1,

                        // endOnTick: true,
                        // startOnTick: true,

                        labels: {
                            style: {
                                color: "#000000",
                                fontFamily: 'poppins',
                                fontSize: '14px',
                                fontWeight: '400',
                                opacity: 0.4,
                            },
                        },

                    },
                }
            }]
        },
    });

    useEffect(() => {
        setOptions(previousState => {
            return ({
                ...previousState, series: points,
            })
        })
    }, [points]);

    return (

        <HighchartsReact highcharts={Highcharts} options={options} />

    )
}