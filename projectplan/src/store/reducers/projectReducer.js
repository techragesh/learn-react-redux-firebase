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
  return state;
};

export default projectReducer;
