import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import {type Antelope} from '~/types'

export enum FetchStatus {
    DEFAULT,
    LOADING,
    SUCCESS,
    FAILURE
}

export interface State {
    species: Antelope[]
    speciesStatus: FetchStatus
}

const initialState: State = {
    species: [],
    speciesStatus: FetchStatus.DEFAULT
}

export const slice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        fetchAntelopeStart: (state) => {
            state.speciesStatus = FetchStatus.LOADING
        },
        fetchAntelopeSuccess: (state, action: PayloadAction<Antelope[]>) => {
            state.species = action.payload
            state.speciesStatus = FetchStatus.SUCCESS
        },
        fetchAntelopeFailure: (state, action: PayloadAction<string>) => {
            state.speciesStatus = FetchStatus.FAILURE
        }
    }
})

export const {
    fetchAntelopeFailure,
    fetchAntelopeStart,
    fetchAntelopeSuccess
} = slice.actions

export default slice.reducer
