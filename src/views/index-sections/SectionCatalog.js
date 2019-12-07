import React, { Component } from 'react';
import soundcloud from 'soundcloud';
import Track from 'components/Track';
import {
  Container,
  Row,
  Col,
} from "reactstrap";

export default class SectionCatalog extends Component {

  constructor() {
    super();
    this.state = {
      tracks: []
    };
  }

  componentDidMount() {
    soundcloud.get("/users/739928011/tracks")
      .then(tracks => {
        this.setState({
          tracks
        });
      });
  }

  play(trackId) {
    this.setState({
      trackId
    });
  }

  render() {
    return (
      <>
        <div className="section section-dark">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Discography</h2>
              </Col>
            </Row>
            <Row>
              {this.state.tracks.map((track) => {
                return (
                  <Col xl="4" md="6" ms="12" key={track.id}>
                    <Track image={track.artwork_url.replace("large", "t300x300")}
                      track={track}
                      onPlay={this.play.bind(this)} />
                  </Col>
                )
              })}
            </Row>
          </Container>
        </div>
      </>
    )
  }
}