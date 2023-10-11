import { type RootState } from '~/stores/store'
import { type Antelope } from '~/types'
import { type FetchStatus } from '~/stores/reducer'

export const selectAntelope = (state: RootState): Antelope[] => (
  state.species
)

export const selectLoading = (state: RootState): FetchStatus => (
  state.fetchStatus
)
