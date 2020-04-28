import { createStore } from "redux"; //maybe require?


// initial state
const initialState = {
  // because this is a nested object,
  //  there may be issues with shallow copying
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

// reducer // make 2 reducers?
const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'somethinghere':
    return {...state, somethingelsehere};
    default:
      return state;
  }
};

// create the store
const store = createStore(reducer);

// make the store listen to actions
store.subscribe(() => {
  // make updates
  render();
});


const render = () => {

};

//call render once
render();

//action creator
const sdfkljskf = (someargument) => {
  return {type: "ADSFS", payload: someargument};
};

module.exports = store;