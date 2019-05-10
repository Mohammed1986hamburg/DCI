const form=document.querySelector('form');
const radiusKM=document.querySelector('input');



navigator.geolocation.getCurrentPosition( postion=>{

    const mylongitude=postion.coords.longitude;
    const mylatitude=postion.coords.latitude;
    console.log(mylatitude,mylongitude );

    // https://leafletjs.com/index.html
    var mapid = L.map('mapid').setView([mylatitude, mylongitude], 10);

    //
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Mohammed'
    }).addTo(mapid);

    //
    L.marker([mylatitude, mylongitude])
    .bindPopup('I am Here')
    .addTo(mapid);

    //
    const layerGroup=L.layerGroup().addTo(mapid);

    //
    form.addEventListener('submit', async ev=>{
        ev.preventDefault();
     try{  
            const res = await fetch('/shops/getByDistance', {
                method: 'post',
                headers: {'Content-Type':'application/json'}, 
                body: JSON.stringify({
                    radius: radiusKM.value,
                    longitude: mylongitude,
                    latitude: mylatitude
                })})
            let data = await res.json();
            console.log(data);
            layerGroup.clearLayers();
            data.forEach(element=>{
                L.marker([element.location.coordinates[1], element.location.coordinates[0]])
                .bindPopup(`<h3>Name of Resturant: ${element.name}<h3/>
                            <p>Distance from you: <strong>${Math.round(element.dist.calculated)}</strong><p/>
                            <p>Cheapeast Dish: <strong>${element.cheapestDish}$</strong><p/>`)
                .addTo(layerGroup)
            })
        


            mapid.setView([mylatitude, mylongitude], 6);
            
        } 
        catch{
            (error => console.log(error));
        }
          
    })



})







