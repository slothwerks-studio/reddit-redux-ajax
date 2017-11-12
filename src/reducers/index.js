const INITIAL_STATE = {
	redditFeed: [],
	isLoading: true
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
        default:
            return state;
    } 
} 