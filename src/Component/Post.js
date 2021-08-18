import { useState } from "react";
import { Button, Image, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addComment, deletePost, likeToggle } from "../Redux/actions";
import CommentIcon from '@material-ui/icons/Comment';
import EditPost from "./EditPost";
import Heart from "react-animated-heart";
import { IconButton } from "@material-ui/core";

import React from 'react';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import DeleteIcon from '@material-ui/icons/Delete';

function Post({el}){
    const dispatch = useDispatch();
    const userID = useSelector(state => state.logUserID);
    const users = useSelector(state => state.users);
    const [commentK, setCommentK]=useState('');
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    const handleDelete=(el)=>{
        dispatch(deletePost(el));
        handleClose();
    }

    const [showC, setShowC] = useState(false);


    return(
                 
                    <ListGroup.Item>

                           
                            <div style={{display : 'flex', alignItems : 'center',justifyContent:'space-around'}}>
                                <div style={{display : 'flex', alignItems : 'center'}}>
                                <Image src={users.find(user => user.id ==el.userID).photo} roundedCircle style={{width:'6%'}}/>
                                
                                <div style={{marginLeft:'1%'}}>
                                    <h5>{users.find(user => user.id ==el.userID).userName}</h5>
                                    <p>{el.dateShare }</p>
                                </div>  
                                </div>

                                
                                {userID == el.userID && 
                                <div>
                                    <button style={{background:'none', border:'none',fontSize:'40px'}} onClick={handleClick}>
                                        ...
                                    </button>
                                    <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={handleClose}><EditPost el={el}/></MenuItem>
                                        <MenuItem onClick={()=>handleDelete(el)}>
                                        <IconButton  onClick={()=>setShowC(!showC)} >
                                            <DeleteIcon style={{ fontSize: 30,color:'#356594' }}/>
                                        </IconButton>
                                        </MenuItem>
                                        
                                    </Menu>
                                </div> }                          
                            </div>
                            
                                            
                            
                            <div style={{ display : 'flex',flexDirection:'column',margin:'20px 60px', padding:'10px 10px',borderStyle:'solid',borderRadius:'15px',borderColor:'#356594'}}>
                            <h4>{el.title}</h4>                    
                            <p>{el.bodyP}</p>
                            </div>

                                                                             
                        
                            <div style={{display : 'flex', alignItems : 'center',marginLeft:'4%',marginTop:'-2%'}}>
                                <IconButton  onClick={()=>setShowC(!showC)} >
                                    <CommentIcon style={{ fontSize: 40,color:'#356594' }}/>
                                </IconButton>
                                
                                <Heart isClick={el.like} onClick={() => dispatch(likeToggle({id : el.id}))} />
                            </div>
                            
                            {showC && el.comment.map(el=>
                                <div style={{ width:'80%', marginLeft : '5%',backgroundColor:'#e4f2ff', margin:'15px 72px',padding:'5px 5px 5px 5px',borderStyle:'none',borderRadius:'15px'}}>
                                   <div style={{display:'flex', alignItems:'center'}}>
                                         <Image src={users.find(user => user.id ==el.userC).photo} roundedCircle  style={{width:'4%'}}/> 
                                         <h5 style={{marginLeft : "1%"}}>{ users.find(user => user.id ==el.userC).userName  }</h5>
                                   </div>
                                    
                                    <p style={{marginLeft:'7%', marginTop:'1%'}}>{el.bodyC} </p>
                                    <p style={{marginLeft:'85%'}}>{el.dateC}</p>

                                </div>)}
                             <div style={{display : 'flex',alignItems:'center',marginTop:'-1%'}}>
                                <input type="text" style={{ borderRadius:'15px',marginLeft:'5%',outline :'none'}} onChange={(e)=>setCommentK(e.target.value)}/>
                                <Button onClick={()=>dispatch(addComment({id : el.id, body : commentK,userID : userID}),setShowC(!showC))} style={{backgroundColor : '#356594', marginLeft : '1%',borderRadius:'15px'}} type="submit">
                                Comment
                                </Button>                                
                            </div>   
                            
                    </ListGroup.Item>
                   
    )
}

export default Post;