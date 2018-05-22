import {combineReducers,createStore} from 'redux'
import {itemsReducer} from '../Reducers/items-reducer'


export const configureStore = ()=>{
    const store = combineReducers({
        items : itemsReducer
    })

    return createStore(store)
}