export const initialState={
    user: null
};
export const actionTypes={
    SET_USER:'SET_USER',
    LOG_OUT:'LOG_OUT'
}
const reducer =(state,action)=>{
  
    switch(action.type){
        case actionTypes.SET_USER:
            return{
                ...state,
                LoggedInUser: action.user
            }
            case actionTypes.LOG_OUT:
                return{
                    ...state,
                    LoggedInUser: null
                }
            default:
                return state
    }
}
export default reducer