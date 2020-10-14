import React from 'react';

const Map = () => {
    const propertiPeta = {
          center:new google.maps.LatLng(-8.5830695,116.3202515),
          zoom:9,
          mapTypeId:google.maps.MapTypeId.ROADMAP
        };
        
    const peta = new google.maps.Map(document.getElementById("googleMap"), propertiPeta);
        
    // membuat Marker
    const marker=new google.maps.Marker({
            position: new google.maps.LatLng(-8.5830695,116.3202515),
            map: peta
        });

        return(
            google.maps.event.addDomListener(window, 'load', Map);
        <div id="googleMap" style="width:100%;height:380px;">
            {/* {Map} */}
        </div>
    )
}