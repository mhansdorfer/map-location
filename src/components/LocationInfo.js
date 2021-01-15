export default function LocationInfo(props){
    const {country_name, city, ip} = props;
    return (
        <section>
            <p>{city}</p>
            <p>{country_name}</p>
            <p>IP: {ip}</p>
        </section>
    );

}