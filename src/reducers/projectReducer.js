export default (state = { projects: []}, action) => {
    switch(action.type){
        case "FETCH_PROJECTS":
            return {...state, projects: action.projects}
        default:
            return state
    }
}