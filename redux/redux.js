import { createStore } from "redux"; //maybe require?


//initial state
const initialState = {
    projects: {
        id: "",
        name: "",
        url: "",
        buildCommand: "",
        language: "",
    },
    builds: {
        buildNumber: 0000, // A continuous number incrementing for each build in a project
        status: "", // One of "Pending" | "Running" | "Success" | "Failed"
        output: "",
    }
};

//reducer
const reducer = (state = initialState, action) => {
    switch(){
        case 'somethinghere':
        return {...state, somethingelsehere};
        default:
            return state;
    }
};

//store
const store = createStore(reducer);
const render = 