import React, {useState, useEffect} from 'react';

import Location from "./components/Location";
import SearchList from './components/SearchList';
import SearchBar from './components/SearchBar';
import { saveSearchToStorage, getSearchLocationFromStorage } from './utils';

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';


function App(props) {
  const [searchIP, setSearchIP] = useState("");
  const [searchList, setSearchList] = useState([]);

  useEffect(() => setSearchList(getSearchLocationFromStorage(sessionStorage)), []); //init the list

    return (
      <Container className="p-3 my-4 bg-info text-white">
        <Row>
          <Col md={4} lg={4} sm={4}>
            <SearchList locations={searchList}/>
          </Col>
          <Col>
            <Row>
                <Location ip="check" popup="You are here!"/>
            </Row>
            <Row>
                <SearchBar 
                  search={(val) => {
                      setSearchIP(val);
                      if(val) setSearchList(saveSearchToStorage(val, sessionStorage));
                    }
                  }
                />
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
