import ListGroup from 'react-bootstrap/ListGroup';

export default function SearchList(props){
    return (
        <>
            <h5>Recently you have searched:</h5>
            <ListGroup className="text-dark overflow-auto" style={{height: "86vh"}}>
                {props.locations ? props.locations.map((location, index)=>{
                    return <ListGroup.Item key={location + "-" +index}>{location}</ListGroup.Item> 
                }) : null}
            </ListGroup>
        </>
    );
}