import { ADD_COMMENT, DELETE_POST, EDIT_LOGGIN, EDIT_LOGUSER, EDIT_POST, LIKE_TOGGLE} from "./actions-types";

const initialState = {
    users : [
                {id : 0, userName : 'Mahmoud Zaouchi',photo : '/Mahmoud.jpg',old : 27, adress : 'Mhamdia', password : '12345',gender : 'homme'},
                {id : 1, userName : 'Iléne Slimene',photo : '/Ilene.jpg',old : 26, adress : 'Boumhal', password : '12345',gender : 'femme'},
                {id : 2, userName : 'Achref Kamoun',photo : '/Achref.jpg',old : 26, adress : 'Mourouj', password : '12345',gender : 'homme'},
            ],

    posts : [
                {id : 0,title : 'First Post 5', bodyP :'La vie est belle', userID : 0,dateShare : "2021-06-09T22:34", like : true, comment :[{bodyC : "1 Commentaire",dateC : "2021-06-09T22:34",userC : 1,idC : 0}, {bodyC : "2 Commentaire",dateC : "2019-06-09T22:34",userC : 0,idC : 1}]}, 
                {id : 1,title : 'First Post 6', bodyP :'La vie est belle',userID : 1,dateShare : "2022-06-09T22:34",like : false,comment :[{bodyC : "1 Commentaire",dateC : "2021-06-09T22:34",userC : 1,idC : 0}, {bodyC : "2 Commentaire",dateC : "2021-06-09T22:34",userC : 0,idC : 1}]},
                {id : 2,title : 'First Post 1', bodyP :'La vie est belle', userID : 2,dateShare : "2016-06-09T22:34",like : false,comment :[{bodyC : "1 Commentaire",dateC : "2021-06-09T22:34",userC : 1,idC : 0}, {bodyC : "2 Commentaire",dateC : "2021-06-09T22:34",userC : 0,idC : 1}]},
                {id : 3,title : 'First Post 2', bodyP :'La vie est belle', userID : 2,dateShare : "2017-06-09T22:34",like : false,comment :[{bodyC : "1 Commentaire",dateC : "2021-06-09T22:34",userC : 1,idC : 0}, {bodyC : "2 Commentaire",dateC : "2021-06-09T22:34",userC : 0,idC : 1}]},
                {id : 4,title : 'First Post 4', bodyP :'La vie est belle', userID : 1,dateShare : "2019-06-09T22:34",like : true,comment :[{bodyC : "1 Commentaire",dateC : "2021-06-09T22:34",userC : 1,idC : 0}, {bodyC : "2 Commentaire",dateC : "2021-06-09T22:34",userC : 0,idC : 1}]},
                {id : 5,title : 'First Post 3', bodyP :'La vie est belle', userID : 0,dateShare : "2018-06-09T22:34",like : true,comment :[{bodyC : "1 Commentaire",dateC : "2021-06-09T22:34",userC : 1,idC : 0}, {bodyC : "2 Commentaire",dateC : "2021-06-09T22:34",userC : 0,idC : 1}]},
            
            ],

    loggin : false,

    logUserID : '', 
    
}


function rootReducer(state = initialState, action){
    
    switch(action.type){
        case EDIT_LOGGIN : 

            return   {...state, loggin : action.payload}

        case DELETE_POST: 
            
            return   {...state, posts : state.posts.filter(el => el.id !== action.payload.id) }

         case EDIT_LOGUSER : 
            
            return   {...state,logUserID : action.payload}

        case EDIT_POST : 
            return   {...state,posts : state.posts.map(el => el.id == action.payload.id ? {...el, title : action.payload.titleP ,bodyP : action.payload.bodyP } : el) }
        
        case LIKE_TOGGLE : 

            return {...state, posts : state.posts.map(el=> el.id == action.payload.id ? {...el,like : !el.like} : el)}

        case ADD_COMMENT : 

            return {...state, posts : state.posts.map(el=>el.id == action.payload.id ? {...el,comment : [...el.comment,{bodyC : action.payload.body,dateC : "2021-06-09T22:34",userC : action.payload.userID,idC : Math.random() } ]} : el)}
        default : 
            return state
    }
        
   
}

export default rootReducer;