const INITIAL_STATE = {
	redditFeed: [],
	isLoading: true,
    postStyleToggle: "vertical"
}; 
  
export default function (state = INITIAL_STATE, action) { 
    switch (action.type) { 
        case "REQUEST_REDDIT":
            return Object.assign({}, state, {
                redditFeed: [],
                isLoading: true
            });
        case "RECEIVE_REDDIT":
            return Object.assign({}, state, {
                redditFeed: action.redditFeed,
                isLoading: false
            });
        case "POST_LIST_TOGGLE":
            return postListToggle(state);
        default:
            return state;
    } 
}

function postListToggle(state) {
    if (state.postStyleToggle === "vertical") {
        state.postStyleToggle = "grid";
    } else if (state.postStyleToggle === "grid") {
        state.postStyleToggle = "vertical";
    }
    return Object.assign({}, state, {
        postStyleToggle: state.postStyleToggle
    });
}
