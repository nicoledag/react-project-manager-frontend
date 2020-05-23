export default (state = { comments: []}, action) => {
    switch(action.type){
        case "FETCH_COMMENTS":
            return {...state, comments: action.comments}
        default:
            return state
    }
}