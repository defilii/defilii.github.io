//basic map stuff
let config = {
    minZoom: 7,
    maxZoom: 18,
};
var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -5,
    zoomDelta: 0.10,
    zoomSnap: 0
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

var image = L.imageOverlay('icons/Background low contrast.jpg', bounds).addTo(map);
var image = L.imageOverlay('icons/Trimisteguros zone of alineation/Trimisteguros zone.png', boundsT).addTo(map);
var image = L.imageOverlay('icons/Polivian Yellow Delta outer frame.png', bounds).addTo(map);
var svgOverlay = L.svgOverlay(svgElement, bounds, {
    opacity: 0.8,
    interactive: true
}).addTo(map);

map.fitBounds(bounds);
// map.fitWorld();

//disables panning outside map
map.on('drag', function () {
    map.panInsideBounds(bounds, {animate: false});
});

//shows full map on first load
// map.setView([500, 500], 0);


//function that interacts with html elements to change
function myFunction(name) {
    document.getElementById("info").innerHTML = name;
}

//custom icons for marker
var smallIcon = L.Icon.extend({
    options: {
        iconSize: [50, 50],
    }
});
var mediumIcon = L.Icon.extend({
    options: {
        iconSize: [90, 90],
    }
});
var LargerIcon = L.Icon.extend({
    options: {
        iconSize: [140, 140],
    }
});

var evenLargerIcon = L.Icon.extend({
    options: {
        iconSize: [180, 180],
    }
});
var pointOfInterest = new mediumIcon({iconUrl:'icons/Interactive Point of interest icon.svg'})
var achachi = new mediumIcon({iconUrl:'icons/Town icons/ACHACACHI.svg'})
var apolo = new mediumIcon({iconUrl:'icons/Town icons/APOLO.svg'})
var consata = new mediumIcon({iconUrl:'icons/Town icons/CONSATA.svg'})
var laja = new mediumIcon({iconUrl:'icons/Town icons/LAJA.svg'})
var mecapaca = new mediumIcon({iconUrl:'icons/Town icons/MECAPACA.svg'})
var palca = new mediumIcon({iconUrl:'icons/Town icons/PALCA.svg'})
var pongo = new mediumIcon({iconUrl:'icons/Town icons/PONGO.svg'})
var tipuani = new mediumIcon({iconUrl:'icons/Town icons/TIPUANI.svg'})
var viacha = new mediumIcon({iconUrl:'icons/Town icons/VIACHA.svg'})

var busStop = new mediumIcon({iconUrl:'icons/Static points of interest/BUS STOP.svg'})
var mines = new mediumIcon({iconUrl:'icons/Static points of interest/MINES.svg'})
var launchSite = new mediumIcon({iconUrl:'icons/Static points of interest/LAUNCH SITE.svg'})
var moonValley = new mediumIcon({iconUrl:'icons/Static points of interest/MOON VALLEY.svg'})
var troutFarm = new mediumIcon({iconUrl:'icons/Static points of interest/TROUT FARM.svg'})

var armoredOpsFB = new LargerIcon({iconUrl:'icons/Bases/ARMORED OPS FORWARD BASE.svg'})
var occultOpsHC = new LargerIcon({iconUrl:'icons/Bases/OCCLT OPS HIDDEN CELL.svg'})
var polivian301HQ = new LargerIcon({iconUrl:'icons/Bases/POLIVIAN 301 HQ.svg'})

var unknown = new smallIcon({iconUrl:'icons/Characters/UNKNOWN.svg'})
var aurora = new smallIcon({iconUrl:'icons/Characters/AURORA.svg'})
var butcher = new smallIcon({iconUrl:'icons/Characters/BUTCHER.svg'})
var coco = new smallIcon({iconUrl:'icons/Characters/COCO.svg'})
var fulgora = new smallIcon({iconUrl:'icons/Characters/FULGORA.svg'})
var gungirl = new smallIcon({iconUrl:'icons/Characters/GUN GIRL.svg'})
var helmetgirl = new smallIcon({iconUrl:'icons/Characters/HELMET GIRL.svg'})
var knifegirl = new smallIcon({iconUrl:'icons/Characters/KNIFE GIRL.svg'})
var lumina = new smallIcon({iconUrl:'icons/Characters/LUMINA.svg'})
var meteora = new smallIcon({iconUrl:'icons/Characters/METEORA.svg'})
var panzerfaustina = new smallIcon({iconUrl:'icons/Characters/PANZERFAUSTINA.svg'})
var romina = new smallIcon({iconUrl:'icons/Characters/ROMINA.svg'})


