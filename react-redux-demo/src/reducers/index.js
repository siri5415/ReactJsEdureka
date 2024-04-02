
// to combine all the reducers
import { combineReducers} from 'redux';
import food from './food_item';

const rootreducer = combineReducers(
    {
        food
    }
)

export default rootreducer;