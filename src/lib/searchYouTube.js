var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    type: 'GET',
    data: {
      type: 'video',
      key: options.key,
      q: options.query,
      maxResults: options.max,
      part: 'snippet',
      videoEmbeddable: 'true'
    },
    dataType: 'json',
    timeout: 5000,
    url: 'https://www.googleapis.com/youtube/v3/search',
    success: (data) => {
      callback(data.items);
    },
  });
};

window.searchYouTube = searchYouTube;
