import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Location from "./components/Location";
import SearchList from './components/SearchList';
import SearchBar from './components/SearchBar';

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';


function App(props) {
  const [currentIP, setCurrentIP] = useState("");
  const [searchIP, setSearchIP] = useState("");

  useEffect(() => {
    axios.get('https://api.ipify.org?format=json')
    .then(res => setCurrentIP(res.data.ip))
    .catch(err => console.error(`My err: ${err}`));
  }, []);

    return (
      <Container className="p-3 my-4 bg-info text-white">
        <Row>
          <Col md={3} lg={3} sm={4}>
            <SearchList/>
          </Col>
          <Col>
            <Row>
                <Location ip={currentIP} popup="You are here!"/>
            </Row>
            <Row>
                <SearchBar search={(val) => {setSearchIP(val)}}/>
            </Row>
            <Row>
                <Location ip={searchIP} popup="Your search location is here"/>
            </Row>
          </Col>
        </Row>  
      </Container>
    );
}

export default App;
