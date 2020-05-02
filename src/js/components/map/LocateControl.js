import React, { Component } from "react";
import { withLeaflet } from "react-leaflet";
import Locate from "leaflet.locatecontrol";
import * as L from "leaflet";

class LocateControl extends Component {

    constructor(props) {
        super(props);
        this.state= {
            clicked: false
        }
    }

    componentDidMount() {
        const { options, startDirectly } = this.props;
        const { map } = this.props.leaflet;

        const lc = new Locate(options);

        lc.addTo(map);

        L.DomEvent.on(lc, "click", function(e){
            console.log(e)
        })



        if (startDirectly) {
            lc.start();
        }
    }

    render() {
        return null;
    }
}

export default withLeaflet(LocateControl);