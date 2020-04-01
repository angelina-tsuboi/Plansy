const initState = {
    projects: [
        {id: '1', title: "Going to the moon", content: "Grab your space suit"},
        {id: '2', title: "Traveling to the dunes", content: "Discovering secret creatures"},
        {id: '3', title: "Goin Underground", content: "Dont forget to wear your hazmat suit"}
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
    }
    return state
}

export default projectReducer;