var mountainNorth = new evenLargerIcon({iconUrl:'icons/Biomes/MOUNTAIN NORTH.svg'})
var plateauWall = new evenLargerIcon({iconUrl:'icons/Biomes/PLATEAU WALL.svg'})
var polivianDesert = new evenLargerIcon({iconUrl:'icons/Biomes/POLIVIAN DESERT.svg'})
var trimisteguros = new evenLargerIcon({iconUrl:'icons/Biomes/TRIMISTEGUROS.svg'})
var tropicalSouth = new evenLargerIcon({iconUrl:'icons/Biomes/TROPICAL SOUTH.svg'})


//markers
var unknownMarker = L.marker([721, 274], {icon: unknown}).addTo(map);
var unknownMarker1 = L.marker([869, 327], {icon: unknown}).addTo(map);
var unknownMarker2 = L.marker([712, 387], {icon: unknown}).addTo(map);
var unknownMarker3 = L.marker([618, 271], {icon: unknown}).addTo(map);
var auroraMarker = L.marker([232, 588], {icon: aurora}).addTo(map);
var butcherMarker = L.marker([315, 370], {icon: butcher}).addTo(map);
var cocoMarker = L.marker([133, 400], {icon: coco}).addTo(map);
var fulgoraMarker = L.marker([531, 738], {icon: fulgora}).addTo(map);
var gungirlMarker = L.marker([312, 740], {icon: gungirl}).addTo(map);
var helmetgirlMarker = L.marker([312, 790], {icon: helmetgirl}).addTo(map);
var knifegirlMarker = L.marker([312, 690], {icon: knifegirl}).addTo(map);
var luminaMarker = L.marker([450, 187], {icon: lumina}).addTo(map);
var meteoraMarker = L.marker([900, 770], {icon: meteora}).addTo(map);
var panzerfaustinaMarker = L.marker([748, 722], {icon: panzerfaustina}).addTo(map);
var rominaMarker = L.marker([262, 588], {icon: romina}).addTo(map);

var achachiMarker = L.marker([750, 540], {icon: achachi}).addTo(map);
var viachaMarker = L.marker([810, 710], {icon: viacha}).addTo(map);
var apoloMarker = L.marker([100, 400], {icon: apolo}).addTo(map);
var consataMarker = L.marker([280, 370], {icon: consata}).addTo(map);
var lajaMarker = L.marker([420, 610], {icon: laja}).addTo(map);
var mecapacaMarker = L.marker([345, 740], {icon: mecapaca}).addTo(map);
var palcaMarker = L.marker([450, 840], {icon: palca}).addTo(map);
var pongoMarker = L.marker([330, 580], {icon: pongo}).addTo(map);
var tipuaniMarker = L.marker([60, 250], {icon: tipuani}).addTo(map);

var busStopMarker = L.marker([100, 940], {icon: busStop}).addTo(map);
var minesMarker = L.marker([160, 50], {icon: mines}).addTo(map);
var launchSiteMarker = L.marker([750, 310], {icon: launchSite}).addTo(map);
var moonValleyMarker = L.marker([650, 850], {icon: moonValley}).addTo(map);
var troutFarmMarker = L.marker([300, 610], {icon: troutFarm}).addTo(map);

var armoredOpsFBMarker = L.marker([900, 880], {icon: armoredOpsFB}).addTo(map);
var occultOpsHCMarker = L.marker([500, 760], {icon: occultOpsHC}).addTo(map);
var polivian301HQMarker = L.marker([200, 600], {icon: polivian301HQ}).addTo(map);

var mountainNorthMarker = L.marker([840, 750], {icon: mountainNorth}).addTo(map);
var plateauWallMarker = L.marker([550, 450], {icon: plateauWall}).addTo(map);
var polivianDesertMarker = L.marker([600, 700], {icon: polivianDesert}).addTo(map);
var trimistegurosMarker = L.marker([810, 100], {icon: trimisteguros}).addTo(map);
var tropicalSouthMarker = L.marker([150, 300], {icon: tropicalSouth}).addTo(map);



//adds function on click of a marker
achachiMarker.on('click', function (e) {
    myFunction("you clicked");
});

//function that reveals coordinate of where you clicked, useful for not going insane
function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);

