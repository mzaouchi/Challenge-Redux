import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { editLoggin, editLogUserID } from "./Redux/actions";

function Login(){

    const [userNameL, setUserNameL] = useState('');
    const [passwordL, setPasswordL] = useState('');
    const usersL = useSelector(state => state.users);
    const dispatch = useDispatch();
    
    
    const handleVerif=()=>{

       const objF = usersL.find(el => el.userName === userNameL);
       objF.password === passwordL && dispatch(editLoggin(true));
       dispatch(editLogUserID(objF.id))

               
    }

    return(
        
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}} >
            <img src='/MahmoudBook.png' alt='' style={{width:'25%'}}></img>
            
            <br/>
            <Form style={{width : '40%'}}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label><img src='/login.png' style={{width : '10%'}}/></Form.Label>
                <Form.Control type="text" onChange={(e)=>setUserNameL(e.target.value)} placeholder="Enter your user name" />
               
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label><img src='/key.png' style={{width : '10%'}}/></Form.Label>
                <Form.Control type="password" onChange={(e)=>setPasswordL(e.target.value)} placeholder="Enter your password" />
            </Form.Group>
           
            
            <Button onClick={handleVerif} style={{backgroundColor : '#356594', marginLeft : '85%'}} type="submit">
                Submit
            </Button>
            </Form>
        </div>
    )
}

export default Login;