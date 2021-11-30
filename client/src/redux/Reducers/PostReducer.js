import {GET_POSTS} from '../actions/PostActions/types';
const initialState={}
const PostReducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_POSTS:
            return {...state,posts:action.payload}
            default :
            return state
    }
}
export default PostReducer;