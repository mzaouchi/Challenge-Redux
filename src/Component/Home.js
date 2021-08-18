import { useSelector } from "react-redux";
import { Container, ListGroup } from "react-bootstrap";
import Post from "./Post";
import User from "./User";


function Home(){
   
    const posts = useSelector(state => state.posts);       
  
    return(
        <div>
            <Container>

                <User/>    

                <br/>
                
                <ListGroup>
                {
                    posts.sort(function(a,b){ var c = new Date(a.dateShare); var d = new Date(b.dateShare); return d-c;}).map(el=> 

                        <Post el = {el}/>) 
                }
                </ListGroup>

            </Container>           
            

        </div>
    )
}

export default Home;