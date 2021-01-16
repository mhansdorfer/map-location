import {useState, useEffect} from 'react';
import axios from 'axios';

import LocationInfo from './LocationInfo';
import LocationMap from './LocationMap';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';

/**
 * Component downloads information about location (ip / url) and then renders map and location info or error/loading messages
 */

export default function Location(props){
    const NOT_FOUND_ERROR_MESSAGE = "We could not have found this location. Please check your chosen IP or URL and try again.";
    const [location, setLocation] = useState({});
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(NOT_FOUND_ERROR_MESSAGE);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=> {
        if(props.ip !== ""){
            const url = `http://api.ipstack.com/${props.ip}?access_key=${process.env.REACT_APP_IP_STACK_ACCESS_KEY}&output=json`;
            setIsLoading(true);
            axios.get(url)
                .then(res => { 
                    const {latitude, longitude} = res.data;
                    if(latitude && longitude){
                        setStatus(false, false, "");
                        setLocation({});//otherwise the map was not rerendered
                        setLocation(res.data);
                    } 
                    else setStatus(false, true, NOT_FOUND_ERROR_MESSAGE);
                })
                .catch(error => {
                    setStatus(false, true, "An error has occurred: "+ error.message);
                    console.error(`Location Error: ${error}`);
                });
        }
       
    }, [props.ip]);

    const setStatus = (loading, error, errorMessage) => {
        setIsLoading(loading);
        setIsError(error);
        setErrorMessage(errorMessage);
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
                                {errorMessage}
                            </Alert> 
                        </Col>
                    </Row>    
                    : <Row>
                           <Col sm={5} md={7} lg={7}>
                                <LocationMap {...location} {...props} />
                            </Col>
                            <Col sm={7} md={5} lg={5}>
                                <LocationInfo {...location}/>
                            </Col>
                      </Row>
                    )}
        </Container>
    );
}