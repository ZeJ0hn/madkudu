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
    fetchStatus: FetchStatus
}

const initialState: State = {
    species: [],
    fetchStatus: FetchStatus.DEFAULT
}

export const slice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        fetchAntelopeStart: (state) => {
            state.fetchStatus = FetchStatus.LOADING
        },
        fetchAntelopeSuccess: (state, action: PayloadAction<Antelope[]>) => {
            state.species = action.payload
            state.fetchStatus = FetchStatus.SUCCESS
        },
        fetchAntelopeFailure: (state, action: PayloadAction<string>) => {
            state.fetchStatus = FetchStatus.FAILURE
        }
    }
})

export const {
    fetchAntelopeFailure,
    fetchAntelopeStart,
    fetchAntelopeSuccess
} = slice.actions

export default slice.reducer
