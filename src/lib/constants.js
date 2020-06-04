import * as L from 'leaflet';
import greenMarker from '../assets/img/marker-icon-green.png'
import blueMarker from '../assets/img/marker-icon-blue.png';
import violetMarker from '../assets/img/marker-icon-violet.png';
import orangeMarker from '../assets/img/marker-icon-orange.png';
import redMarker from '../assets/img/marker-icon-red.png';
import goldMarker from '../assets/img/marker-icon-gold.png';
import shadow from '../assets/img/marker-shadow.png';


export const greenMarkerIcon = new L.Icon({
    iconUrl: greenMarker,
    shadowUrl: shadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

export const blueMarkerIcon = new L.Icon({
    iconUrl: blueMarker,
    shadowUrl: shadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

export const violetMarkerIcon = new L.Icon({
    iconUrl: violetMarker,
    shadowUrl: shadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

export const orangeMarkerIcon = new L.Icon({
    iconUrl: orangeMarker,
    shadowUrl: shadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

export const redMarkerIcon = new L.Icon({
    iconUrl: redMarker,
    shadowUrl: shadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

export const goldMarkerIcon = new L.Icon({
    iconUrl: goldMarker,
    shadowUrl: shadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});


export const objectiveTypes =
    [
        {label:'Select walking evaluation', value: '3', className: 'lvl-def'},
        {label:'Excellent', value: '10', className: 'lvl-5'},
        {label:'Very Good', value: '8', className: 'lvl-4'},
        {label:'Decent', value: '6', className: 'lvl-3'},
        {label:'Not so Good', value: '4', className:'lvl-2'},
        {label:'Poor', value: '2', className: 'lvl-1'}];

export const subjectiveTypes = [
    {label:'Select visual evaluation', value: '#7D98A1', className: 'lvl-def'},
    {label: 'Awesome', value: '#12C416', className: 'lvl-5'},
    {label: 'Very pleasing', value: '#3D7AF5', className: 'lvl-4'},
    {label: 'Fair', value: '#B054F8', className: 'lvl-3'},
    {label: 'Not so pleasing', value: '#F27418', className: 'lvl-2'},
    {label: 'Unpleasant', value: '#F41A1A', className:'lvl-1'},
];

export const defaultSubjectiveValue = '#7D98A1';

export const defaultObjectiveValue = '3';

export const filterLbl = 'Filter Selections';

export const toastDelay = 1500;

export const objectiveTypesKeyValue = {
    '10': {label:'Excellent', className: 'lvl-5'},
    '8': {label:'Very Good', className: 'lvl-4'},
    '6': {label:'Decent', className: 'lvl-3'},
    '4': {label:'Not so Good', className:'lvl-2'},
    '2': {label:'Poor', className: 'lvl-1'}
}

export const subjectiveTypesKeyValue = {
    '#12C416': {label: 'Magnificent', className: 'lvl-5', marker: greenMarkerIcon},
    '#3D7AF5': {label: 'Very pleasing', className: 'lvl-4', marker: blueMarkerIcon},
    '#B054F8': {label: 'Fair', className: 'lvl-3', marker: violetMarkerIcon},
    '#F27418': {label: 'Not so pleasing', className: 'lvl-2', marker: orangeMarkerIcon},
    '#F41A1A': {label: 'Unpleasant', className:'lvl-1', marker: redMarkerIcon}
};

export const notificationMsgs = {
    deleteRecordedPathModal: 'Are you sure you want to discard this recorded path? This cannot be undone.',
    deleteSelectedPathModal: 'Are you sure you want to permanently delete this path? This cannot be undone.',
    undoSelectedPathModal: "You have unsaved changes, are you sure you want to go back?",
    deletedRecordedPathToast: 'The recorded path was discarded.',
    undoSelectedPathToast: 'The changes were reverted.',
    deleteSelectedPathSuccessToast: 'Your change for deleting this path is submitted.',
    deleteSelectedPathSuccessToastOffline: 'You are currently offline, but your path will be deleted when you are back in the network! (You will be notified).',
    deleteSelectedPathErrorToast: 'An error occurred, failed to delete the path.',
    saveRecordedPathSuccessToast: 'Your change for saving this path is submitted.',
    saveRecordedPathSuccessToastOffline: 'You are currently offline, but your path will be saved when you are back in the network! (You will be notified)',
    saveRecordedPathErrorToast: 'An error occurred, failed to modify the path.',
    saveSelectedPathSuccessToast: 'Your change for saving this modified path is submitted.',
    saveSelectedPathSuccessToastOffline: 'You are currently offline, but your path will be modified when you are back in the network! (You will be notified)',
    saveSelectedPathErrorToast: 'An error occurred, failed to save the path.',
    saveDrawnPathSuccessToast: 'Your change for saving this path is submitted.',
    saveDrawnPathSuccessToastOffline: 'You are currently offline, but your path will be saved when you are back in the network! (You will be notified)',
    saveDrawnPathErrorToast: 'An error occurred, failed to save the path.',
    pathsSyncedSuccessToast: 'The path list is updated.'
}

export const tooltipContent = {
    snapBefore: "In case of any GPS inconsistencies, you can use this service to match automatically your path with a trail on the map. If you don't want to keep this change, just turn the switch off. You will also be able to use this service after saving your path. This service is available only while being online.",
    snapAfter: "In case of any GPS inconsistencies, you can use this service to match automatically your path with a trail on the map. If you don't want to keep this change, just turn the switch off. You won't be able to turn this off after saving a path in On mode. This service is available only while being online.",
    description: "Type any kind of information that is worth mentioning. It will be added to the path as a description tag (available in the path's pop-up info)."
}

export const mapLayersTitles= ['osmMapnik',  'esriWorldImagery', 'esriWorldStreetMap', 'osmHot', 'osmTopo', 'stadiaAlidadeSmooth',
    'stadiaAlidadeSmoothDark', 'stadiaOutdoors', 'stadiaOsmBright',
    'thunderForestSpinalMap', 'thunderforestLandscape', 'thunderforestMobileAlias',
    'thunderforestTransport', 'thunderforestTransportDark',
    'mtbMap', 'cartoDbPositron', 'cartoDbDarkMatter', 'cartoDbVoyager', 'hikeBike'
];

export const mapLayers =
    {osmMapnik: {
            title: 'OpenStreetMap Mapnik',
            layer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        },
        esriWorldImagery: {
            title: 'Esri World Imagery',
            layer: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        },
        esriWorldStreetMap: {
            title: 'Esri World Street Map',
            layer: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
        },
        osmHot: {
            title: 'OpenStreetMap Hot',
            layer: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
        },
        osmTopo: {
            title: 'Open Topo Map',
            layer: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
            maxZoom: 17,
            attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>'
        },
        stadiaAlidadeSmooth: {
            title: 'Stadia Alidade Smooth',
            layer: 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key=' + process.env.STADIA_API_KEY,
            maxZoom: 20,
            attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        },
        stadiaAlidadeSmoothDark: {
            title: 'Stadia Alidade Smooth Dark',
            layer: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=' + process.env.STADIA_API_KEY,
            maxZoom: 20,
            attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        },
        stadiaOutdoors: {
            title: 'Stadia Outdoors',
            layer: 'https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png?api_key=' + process.env.STADIA_API_KEY,
            maxZoom: 20,
            attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        },
        stadiaOsmBright: {
            title: 'Stadia OSM Bright',
            layer: 'https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png?api_key=' + process.env.STADIA_API_KEY,
            maxZoom: 20,
            attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        },
        thunderForestSpinalMap: {
            title: 'Thunderforest Spinal Map',
            layer: 'https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey=' + process.env.THUNDERFOREST_API_KEY,
            attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            apikey: process.env.THUNDERFOREST_API_KEY,
            maxZoom: 22
        },
        thunderforestLandscape: {
            title: 'Thunderforest Landscape',
            layer: 'https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=' + process.env.THUNDERFOREST_API_KEY,
            attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            apikey: process.env.THUNDERFOREST_API_KEY,
            maxZoom: 22
        },
        thunderforestMobileAlias: {
            title: 'Thunderforest Mobile Alias',
            layer: 'https://{s}.tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey=' + process.env.THUNDERFOREST_API_KEY,
            attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            apikey: process.env.THUNDERFOREST_API_KEY,
            maxZoom: 22
        },
        thunderforestTransport: {
            title: 'Thunderforest Transport',
            layer: 'https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=' + process.env.THUNDERFOREST_API_KEY,
            attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            apikey: process.env.THUNDERFOREST_API_KEY,
            maxZoom: 22
        },
        thunderforestTransportDark: {
            title: 'Thunderforest Transport Dark',
            layer: 'https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=' + process.env.THUNDERFOREST_API_KEY,
            attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            apikey: process.env.THUNDERFOREST_API_KEY,
            maxZoom: 22
        },
        mtbMap: {
            title: 'Mtb Map',
            layer: 'http://tile.mtbmap.cz/mtbmap_tiles/{z}/{x}/{y}.png',
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &amp; USGS'
        },
        cartoDbPositron: {
            title: 'CartoDB Positron',
            layer: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 19
        },
        cartoDbDarkMatter: {
            title: 'CartoDB Dark Matter',
            layer: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 19
        },
        cartoDbVoyager: {
            title: 'CartDB Voyager',
            layer: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 19
        },
        hikeBike: {
            title: 'Hike Bike',
            layer: 'https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png',
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }
    };
