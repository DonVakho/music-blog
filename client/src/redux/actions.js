export function LOG_IN_ACTION(name){
    return{
        type: 'LOG_IN',
        payload: name
    }
}

export function LOG_OUT_ACTION(){
    return{
        type: 'LOG_OUT',
        payload: 'Guest'
    }
}

export function LOAD_POSTS_ACTION(posts){
    return{
        type: 'LOAD_POSTS',
        payload: posts
    }
}
export function LOAD_USER_POSTS_ACTION(posts){
    return{
        type: 'LOAD_USER_POSTS',
        payload: posts
    }
}

export function APPEND_POSTS_ACTION(posts){
    return{
        type: 'APPEND_POSTS',
        payload: posts
    }
} 
export function APPEND_USER_POSTS_ACTION(posts){
    return{
        type: 'APPEND_USER_POSTS',
        payload: posts
    }
} 
export function PREPARE_FOR_LOAD_ACTION(){
    return{
        type: 'PREPARE_FOR_LOAD',
        payload: null
    }
}

export function SEARCH_ACTION(filter){
    return{
        type: 'SEARCH',
        payload: filter
    }
}

export function CLEAR_ACTION(){
    return{
        type: 'CLEAR',
        payload: null
    }
}

export function DELETE_POST_ACTION(remainingPosts){
    return{
        type: 'DELETE_POST',
        payload: remainingPosts
    }
}