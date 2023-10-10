import React, {useMemo} from 'react'
import {useSelector} from "react-redux";
import {selectAntelope} from "~/stores/selector";

const Table = () => {

    const antelopes = useSelector(selectAntelope)

    // const headers =

    const data = useMemo(() => antelopes.map((a) => {
        const clazz = "border-b border-slate-100 p-4 pl-8 text-slate-500 capitalize";
        return <tr>
            <td className={clazz}>{a.name}</td>
            <td className={clazz}>{a.continent}</td>
            <td className={clazz}>{a.height}</td>
            <td className={clazz}>{a.weight}</td>
            <td className={clazz}>{a.horns}</td>
        </tr>
    }), [antelopes])

    const hClazz = "border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left";

    return <div className="rounded-xl max-h-96 overflow-y-auto block mt-4">
        <table className="mx-8 table-auto">
            <thead className="bg-white border-b sticky top-0">
            <tr>
                <th className={hClazz}>Name</th>
                <th className={hClazz}>Continent</th>
                <th className={hClazz}>Height</th>
                <th className={hClazz}>Weight</th>
                <th className={hClazz}>Horns</th>
            </tr>
            </thead>
            <tbody className="overflow-y-auto">
            {data}
            </tbody>
        </table>
    </div>
}

export default Table
