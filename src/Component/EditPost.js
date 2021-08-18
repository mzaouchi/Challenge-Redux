import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editPost } from "../Redux/actions";
import EditIcon from '@material-ui/icons/Edit';
import { IconButton } from "@material-ui/core";

function EditPost({el}){

    const [titleP, setTitleP] = useState(el.title);
    const [bodyP, setBodyP] = useState(el.bodyP);

    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false);}
    const handleShow = () => setShow(true);

    const handleEdit=()=>{

        dispatch(editPost({id : el.id,titleP : titleP,bodyP : bodyP}));
        handleClose();

    }

    const dispatch = useDispatch();
    const [showC, setShowC] = useState(false);

    
    return(
        <div>

            <IconButton  onClick={()=>setShowC(!showC),handleShow} >
                <EditIcon style={{ fontSize: 30,color:'#356594' }}/>
            </IconButton>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                     <Modal.Title>Edit Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                    <Form>
                    
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" style={{ borderRadius:'15px'}} value={titleP} placeholder="Enter title"  onChange={(e)=>setTitleP(e.target.value)} />
                                
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" style={{ borderRadius:'15px'}} value={bodyP} placeholder="Enter description" onChange={(e)=>setBodyP(e.target.value)} />
                        </Form.Group>

                       
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    
                    <Button onClick={()=>handleEdit()} style={{backgroundColor : '#356594'}} type="submit">
                    Save Changes
            </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default EditPost;