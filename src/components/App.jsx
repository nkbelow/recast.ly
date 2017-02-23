class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      videoInPlayer: exampleVideoData[0]
    };
  }
  setVideo(video) {
    this.setState({
      videoInPlayer: video
    });
  }
  getVideos(data) {
    this.setState({
      videos: data,
      videoInPlayer: data[0]
    });
  }
  componentDidMount() {
    this.props.searchYouTube({key: YOUTUBE_API_KEY, query: 'hello', max: 5 }, this.getVideos.bind(this));
  }
  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.videoInPlayer}/>
        </div>
        <div className="col-md-5">
          <VideoList callbackApp={this.setVideo.bind(this)} videos={this.state.videos}/>
        </div>
      </div>
  );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
