import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeatMap from './HeatMap';

class App extends Component {
  render() {
    return (
      <div className="is-dark">
      <div id="app" className="container">
        <section id="header" className="hero is-info">
          <div className="hero-body container has-text-centered">
            <h1 className="title">
            Psychic Fiesta
            </h1>
            <h2 className="subtitle">
            (it's a median income heatmap viewer)
            </h2>
          </div>
        </section>

        <HeatMap />

        {
          // ?latitude=42.456&longitude=-74.987&format=json
        }

        <footer className="footer">
            <div className="content has-text-centered">
              <p><strong>Psychic Fiesta</strong> uses data from <a href={this.props.endpoint}>{this.props.provider}</a>.</p>
            </div>
        </footer>
      </div>
      </div>
    );
  }
}

export default App;
