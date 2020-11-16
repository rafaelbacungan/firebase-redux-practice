const initState = {
    projects: [
        {id: '1', title: 'some title', content: 'some content'},
        {id: '2', title: 'some title 2', content: 'some content'},
        {id: '3', title: 'some title 3', content: 'some content'},
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
            //break;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            //console.log('nothing happened here');
            return state;
    }
    //return state
};

export default projectReducer;