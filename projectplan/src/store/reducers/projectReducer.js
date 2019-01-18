const initState = {
  projects: [
    {
      id: '1',
      title: 'car management',
      content: 'This is a car management project'
    },
    {
      id: '1',
      title: 'hr management',
      content: 'This is a hr management project'
    },
    {
      id: '1',
      title: 'cloud management',
      content: 'This is a cloud management project'
    }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
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
