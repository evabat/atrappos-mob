import React, {Component} from 'react';
import {connect} from "react-redux";
import * as L from 'leaflet';
import 'leaflet-draw';
import {CachedTileLayer} from '@yaga/leaflet-cached-tile-layer';
import PropTypes from "prop-types";
import { EditControl } from "react-leaflet-draw";
import {AppContext} from "../../App";
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
import {loginUser, updateUser} from "../../services/authService";
import {defaultObjectiveValue, defaultSubjectiveValue} from "../../lib/constants";


const southWest = L.latLng( 37.273073, 23.033121),
    northEast = L.latLng(38.325771, 24.134307),
    bounds = L.latLngBounds(southWest, northEast);

const locateOptions = {
    position: 'topright',
    drawCircle: false,
    enableHighAccuracy: true,
    icon: "location-gps",
    iconLoading: "loading-gps",
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
            locationPolyCoords: [],
            objective: props.objectiveSelection,
            subjective: props.subjectiveSelection
        }


        this._onFeatureGroupReady = this._onFeatureGroupReady.bind(this);
        this._onFeatureGroupReady = this._onFeatureGroupReady.bind(this);
        this._onCreated = this._onCreated.bind(this);
        this._onChange = this._onChange.bind(this);
        this._onMounted = this._onMounted.bind(this);
        this._onEditStart = this._onEditStart.bind(this);
        this._onEditStop = this._onEditStop.bind(this);
        this._onEdited = this._onEdited.bind(this);
        this.generateGeoJSON = this.generateGeoJSON.bind(this);
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
            // attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
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
                    console.log('prev POLY on location found', prevState.locationPolyCoords)
                    return {
                        locationPolyCoords: prevState.locationPolyCoords.length <= 0 ? [[loc.latitude, loc.longitude]] : [...prevState.locationPolyCoords, [loc.latitude, loc.longitude]]
                    }
                }, () => {
                    console.log("prev POLY on location found after set state",_this.state.locationPolyCoords)
                })
            }
        });
        //
        // this.addDrawControl();

        map.on('draw:created', function(e) {
            var type = e.layerType,
                layer = e.layer;

            if (type === 'polyline') {
                layer.bindPopup('A popup!');
                console.log(layer.toGeoJSON())
            }
            _this._editableFG.leafletElement.addLayer(layer);

        });
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.recording !== this.props.recording) {
            this.setState({
                ...this.state,
                recording: this.props.recording
            }, ()=> {
                if (!this.state.recording) {
                    this.generateGeoJSON()
                }
            })
        }
        if (prevProps.objectiveSelection !== this.props.objectiveSelection) {
            this.setState({
                ...this.state,
                objective: this.props.objectiveSelection
            })
        }
        if (prevProps.subjectiveSelection !== this.props.subjectiveSelection) {
            this.setState({
                ...this.state,
                subjective: this.props.subjectiveSelection
            })
        }
    }

    generateGeoJSON() {
        let fg = this._editableFG.leafletElement;
        if (fg._layers) {
            Object.keys(fg._layers).map((key)=> {
                console.log(fg._layers[key].toGeoJSON())
            })
        }
    }

    _editableFG = null;

    _onFeatureGroupReady (reactFGref) {
        if (reactFGref) {
            this._editableFG = reactFGref;
            console.log('FG ready', reactFGref.leafletElement)
        }
    };

    _onChange = () => {

        // this._editableFG contains the edited geometry, which can be manipulated through the leaflet API

        const { onChange } = this.props;

        if (!this._editableFG || !onChange) {
            return;
        }

        const geojsonData = this._editableFG.leafletElement.toGeoJSON();
        onChange(geojsonData);
    }

    _onEdited = (e) => {

        let numEdited = 0;
        e.layers.eachLayer( (layer) => {
            numEdited += 1;
        });
        console.log(`_onEdited: edited ${numEdited} layers`, e);

        this._onChange();
    }

    _onCreated = (e) => {
        let type = e.layerType;
        let layer = e.layer;
        if (type === 'marker') {
            // Do marker specific actions
            console.log("_onCreated: marker created", e);
        }
        else {
            console.log("_onCreated: something else created:", type, e);
        }
        // Do whatever else you need to. (save to db; etc)

        this._onChange();
    }

    _onDeleted = (e) => {

        let numDeleted = 0;
        e.layers.eachLayer( (layer) => {
            numDeleted += 1;
        });
        console.log(`onDeleted: removed ${numDeleted} layers`, e);

        this._onChange();
    }

    _onMounted = (drawControl) => {
        console.log('_onMounted', drawControl);
    }

    _onEditStart = (e) => {
        console.log('_onEditStart', e);
    }

    _onEditStop = (e) => {
        console.log('_onEditStop', e);
    }

    _onDeleteStart = (e) => {
        console.log('_onDeleteStart', e);
    }

    _onDeleteStop = (e) => {
        console.log('_onDeleteStop', e);
    }

    render() {
        return (
            <Map
                ref={this.mapRef}
                style={{height: "calc(100vh - 35px)", width: "100%"}}
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
                <LocateControl options={locateOptions} startDirectly/>
                <FeatureGroup ref={ (reactFGref) => {
                    this._onFeatureGroupReady(reactFGref)}}>
                    {this.state.locationPolyCoords && this.state.locationPolyCoords.length > 0 ?
                        <React.Fragment>
                            <Polyline key={"polyline"}
                                      positions={this.state.locationPolyCoords}
                                      color={this.state.subjective ? this.state.subjective : defaultSubjectiveValue}
                                      weight={this.state.objective ? this.state.objective : defaultObjectiveValue}
                            />

                        </React.Fragment>

                        :null
                    }
                    <EditControl
                        position='topright'
                        draw={{
                            rectangle: false,
                            polygon: false,
                            circlemarker: false,
                            circle: false,
                            marker: false,
                            polyline: {
                                shapeOptions:  {
                                    color: this.state.subjective,
                                    weight: this.state.objective,
                                    opacity: 1
                                }}
                        }}

                        edit={{
                        }}
                        onChange={this._onChange}
                        onCreated={this._onCreated}
                        onMounted={this._onMounted}
                        onEditStart={this._onEditStart}
                        onEditStop={this._onEditStop}
                        onEdited={this._onEdited}
                        onDeleteStart={this._onDeleteStart}
                        onDeleteStop={this._onDeleteStop}
                        onDeleted={this._onDeleted}
                    />
                </FeatureGroup>
            </Map>
        );
    }
}

CustomMap.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(
    mapStateToProps,
    { loginUser, updateUser }
)(CustomMap);