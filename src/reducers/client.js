export default (state = { clients: []}, action) => {
    switch(action.type){
        case "FETCH_BUSINESSES":
            return {...state, clients: action.clients}
    }
}