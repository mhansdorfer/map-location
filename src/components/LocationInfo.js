import "../css/LocationMap.css";

export default function LocationInfo(props){
    const {country_name, city, ip} = props;
    return ( 
        <>
            { ip && 
                <section className="text-center py-5 border border-light location-info">
                    <h3>{city}</h3>
                    <h5>{country_name}</h5>
                    <p>{ip}</p> 
                </section>
            }
        </>
    );
}
