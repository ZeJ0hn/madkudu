/* eslint-disable @typescript-eslint/restrict-plus-operands */

import React, { useCallback } from 'react'
import ReactApexChart from 'react-apexcharts'
import { useSelector } from 'react-redux'
import { selectAntelope } from '~/stores/selector'
import { type ApexOptions } from 'apexcharts'

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

  const getAntelopes = useCallback((continent: string, horns: string) =>
    antelopes.filter((a) => a.continent === continent && a.horns === horns)
  , [antelopes])

  const options: ApexOptions = {
    legend: {
      show: true,
      fontSize: '18px',
      offsetY: 6
    },
    chart: {
      height: 400,
      width: 600,
      type: 'treemap'
    },
    tooltip: {
      custom: ({ seriesIndex, dataPointIndex, w }) => {
        const continent = w.globals.initialSeries[seriesIndex]
        const horns = continent.data[dataPointIndex]
        const toDisplay = getAntelopes(continent.name, horns.x)

        let html = '<div style="margin:0.5rem">' +
          horns.x + ' horns from ' + continent.name + ':' +
          '<ul style="margin-top:0.5rem">'

        for (const t of toDisplay) {
          html += '<li>- ' + t.name + '</li>'
        }
        html += '</div>'

        // FIXME It seems that it's not possible to use tailwind here
        return html
      }
    }
  }

  return <div id="chart">
        <ReactApexChart options={options} series={series} type="treemap" height={400} width={600}/>
    </div>
}

export default TreeMap
