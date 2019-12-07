import React, { Component } from "react";
import '../assets/css/player.css';

export default class Track extends Component {
  render() {
    return (
      <div className="hovereffect text-center">
        <img src={this.props.image} alt="" />
        <div className="overlay">
          <iframe width="100%" height="100%" scrolling="no" frameBorder="no" allow="autoplay"
            src={`https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/${this.props.track.id}?auto_play=false&show_artwork=false`}>
          </iframe>
          {/* <h2 onClick={() => this.props.onPlay(this.props.track.id)}><span className="fa fa-play"></span></h2> */}
          {/* <p className="icon-links">
            <a href="#">
              <span className="fa fa-twitter"></span>
            </a>
            <a href="#">
              <span className="fa fa-facebook"></span>
            </a>
            <a href="#">
              <span className="fa fa-instagram"></span>
            </a>
          </p> */}
        </div>
      </div>
    )
  }
}