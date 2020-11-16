export const createProject = (project) => {
    //the thunk part
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make async call to database
        let err;
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Rafael',
            authorLastname: 'Bacungan',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project: project});
        }).catch(() => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        })
    }
};