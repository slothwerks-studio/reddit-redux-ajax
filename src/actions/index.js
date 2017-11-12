import $ from 'jquery-ajax';

// trigger the process, make the request, and call the other two actions
export function fetchReddit() {
    // when using async actions and thunk, instead of returning the action object,
    // we return a callback function. This has a `dispatch` parameter that we
    // can use to dispatch other actions whenever we want.
    return function(dispatch) {
        dispatch(requestReddit());
        $.get("https://www.reddit.com/r/aww.json", function(data) {
            // Here is where we dig into the response JSON to find the data we actually need.
            const redditFeed = data.data.children;
            dispatch(receiveReddit(redditFeed));
        });
    };
}

// Allow the reducer to update the state when the request starts loading.
function requestReddit() {
    return {
        type: "REQUEST_REDDIT"
    };
}

// Allow the reducer to update the state when the request finishes and brings back data.
function receiveReddit(redditFeed) {
    return {
        type: "RECEIVE_REDDIT",
        redditFeed
    };
}

// Post list style toggle
export function postListToggle() {
    return {
        type: "POST_LIST_TOGGLE"
    };
}