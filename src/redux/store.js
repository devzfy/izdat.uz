import { createStore } from "redux";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore} from "redux-persist";
import {reducer} from './reducer'

const persistConfig = {
    key: 'izdat.uz',
    storage
}

const persistReducers = persistReducer(persistConfig, reducer)

export const store = createStore( 
    persistReducers, {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export const persist = persistStore(store)