import React from "react";
import { Card, Container, Image ,Col ,Row} from "react-bootstrap";
import reactPic from './reactpic.jpg';
import javaPic from './java.jpg'
import restPic from './rest.jpg'
import androidPic from './android.jpg'
const Skills=()=>{
    return (  <Container style={{minHeight:"500px",backgroundColor:"red"}}>
    <br/>
  
        <Row>
            <Col md-4>
            <Card style={{width:"100%",paddingTop:"10px",marginTop:"5px",marginBottom:"5px"}}>
            <center><img  src={javaPic} style={{width:"200px",height:"200px",borderRadius:"100px",margin:"20px"}}alt="this is car image" /></center>
            <center><label style={{fontFamily:"fantasy",alignSelf:"center"}}>Java SE and Java EE</label></center>
           
            </Card>
            </Col>
            <Col md-4>
            <Card style={{width:"100%",paddingTop:"10px",marginTop:"5px",marginBottom:"5px"}}>
            <center><img src={reactPic} style={{width:"200px",height:"200px",borderRadius:"100px",margin:"20px"}}alt="this is car image" /></center>
            <center><label style={{fontFamily:"fantasy",alignSelf:"center"}}>Ract JS , Node JS , MongoDb</label></center>
            </Card>
            </Col>
            <Col md-4>
            <Card style={{width:"100%",paddingTop:"10px",marginTop:"5px",marginBottom:"5px"}}>
            <center><img src={restPic} style={{width:"200px",height:"200px",borderRadius:"100px",margin:"20px"}}alt="this is car image" /></center>
            <center><label style={{fontFamily:"fantasy",alignSelf:"center"}}>REST API using SpringBoot and Node Js</label></center>
            
            </Card>
            </Col>
            <Col md-4>
            <Card style={{width:"100%",paddingTop:"10px",marginTop:"5px",marginBottom:"5px"}}>
            <center><img src={androidPic} style={{width:"200px",height:"200px",borderRadius:"100px",margin:"20px"}}alt="this is car image" /></center>
            <center><label style={{fontFamily:"fantasy",alignSelf:"center"}}>Android Development ( Kotlin )</label></center>
            </Card>
            </Col>
        
          
            </Row>
</Container>);
};

export default Skills;