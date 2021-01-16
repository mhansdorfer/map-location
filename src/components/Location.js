import {useState, useEffect} from 'react';
import axios from 'axios';

import LocationInfo from './LocationInfo';
import LocationMap from './LocationMap';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';

export default function Location(props){
    const [location, setLocation] = useState({});
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=> {
        if(props.ip !== ""){
            const url = `http://api.ipstack.com/${props.ip}?access_key=${process.env.REACT_APP_IP_STACK_ACCESS_KEY}&output=json`;
            setIsLoading(true);
            axios.get(url)
                .then(res => { 
                    const {latitude, longitude} = res.data;
                    if(latitude && longitude){
                        setStatus(false, false);
                        setLocation({});//otherwise the map was not rerendered
                        setLocation(res.data);
                    } 
                    else setStatus(true, false);
                })
                .catch(err => {
                    setStatus(true, false);
                    console.error(`Location Error: ${err}`)
                });
        }
       
    }, [props.ip]);

    const setStatus = (error, loading) => {
        setIsLoading(loading);
        setIsError(error);
    }

    return (
        <Container>
            {isLoading ? 
                <Row>
                    <Col lg={{ span: 6, offset: 3 }} md={{ span: 6, offset: 3 }} sm={{ span: 8, offset: 2 }} xs={{ span: 10, offset: 1 }}>
                        <Alert variant="info" className="text-center my-5">
                            Loading...
                        </Alert> 
                    </Col>
                </Row> 
                 : ( isError ? 
                    <Row>
                        <Col lg={{ span: 6, offset: 3 }} md={{ span: 6, offset: 3 }} sm={{ span: 8, offset: 2 }} xs={{ span: 10, offset: 1 }}>
                            <Alert variant="danger" className="text-center my-5">
                                We could not have found this location. Please check your chosen IP or URL and try again.
                            </Alert> 
                        </Col>
                    </Row>    
                    : <Row>
                           <Col sm={8} md={7} lg={7}>
                                <LocationMap {...location} {...props} />
                            </Col>
                            <Col sm={4} md={5} lg={5}>
                                <LocationInfo {...location}/>
                            </Col>
                      </Row>
                    )}
        </Container>
    );
}