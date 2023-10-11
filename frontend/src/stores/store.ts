import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import reducer from '~/stores/reducer'
import saga from '~/stores/saga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    [...getDefaultMiddleware({ thunk: false }), sagaMiddleware, logger]
})

sagaMiddleware.run(saga)

export type RootState = ReturnType<typeof store.getState>

export default store
