import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getHereScripts } from '../utils';

class Here extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    const {
      platform: { appId, appCode },
      center,
      zoom,
      mapEvents,
      mapUi,
      traffic,
      incidents
    } = this.props;

    getHereScripts(() => {
      this.platform = new H.service.Platform({
        'app_id': appId,
        'app_code': appCode
      });

      // Obtain the default map types from the platform object:
      this.defaultLayers = this.platform.createDefaultLayers();

      // Instantiate (and display) a map object:
      this.map = new H.Map(this.refs.map, this.defaultLayers.normal.map, {
        zoom,
        center
      });

      if (mapEvents) {
        this.behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
      }

      // Create the default UI components
      if (mapUi) {
        this.ui = H.ui.UI.createDefault(this.map, this.defaultLayers);

        // Remove not needed settings control
        this.ui.removeControl('mapsettings');
      }

      // Show traffic tiles
      if (traffic) {
        this.map.setBaseLayer(this.defaultLayers.normal.traffic);
      }

      if (incidents) {
        this.map.addLayer(this.defaultLayers.incidents);
      }
    })
  }

  render() {
    return (
      <div ref='map' style={this.props.styles}></div>
    )
  }
}

Here.defaultProps = {
  platform: {
    appId: '',
    appCode: '',
    useCIT: true,
    useHTTPS: true
  },

  center: {
    lat: 39.8056548,
    lng: 39.3074268
  },

  styles: {
    width: '640px',
    height: '480px'
  },

  zoom: 10,
  mapEvents: true,
  mapUi: true,
  traffic: false,
  incidents: false
};

Here.propTypes = {
  platform: PropTypes.shape({
    appId: PropTypes.string,
    appCode: PropTypes.string,
    useCIT: PropTypes.bool,
    useHTTPS: PropTypes.bool
  }),

  center: PropTypes.shape({
    lng: PropTypes.number,
    lat: PropTypes.number
  }),

  styles: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string
  }),

  zoom: PropTypes.number,
  mapEvents: PropTypes.bool,
  mapUi: PropTypes.bool,
  traffic: PropTypes.bool,
  incidents: PropTypes.bool
}

export default Here
