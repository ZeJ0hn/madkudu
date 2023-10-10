import React, {useEffect} from 'react'
import Header from './components/Header'
import Footer from '~/components/Footer'
import {useDispatch} from 'react-redux'
import {FETCH_ANTELOPE} from '~/stores/actions'
import Table from "~/components/Table";
import TreeMap from "~/components/TreeMap";
import Scatter from "~/components/Scatter";
import TitledComponent from "~/components/TitledComponent";


const Root = () => {
    return <div className="w-full min-h-screen flex flex-col">
        <Header/>
        <div className="w-full flex grow">
            <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
                <TitledComponent className="mt-8 w-full" title="List of all Antelopes">
                    <Table/>
                </TitledComponent>
                <TitledComponent className="mt-16 w-full" title="Weigth / Heigth plot">
                    <Scatter/>
                </TitledComponent>
                <TitledComponent className="mt-16 w-full" title="Horns Per Continent">
                    <TreeMap/>
                </TitledComponent>
            </div>
        </div>
        <Footer/>
    </div>
}

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: FETCH_ANTELOPE})
    }, [dispatch])

    return (
        <>
            <Root/>
        </>
    )
}

export default App
