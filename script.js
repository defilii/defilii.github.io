//basic map stuff
let config = {
    minZoom: 7,
    maxZoom: 18,
};
var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -5,
});
var svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
svgElement.setAttribute('viewBox', '0 0 400 400');
svgElement.innerHTML =
    '<style type="text/css">' +
    '.st1{fill:#EFDAAC }' +
    '</style>' +
    '<rect x="1" y="0" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="1" width="1" height="400" class="st1"/>' +
    '<rect x="399" y="0" width="1" height="400" class="st1"/>' +
    '<rect x="0" y="399" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="10" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="20" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="30" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="40" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="50" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="60" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="70" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="80" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="90" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="100" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="110" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="120" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="130" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="140" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="150" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="160" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="170" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="180" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="190" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="200" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="210" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="220" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="230" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="240" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="250" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="260" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="270" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="280" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="290" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="300" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="310" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="320" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="330" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="340" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="350" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="360" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="370" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="380" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="390" width="400" height="0.5" class="st1"/>' +

    '<rect y="0" x="10" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="20" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="30" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="40" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="50" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="60" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="70" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="80" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="90" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="100" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="110" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="120" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="130" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="140" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="150" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="160" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="170" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="180" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="190" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="200" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="210" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="220" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="230" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="240" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="250" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="260" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="270" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="280" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="290" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="300" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="310" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="320" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="330" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="340" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="350" width="0.5" height="400"  class="st1"/>' +
    '<rect y="0" x="360" width="0.5" height="400"  class="st1"/>' +
    '<rect y="0" x="370" width="0.5" height="400"  class="st1"/>' +
    '<rect y="0" x="380" width="0.5" height="400"  class="st1"/>' +
    '<rect y="0" x="390" width="0.5" height="400" class="st1"/>' +
    '<rect x="200" y="0" width="0.5" height="400" class="st1"/>';


var bounds = [[0, 0], [1000, 1000]];
var boundsT = [[400, 0], [1000, 600]];
var svgOverlay = L.svgOverlay(svgElement, bounds, {
    opacity: 0.8,
    interactive: true
}).addTo(map);
var image = L.imageOverlay('icons/Background low contrast.jpg', bounds).addTo(map);
var image = L.imageOverlay('icons/Trimisteguros zone of alineation/Trimisteguros zone.png', boundsT).addTo(map);
map.fitBounds(bounds);


//disables panning outside map
map.on('drag', function () {
    map.panInsideBounds(bounds, {animate: false});
});

//shows full map on first load
map.setView([500, 500], 0);


//function that interacts with html elements to change
function myFunction(name) {
    document.getElementById("info").innerHTML = name;
}

//custom icons for marker
var SmallIcon = L.Icon.extend({
    options: {
        iconSize: [90, 90],
    }
});
var LargerIcon = L.Icon.extend({
    options: {
        iconSize: [140, 140],
    }
});
var pointOfInterest = new SmallIcon({iconUrl:'icons/Interactive Point of interest icon.svg'})
var achachi = new SmallIcon({iconUrl:'icons/Town icons/achacachi.svg'})
var apolo = new SmallIcon({iconUrl:'icons/Town icons/apolo.svg'})
var consata = new SmallIcon({iconUrl:'icons/Town icons/consata.svg'})
var laja = new SmallIcon({iconUrl:'icons/Town icons/laja.svg'})
var mecapaca = new SmallIcon({iconUrl:'icons/Town icons/mecapaca.svg'})
var palca = new SmallIcon({iconUrl:'icons/Town icons/palca.svg'})
var pongo = new SmallIcon({iconUrl:'icons/Town icons/pongo.svg'})
var tipuani = new SmallIcon({iconUrl:'icons/Town icons/tipuani.svg'})
var viacha = new SmallIcon({iconUrl:'icons/Town icons/viacha.svg'})


var armoredOpsFB = new LargerIcon({iconUrl:'icons/Bases/ARMORED OPS FORWARD BASE.svg'})
var occultOpsHC = new LargerIcon({iconUrl:'icons/Bases/OCCLT OPS HIDDEN CELL.svg'})
var polivian301HQ = new LargerIcon({iconUrl:'icons/Bases/POLIVIAN 301 HQ.svg'})


//markers
var achachiMarker = L.marker([750, 540], {icon: achachi}).addTo(map);
var viachaMarker = L.marker([810, 710], {icon: viacha}).addTo(map);
var apoloMarker = L.marker([100, 400], {icon: apolo}).addTo(map);
var consataMarker = L.marker([280, 370], {icon: consata}).addTo(map);
var lajaMarker = L.marker([420, 610], {icon: laja}).addTo(map);
var mecapacaMarker = L.marker([345, 740], {icon: mecapaca}).addTo(map);
var palcaMarker = L.marker([450, 840], {icon: palca}).addTo(map);
var pongoMarker = L.marker([330, 580], {icon: pongo}).addTo(map);
var tipuaniMarker = L.marker([60, 250], {icon: tipuani}).addTo(map);

var armoredOpsFBMarker = L.marker([900, 880], {icon: armoredOpsFB}).addTo(map);
var occultOpsHCMarker = L.marker([500, 760], {icon: occultOpsHC}).addTo(map);
var polivian301HQMarker = L.marker([200, 600], {icon: polivian301HQ}).addTo(map);

//adds function on click of a marker
achachiMarker.on('click', function (e) {
    myFunction("you clicked");
});


