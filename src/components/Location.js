import {useState, useEffect} from 'react';
import axios from 'axios';

import LocationInfo from './LocationInfo';
import LocationMap from './LocationMap';

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


export default function Location(props){
    const [location, setLocation] = useState({});

    useEffect(()=> {
        
        if(props.ip !== ""){
            const url = `http://api.ipstack.com/${props.ip}?access_key=${process.env.REACT_APP_IP_STACK_ACCESS_KEY}&output=json`;
            axios.get(url)
                .then(res => { 
                    setLocation({});//otherwise the map was not rerendered
                    setLocation(res.data);
                })
                .catch(err => console.error(`My Error: ${err}`));
        }
       
    }, [props.ip]);

    return (
        <Container>
            <Row>
                <Col sm={8} md={7} lg={7}>
                    <LocationMap {...location} {...props} />
                </Col>
                <Col sm={4} md={5} lg={5}>
                    <LocationInfo {...location}/>
                </Col>
            </Row>
        </Container>
    );
}