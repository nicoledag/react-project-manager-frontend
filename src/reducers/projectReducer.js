export default (state = { projects: []}, action) => {
    switch(action.type){
        case "FETCH_PROJECTS":
            return {...state, projects: action.projects}
        case "ADD_PROJECT":
            return {...state, projects: [...state.projects, action.project]}
        case "EDIT_PROJECT":
            let projectTwo = state.projects.map(project => {
                if (project.id === action.project.id) {
                    return action.project
                     } else {
                      return project
                    }
            })

            return {...state, projects: projectTwo }

        case 'DELETE_PROJECT':
            const projects = state.projects.filter(project => project.id !== action.projectId);
            return {...state, projects }  
        
        case 'ADD_COMMENT':
            let projectThree = state.projects.map(project => {
                if (project.id === action.project.id) {
                    return action.project
                } else {
                    return project
                }
            })
          
            return {...state, projects: projectThree}
          
        case 'DELETE_COMMENT':
            let projectFour = state.projects.map(project => {
                if (project.id === action.project.id) {
                    return action.project
                } else {
                    return project
                }
            })
          
            return {...state, projects: projectFour}
          

            default: 
            return state
    }
}