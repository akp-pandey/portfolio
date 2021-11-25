import React from "react";
import { Card, Container, Image ,Col ,Row} from "react-bootstrap";
import imageFile from './akp.jpg';
import evinceImage from './evince.jpg'
import wiproImage from './wipro.jpg'
import Typical from 'react-typical';
import './Header.css'


const Experience=()=>{
    return(<>
       <Container style={{minHeight:"500px",backgroundColor:"red"}}>
        <br/>
      
            <Row>
                <Col>
                <Card style={{width:"100%",paddingTop:"10px",marginTop:"5px",marginBottom:"5px"}}>
                <center><img src={wiproImage} style={{width:"200px",height:"200px",borderRadius:"100px",margin:"20px"}}alt="this is car image" /></center>
                <center><label style={{fontFamily:"fantasy",alignSelf:"center"}}>Project Engineer</label></center>
                <center><label style={{fontFamily:"fantasy",alignSelf:"center"}}>Duration :- 27/9/2021 - Currently working</label></center>
                <center><label style={{fontFamily:"fantasy",alignSelf:"center"}}>Working as React JS Developer</label></center>
                </Card>
                </Col>
                <Col>
                <Card style={{width:"100%",paddingTop:"10px",marginTop:"5px",marginBottom:"5px"}}>
                <center><img src={evinceImage} style={{width:"200px",height:"200px",borderRadius:"100px",margin:"20px"}}alt="this is car image" /></center>
                <center><label style={{fontFamily:"fantasy",alignSelf:"center"}}>Assosciate Software Developer</label></center>
                <center><label style={{fontFamily:"fantasy",alignSelf:"center"}}>Duration :- 02/11/2020 - 13/08/2021</label></center>
                <center><label style={{fontFamily:"fantasy",alignSelf:"center"}}>Worked as Android Developer</label></center>
                </Card>
                </Col>
 
              
                </Row>
    </Container>
    </>);
};

export default Experience;