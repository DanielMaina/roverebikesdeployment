import React from "react";
import "../assets/styles/FindStore.css";
import mapAsset from "../assets/images/google_map_api.svg";
import iconTruck from "../assets/icons/truck.svg";

import GoogleMapReact from "google-map-react";

class FindStore extends React.Component {
  stores = [
    {
      id: 1,
      name: "Islington - High Street",
      openUntil: "22:00",
      distance: "1.2 km",
      center: {
        lat: 45.52,
        lng: -73.54,
      },
    },
    {
      id: 2,
      name: "Pentonville Rd - A501",
      openUntil: "22:00",
      distance: "1.3 km",
      center: {
        lat: 43.71,
        lng: -79.37,
      },
    },
    {
      id: 3,
      name: "Rosebery Ave",
      openUntil: "22:00",
      distance: "2.1 km",
      center: {
        lat: 46.79,
        lng: -71.32,
      },
    },
  ];

  constructor() {
    super();
    this.state = {
      stores: this.stores,
      selectedStore: 1,
      map: {
        center: {
          lat: 45.52,
          lng: -73.54,
        },
        zoom: 11,
      },
    };
  }

  findStore(e) {
    this.showStoreOnMap(-1);
    this.setState((prevState, props) => {
      return {
        stores: this.stores.filter((store) => {
          return store.name
            .toLowerCase()
            .includes(e.target.value.toLowerCase());
        }),
      };
    });
  }

  showStoreOnMap(storeIndex) {
    this.setState((prevState, props) => {
      return { selectedStore: storeIndex };
    });
  }

  header() {
    return (
      <div className="search-store">
        <input
          type="text"
          className="input-store-query"
          placeholder="Find a store"
          onKeyUp={(e) => this.findStore(e)}
        />
      </div>
    );
  }

  results() {
    return (
      <div className="store-results">
        {this.state.stores.map((store, storeIndex) => {
          return (
            <div
              key={storeIndex}
              className={
                this.state.selectedStore === store.id
                  ? "store-row selected"
                  : "store-row"
              }
              onClick={() => this.showStoreOnMap(store.id)}
            >
              <h4>{store.name}</h4>
              <p>Open until {store.openUntil}</p>
              <p>{store.distance} away</p>
            </div>
          );
        })}
      </div>
    );
  }

  handleApiLoaded(map, maps) {
    // use map and maps objects
  }

  map() {
    return (
      <div style={{ height: "676px", width: "100%" }}>
        {
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyDuMO51marMNRTaW-39Eq2Rhti6vYz_0VU",
            }}
            center={
              this.state.selectedStore > 0
                ? this.stores.find(
                    (store) => store.id === this.state.selectedStore
                  ).center
                : {}
            }
            defaultCenter={this.state.map.center}
            defaultZoom={this.state.map.zoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) =>
              this.handleApiLoaded(map, maps)
            }
          ></GoogleMapReact>
        }
      </div>
    );
  }

  render() {
    return (
      <div className="stores">
        <div className="store-list">
          {this.header()}
          {this.results()}
        </div>
        <div className="store-map">
          {this.map()}
          <div className="map-message">
            <img src={iconTruck} alt="Free delivery Canada wide" />
            <span>Free delivery Canada wide</span>
          </div>
        </div>
      </div>
    );
  }
}

export default FindStore;
