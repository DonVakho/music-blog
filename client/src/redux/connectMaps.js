import {
    LOG_IN_ACTION,
    LOG_OUT_ACTION,
    APPEND_POSTS_ACTION,
    APPEND_USER_POSTS_ACTION,
    LOAD_POSTS_ACTION,
    LOAD_USER_POSTS_ACTION,
    PREPARE_FOR_LOAD_ACTION,
    SEARCH_ACTION,
    CLEAR_ACTION,
    DELETE_POST_ACTION
} from './actions'

export const mapStateToProps = (state) => {
    return {
        user: state.user,
        posts: state.posts
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        LOG_OUT_ACTION: () => {
            dispatch(LOG_OUT_ACTION())
        },
        LOG_IN_ACTION: (name) => {
            dispatch(LOG_IN_ACTION(name))
        },
        LOAD_POSTS_ACTION: (posts) => {
            dispatch(LOAD_POSTS_ACTION(posts))
        },
        LOAD_USER_POSTS_ACTION: (posts) => {
            dispatch(LOAD_USER_POSTS_ACTION(posts))
        },
        APPEND_POSTS_ACTION: (posts) => {
            dispatch(APPEND_POSTS_ACTION(posts))
        },
        APPEND_USER_POSTS_ACTION: (posts) => {
            dispatch(APPEND_USER_POSTS_ACTION(posts))
        },
        PREPARE_FOR_LOAD_ACTION: () => {
            dispatch(PREPARE_FOR_LOAD_ACTION())
        },
        SEARCH_ACTION: (filter) => {
            dispatch(SEARCH_ACTION(filter))
        },
        CLEAR_ACTION: () => {
            dispatch(CLEAR_ACTION())
        },
        DELETE_POST_ACTION: (remainingPosts) => {
            dispatch(DELETE_POST_ACTION(remainingPosts))
        }
        
    }
}