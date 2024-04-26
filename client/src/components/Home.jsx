export default function Home() {
    const API = 'cebdbe1753a5af12101fc266dce79204';
    const url ="https://api.openweathermap.org/data/2.5/weather?q="
    
    function getWeather() {
        const cityName = "Mesa"
        const queryUrl = url + cityName + "&appid=" + API + "&units=imperial"; // for the current weather
        fetch(queryUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data); // checking the data
      
            });
        };
            getWeather()
    return (
        <>from Home component</>
    );
}
   
   