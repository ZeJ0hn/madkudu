import React, {useEffect} from 'react'
import Header from './components/Header'
import Footer from '~/components/Footer'
import {useDispatch, useSelector} from 'react-redux'
import {FETCH_ANTELOPE} from '~/stores/actions'
import Table from "~/components/Table";
import TreeMap from "~/components/TreeMap";
import Scatter from "~/components/Scatter";
import TitledComponent from "~/components/TitledComponent";
import {selectLoading} from "~/stores/selector";
import {FetchStatus} from "~/stores/reducer";


const Root = () => {
    const status = useSelector(selectLoading)

    return <div className="w-full min-h-screen flex flex-col">
        <Header/>
        <div className="w-full flex grow">
            <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
                {
                    (status == FetchStatus.DEFAULT || status == FetchStatus.LOADING) &&
                    <div className="mt-16 text-2xl">Loading</div>
                }
                {
                    status == FetchStatus.SUCCESS &&
                    <>
                        <TitledComponent className="mt-8 w-full" title="List of all Antelopes">
                            <Table/>
                        </TitledComponent>
                        <TitledComponent className="mt-16 w-full" title="Who is the strongest?">
                            <Scatter/>
                        </TitledComponent>
                        <TitledComponent className="mt-16 w-full" title="Where are the horns?">
                            <TreeMap/>
                        </TitledComponent>
                    </>
                }
                {
                    status == FetchStatus.FAILURE &&
                    <>
                        <div className="mt-16 text-2xl">Oups! It seems we have an issue!</div>
                        <div className="mt-4 text-md">Please take a coffee and try later.</div>
                    </>
                }
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
