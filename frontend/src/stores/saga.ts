import {call, put, takeLatest} from 'redux-saga/effects'
import {FETCH_ANTELOPE} from '~/stores/actions'
import {fetchAntelopeFailure, fetchAntelopeStart, fetchAntelopeSuccess} from './reducer'
import accessor from '~/api/api'
import {type Antelope} from '~/types'

function* fetchAntelope() {
    yield put(fetchAntelopeStart())
    try {
        const assets: Antelope[] = yield call([accessor, 'fetchAntelope'])
        yield put(fetchAntelopeSuccess(assets))
    } catch (e) {
        // TODO We should handle this issue
        yield put(fetchAntelopeFailure((e as Error).message))
    }
}

export default function* appWatcher() {
    yield takeLatest(FETCH_ANTELOPE, fetchAntelope)
};
