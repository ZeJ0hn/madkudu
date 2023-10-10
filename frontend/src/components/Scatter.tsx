import React, {useMemo} from 'react'
import ReactApexChart from "react-apexcharts";
import {useSelector} from "react-redux";
import {selectAntelope} from "~/stores/selector";
import {ApexOptions} from "apexcharts";
import {startCase} from "lodash";

const Scatter = () => {

    const antelopes = useSelector(selectAntelope)

    const series = useMemo(() => antelopes.map((a) => ({
        name: startCase(a.name),
        data: [[a.weight, a.height]]
    })), [antelopes]);


    const options: ApexOptions = {
        chart: {
            width: 600,
            height: 400,
            type: 'scatter',
            zoom: {
                enabled: true,
                type: 'xy'
            }
        },
        xaxis: {
            tickAmount: 10,
            labels: {
                formatter: (val) => {
                    return parseFloat(val).toFixed(1)
                }
            },
            title: {
                text: 'Weight'
            }
        },
        yaxis: {
            tickAmount: 7,
            title: {
                text: 'Height'
            }
        },
        legend: {
            show: false
        }
    }

    return <div id="chart">
        <ReactApexChart options={options} series={series} type="scatter" height={400} width={600}/>
    </div>
}

export default Scatter
