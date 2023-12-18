const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoicnBlcmV6MTAyMCIsImEiOiJjbHFhOTdkb2cxems5MmtteHRzNjhjY3U4In0.PHLgJOGUrEKvUvyWti8Gfg'

var map = new mapboxgl.Map({
    accessToken: MAPBOX_ACCESS_TOKEN,
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11'
});

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy:true})

function successLocation(position){
    console.log(position)
}

function errorLocation(){
    console.log("error")
}