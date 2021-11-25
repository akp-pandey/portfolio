import React from "react";
import { Card, Container, Image ,Col ,Row} from "react-bootstrap";
import imageFile from './akp.jpg';
import Typical from 'react-typical';
import './Header.css'

const Introduction=()=>{
    return(<>
    <Container style={{minHeight:"500px",backgroundColor:"red"}}>
        <br/>
        <Card style={{width:"100%",paddingTop:"10px"}}>
            <Row>
                <Col>
                <center><img src={imageFile} style={{width:"200px",height:"200px",borderRadius:"100px",margin:"20px"}}alt="this is car image" /></center>
                <center><label style={{fontFamily:"fantasy",alignSelf:"center"}}>I am a 
                <Typical
        steps={['Java Developer', 1000, 'Android Developer',1000 , 'React JS Developer',1000]}
        loop={Infinity}
        wrapper="p"
      />
 </label></center>
 </Col>
              
                </Row>
      
       
        </Card>
    </Container>
    </>)
};

export default Introduction;