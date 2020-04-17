export default (state = { clients: []}, action) => {
    switch(action.type){
        case "FETCH_CLIENTS":
            return {...state, clients: action.clients}
        default:
            return state
    }
}