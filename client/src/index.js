const getEvents =() => {
    fetch("http://165.227.125.136:3000/api" )
    .then( response => response.json() )
        .then( events => {
        console.log(events);
        
    })
}