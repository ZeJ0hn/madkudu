import React, {useMemo, useState} from 'react'
import {useSelector} from "react-redux";
import {selectAntelope} from "~/stores/selector";
import {Antelope} from "~/types";


type OnlyKeys = keyof Antelope;


const Table = () => {

    const [sortBy, setSortBy] = useState<OnlyKeys>('name')
    const [reverse, setReverse] = useState(false)
    const antelopes = useSelector(selectAntelope)

    const setFilter = (key: OnlyKeys) => {
        if (key == sortBy) {
            // If it's the same key, we just want to change the asc/desc order
            setReverse(!reverse)
        } else {
            // If the key change, reset the reverse state
            setSortBy(key)
            setReverse(false)
        }
    }

    const data = useMemo(() => antelopes
        .slice()
        .sort((a, b) => {
            const result = (a[sortBy].toString().localeCompare(b[sortBy].toString()))
            return reverse ? -result : result
        })
        .map((a) => {
            const clazz = "border-b border-slate-100 p-4 pl-8 text-slate-500 capitalize";
            return <tr className="h-32" key={a.name}>
                <td className={clazz}>{a.name}</td>
                <td className={clazz}>{a.continent}</td>
                <td className={clazz}>{a.height}</td>
                <td className={clazz}>{a.weight}</td>
                <td className={clazz}>{a.horns}</td>
                <td className="border-b border-slate-100 flex justify-center">
                    <img src={a.picture} alt={a.name} className="rounded-lg max-h-32"/>
                </td>
            </tr>
        }), [antelopes, sortBy, reverse])

    const hClazz = "border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left";

    return <div className="rounded-xl max-h-144 overflow-y-auto block mt-4">
        <table className="mx-8 table-auto">
            <thead className="bg-white border-b sticky top-0">
            <tr>
                <th className={hClazz}>
                    <div className="cursor-pointer"
                         onClick={() => setFilter('name')}>
                        Name
                    </div>
                </th>
                <th className={hClazz}>
                    <div className="cursor-pointer"
                         onClick={() => setFilter('continent')}>
                        Continent
                    </div>
                </th>
                <th className={hClazz}>
                    <div className="cursor-pointer"
                         onClick={() => setFilter('height')}>
                        Height
                    </div>
                </th>
                <th className={hClazz}>
                    <div className="cursor-pointer"
                         onClick={() => setFilter('weight')}>
                        Weight
                    </div>
                </th>
                <th className={hClazz}>
                    <div className="cursor-pointer"
                         onClick={() => setFilter('horns')}>
                        Horns
                    </div>
                </th>
                <th className={hClazz}>Image</th>
            </tr>
            </thead>
            <tbody className="overflow-y-auto">
            {data}
            </tbody>
        </table>
    </div>
}

export default Table
