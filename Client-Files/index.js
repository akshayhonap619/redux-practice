import {configureStore}from '../Store/store'
import {addItem} from '../Actions/items-action'

const store = configureStore();

store.subscribe(()=>console.log(store.getState()))

console.log(store.getState())

store.dispatch(addItem({name : "Milk", Cost: 100}))