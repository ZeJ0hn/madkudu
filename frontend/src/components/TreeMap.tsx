import React from 'react'
import ReactApexChart from "react-apexcharts";
import {useSelector} from "react-redux";
import {selectAntelope} from "~/stores/selector";
import {ApexOptions} from "apexcharts";

const TreeMap = () => {

    const antelopes = useSelector(selectAntelope)

    const hornsPerContinent: Record<string, Record<string, number>> = {}
    for (const antelope of antelopes) {
        if (!(antelope.continent in hornsPerContinent)) hornsPerContinent[antelope.continent] = {}
        hornsPerContinent[antelope.continent][antelope.horns] = (hornsPerContinent[antelope.continent][antelope.horns] | 0) + 1
    }

    const series = Object.entries(hornsPerContinent).map((e) => {
        return {
            name: e[0],
            data: Object.entries(e[1]).map(pts => {
                return {
                    x: pts[0],
                    y: pts[1]
                }
            })
        }
    })

    const options: ApexOptions = {
        legend: {
            show: true
        },
        chart: {
            height: 400,
            width: 600,
            type: 'treemap'
        },
        title: {
            text: 'Horn type per Continent',
            align: 'center'
        }
    }


    return <div id="chart">
        <ReactApexChart options={options} series={series} type="treemap" height={400} width={600}/>
    </div>
}

export default TreeMap
