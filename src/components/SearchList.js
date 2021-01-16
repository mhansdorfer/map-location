import ListGroup from 'react-bootstrap/ListGroup';

export default function SearchList(props){
    return (
        props.locations && props.locations.length > 0 ?
            <>
                <h5>Recently you have searched for:</h5>
                <ListGroup className="text-dark overflow-auto mt-3" style={{height: "86vh"}}>
                    {props.locations ? props.locations.map((location, index)=>{
                        return <ListGroup.Item key={location + "-" +index}>{location}</ListGroup.Item> 
                    }) : null}
                </ListGroup>
            </>
            : <h5 className="text-center mt-2">Search list will appear here</h5>
    );
}