/* eslint-disable @typescript-eslint/restrict-plus-operands */

import React, { useMemo } from 'react'
import ReactApexChart from 'react-apexcharts'
import { useSelector } from 'react-redux'
import { selectAntelope } from '~/stores/selector'
import { type ApexOptions } from 'apexcharts'
import { startCase } from 'lodash'

const Scatter = () => {
  const antelopes = useSelector(selectAntelope)

  const series = useMemo(() => antelopes.map((a) => ({
    name: startCase(a.name),
    data: [[a.weight, a.height]]
  })), [antelopes])

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
    },
    tooltip: {
      custom: ({ seriesIndex, w }) => {
        const serie = w.globals.initialSeries[seriesIndex]

        // FIXME It seems that it's not possible to use tailwind here
        return '<div style="margin:0.5rem">' +
                    serie.name +
                    '<ul style="margin-top:0.5rem">' +
                        '<li><b>Weigth</b>: ' + serie.data[0][0] + '</li>' +
                        '<li><b>Heigth</b>: ' + serie.data[0][1] + '</li>' +
                    '</ul>' +
                '</div>'
      }
    }
  }

  return <div id="chart">
        <ReactApexChart options={options} series={series} type="scatter" height={400} width={600}/>
    </div>
}

export default Scatter
