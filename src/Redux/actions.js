import { ADD_COMMENT, DELETE_POST, EDIT_LOGGIN ,EDIT_LOGUSER, EDIT_POST, LIKE_TOGGLE} from "./actions-types"


export const editLoggin = newPost => {
    return{
        type : EDIT_LOGGIN,
        payload : newPost
    }
}

export const editLogUserID = newPost=>{
    return{
        type : EDIT_LOGUSER,
        payload : newPost
    }
}

export const deletePost = newPost => {
    return {
        type : DELETE_POST,
        payload : newPost
    }
}

export const editPost = newPost =>{
    return{
        type : EDIT_POST,
        payload : newPost
    }
}

export const likeToggle = newPost =>{
    return{
        type : LIKE_TOGGLE,
        payload : newPost
    }
}

export const addComment = newPost =>{
    return{
        type : ADD_COMMENT,
        payload : newPost
    }
}