import { Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Icon, IconButton } from "@material-ui/core";
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { editLoggin } from "../Redux/actions";


function User({el}){
    const userID = useSelector(state => state.logUserID);
    const users = useSelector(state => state.users);
    const currentUser = users.find(el => el.id == userID)
    const dispatch = useDispatch();
    
    return(
    
            

            <div style={{display : 'flex', alignItems : 'center', justifyContent:'space-around', backgroundColor:'#e4f2ff', padding:'10px 10px',borderStyle:'none',borderRadius:'15px'}}>

                <div style={{display : 'flex', alignItems : 'center'}}>

                    <Image src={currentUser.photo} rounded  style={{width:'8%'}}/>  

                    <div style={{marginLeft:'1%'}}>
                        <h4>Ahla b {currentUser.gender == 'homme'? 'weldi' : 'benti'} <br/><strong>{currentUser.userName}</strong></h4>                                    
                    </div>  

                </div>
                
                <IconButton  onClick={()=>dispatch(editLoggin(false))} >
                    <MeetingRoomIcon style={{ fontSize: 60,color:'#356594' }}/>
                </IconButton>
            </div>
     
      
    )
}

export default User;