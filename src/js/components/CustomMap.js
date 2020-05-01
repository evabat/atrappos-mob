import React, {Component} from 'react';
import * as L from 'leaflet';
import {CachedTileLayer} from '@yaga/leaflet-cached-tile-layer';
import {
    Map,
    TileLayer
} from "react-leaflet";
import { GestureHandling } from "leaflet-gesture-handling";
import LocateControl from './LocateControl.js';
import "leaflet/dist/leaflet.css";
import "leaflet-gesture-handling/dist/leaflet-gesture-handling.css";


const southWest = L.latLng( 37.273073, 23.033121),
    northEast = L.latLng(38.325771, 24.134307),
    bounds = L.latLngBounds(southWest, northEast);

const locateOptions = {
    position: 'topright',
    icon: 'location-gps',
    strings: {
        title: 'Show my location'
    },
    onActivate: () => {} // callback before engine starts retrieving locations
};


class CustomMap extends Component {
    constructor(props) {
        super(props);

        this.mapRef = React.createRef();

        this.state = {
            zoom: 16,
            currentCenter: null
        }
    }


    UNSAFE_componentWillMount() {
        let latlng = new L.LatLng(37.9754983,  23.7356671);
        this.setState({
            currentCenter: latlng
        })
    }

    componentDidMount() {
        const map = this.mapRef.current.leafletElement;

        const leafletCachedTileLayer = new CachedTileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            databaseName: 'tile-cache-data', // optional
            databaseVersion: 1, // optional
            objectStoreName: 'OSM', // optional
            crawlDelay: 500, // optional
            maxAge: 1000 * 60 * 60 * 24 * 7 // optional
        });
        leafletCachedTileLayer.addTo(map);
        }

    render() {

        return (
            <Map
                ref={this.mapRef}
                style={{height: "100vh", width: "100%"}}
                minZoom={12}
                maxZoom={17}
                gestureHandling={true}
                center={this.state.currentCenter}
                maxBounds={bounds}
                zoom={this.state.zoom}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    bounds={bounds}
                />
                <LocateControl options={locateOptions}/>
            </Map>
        );
    }
}

export default CustomMap;