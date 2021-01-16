# Application displays location of provided IP address or URL on map.

## Application specification
- SPA (Single Page Application) that communicates with a RESTful API
- use https://ipstack.com for the geolocation of IP addresses and URLs
- Leaflet and React-Leaflet used to display location on map
- Application is in React

## Application UI specification
- Landing on this application displays user IP with it’s location on the map
- There is a search box under map and IP in which you can only write IP address or URL
- If user provides a wrong IP address or URL, error message is displayed
- searched query (IP address or URL) is located and displayed on the map below search box
- React-bootstrap is used as css framework
- The application stores history of searched locations during session
