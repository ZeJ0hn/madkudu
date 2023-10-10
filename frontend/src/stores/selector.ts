import {type RootState} from '~/stores/store'
import {type Antelope} from '~/types'

export const selectAntelope = (state: RootState): Antelope[] => (
    state.species
)
