import React, {Component} from 'react';
import * as L from 'leaflet';
import 'leaflet-draw';
import {CachedTileLayer} from '@yaga/leaflet-cached-tile-layer';
import {
    AttributionControl,
    Map,
    TileLayer,
    FeatureGroup,
    GeoJSON, Polyline
} from "react-leaflet";
import { GestureHandling } from "leaflet-gesture-handling";
import LocateControl from './LocateControl.js';
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet-gesture-handling/dist/leaflet-gesture-handling.css";


const southWest = L.latLng( 37.273073, 23.033121),
    northEast = L.latLng(38.325771, 24.134307),
    bounds = L.latLngBounds(southWest, northEast);

const locateOptions = {
    position: 'topright',
    // drawCircle: false,
    enableHighAccuracy: true,
    icon: "location-gps",
    showCompass: true,
    strings: {
        title: 'Locate me!'
    },
    keepCurrentZoomLevel: true,
    locateOptions: {
        watch: true
    }
};




class CustomMap extends Component {
    constructor(props) {
        super(props);

        this.mapRef = React.createRef();

        this.state = {
            zoom: 16,
            currCenter: null,
            recording: props.recording,
            currPoly: [],
            difficulty: 4,
            category: "#8364D8"
        }

        this._onFeatureGroupReady = this._onFeatureGroupReady.bind(this);
        this.addDrawControl = this.addDrawControl.bind(this);
    }


    UNSAFE_componentWillMount() {
        let latlng = new L.LatLng(37.9754983,  23.7356671);
        this.setState({
            currCenter: latlng
        })
    }

    componentDidMount() {
        const map = this.mapRef.current.leafletElement;
        let _this = this;

        const leafletCachedTileLayer = new CachedTileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            databaseName: 'tile-cache-data', // optional
            databaseVersion: 1, // optional
            objectStoreName: 'OSM', // optional
            crawlDelay: 500, // optional
            maxAge: 1000 * 60 * 60 * 24 * 7, // optional
            bounds: bounds
        });

        leafletCachedTileLayer.addTo(map);

        map.on('locationfound', function(loc) {
            if (_this.state.recording) {
                _this.setState(prevState => {
                    console.log(prevState.currPoly)
                    return {
                        currPoly: prevState.currPoly.length <= 0 ? [[loc.latitude, loc.longitude]] : [...prevState.currPoly, [loc.latitude, loc.longitude]]

                    }
                }, () => {
                    console.log(_this.state.currPoly)
                })
            }
        });

        this.addDrawControl();
    }

    addDrawControl() {
        let fgLoaded = false;
        const map = this.mapRef.current.leafletElement;
        let _this = this;
        const interval = setInterval(() => {
            if (_this._editableFG) {
                const drawPluginOptions = {
                    position: 'topright',
                    draw: {
                        polyline: {
                            shapeOptions:  {
                                color: _this.state.category,
                                weight: _this.state.difficulty,
                                opacity: 1
                            }},
                        rectangle: false,
                        marker: true,
                        circlemarker: false,
                        circle: false,
                        polygon: false
                    },
                    edit: {
                        featureGroup: _this._editableFG.leafletElement, //REQUIRED!!
                        remove: true
                    }
                };
                var drawControl = new L.Control.Draw(drawPluginOptions);
                map.addControl(drawControl);

                map.on('draw:created', function(e) {
                    var type = e.layerType,
                        layer = e.layer;

                    if (type === 'marker') {
                        layer.bindPopup('A popup!');
                    }
                    _this._editableFG.leafletElement.addLayer(layer);
                    alert('created')
                });
                clearInterval(interval);
            }
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.recording !== this.props.recording) {
            this.setState({
                ...this.state,
                recording: this.props.recording
            })
        }
    }


    _editableFG = null;

    _onFeatureGroupReady (reactFGref) {
        if (reactFGref) {
            this._editableFG = reactFGref;
        }
    };

    render() {
        return (
            <Map
                ref={this.mapRef}
                style={{height: "calc(100vh - 4rem - 50px)", width: "100%"}}
                minZoom={8}
                maxZoom={19}
                gestureHandling={true}
                center={this.state.currCenter}
                maxBounds={bounds}
                zoom={this.state.zoom}
                attributionControl={false}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    bounds={bounds}
                />
                <AttributionControl position="topright" prefix={false} />
                <LocateControl options={locateOptions}/>
                <FeatureGroup ref={ (reactFGref) => {
                    this._onFeatureGroupReady(reactFGref)}}>
                    {this.state.currPoly && this.state.currPoly.length > 0 ?
                        <React.Fragment>
                            <Polyline key={"polyline"}
                                     positions={this.state.currPoly}
                                      color={this.state.category}
                                      weight={this.state.difficulty}
                            />

                        </React.Fragment>

                        :null
                    }
                </FeatureGroup>
            </Map>
        );
    }
}

export default CustomMap;