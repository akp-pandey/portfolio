import React from "react";
import { CDBContainer } from "cdbreact";
import { Col, Container, Row } from "react-bootstrap";
import { MDBCol, MDBContainer, MDBFooter, MDBRow } from "mdbreact";

const Footer=()=>{
    return(
        <Container style={{backgroundColor:"black"}} className="text-center text-white p-md-4"> 
            <Row>
                <Col md="6">
                <label>Bachelor of Technology</label><br/>
                <label>Electronics and Communication Engineering (2021)&nbsp;</label>
                <label>GIET UNIVERISTY , GUNUPUR</label>

                </Col>
                <Col md="6">
                    <label>+91 7634934738</label><br/>
                    <lable>meabhishekpandey308@gmail.com</lable>

                        
                
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;