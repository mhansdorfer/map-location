export default function LocationInfo(props){
    const {country_name, city, ip} = props;
    return (
        <section className="text-center py-5">
            <h3>{city}</h3>
            <h5>{country_name}</h5>
            <p>{ip}</p> 
        </section>
    );
}
