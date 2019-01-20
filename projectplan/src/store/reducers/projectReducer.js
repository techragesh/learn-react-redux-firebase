const initState = {};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT_SUCCESS':
      console.log('Create Project->', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('Create Project err->', action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
