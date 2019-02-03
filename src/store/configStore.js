import {
    createStore,
    applyMiddleware,
    combineReducers,
    compose
} from 'redux';
import thunk from 'redux-thunk';
import configReduce from './configReduce';
let reduce=combineReducers({
    ...configReduce
});
let middleWare=applyMiddleware(thunk);
console.log(process.env.NODE_ENV)
function configStore()
{
    if(process.env.NODE_ENV==='producion')
    {
        return createStore(reduce,middleWare)
    }
    else{
        return createStore(reduce,compose(
            middleWare,
            window.devToolsExtension?
            window.devToolsExtension():f=>f
        ))
    }

}
export default configStore;