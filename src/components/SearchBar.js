import {useState} from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SearchBar(props){
    const [searchValue, setSearchValue] = useState("");
    const handleChange = (event) => setSearchValue(event.target.value);

    return(
    <Container className="p-3 my-2">
            <Row>
                <Col lg={10} md={9} sm={8} xs={9}>
                    <input 
                        type="text" 
                        name="search" 
                        placeholder="Search IP or URL address" 
                        value={searchValue}
                        onChange={handleChange}
                        className="form-control"
                    />
                </Col>
                <Col lg={2} md={3} sm={4} xs={3}>
                    <Button 
                        variant="warning" 
                        onClick={() => {
                            props.search(searchValue);
                            setSearchValue("");
                        }}>
                        Search
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default SearchBar;