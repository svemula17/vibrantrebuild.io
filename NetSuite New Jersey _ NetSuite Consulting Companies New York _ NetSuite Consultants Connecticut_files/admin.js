/**
 * Created by imyuvii on 17/10/16.
 */
function webtangl_egm_getLocation(address, key) {
    var obj =jQuery.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address='+address+'&key=' + key);

    obj.success( function (data) {
        data = {
            lat : data.results[0].geometry.location.lat,
            lng : data.results[0].geometry.location.lng
        }
    });

    return data;
}