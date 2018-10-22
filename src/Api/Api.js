import React, { Component } from 'react';

import './Api.css';

class Api extends Component {
  state = {
    items: []
  }

  componentDidMount() {
    this.youtubeSearch(this.props.q)
      .then(({items}) => this.setState({items}))
  }

  youtubeSearch = async (q) => {
    const url = new URL('https://www.googleapis.com/youtube/v3/search');
    const params = {
      maxResults: this.props.maxResults,
      type: 'video',
      key: 'AIzaSyDjq7LZKhLGIdvFpqMa70uglprIPcKQ3a4',
      part: 'snippet',
      q,
    }
  
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
  
    const res = await fetch(url, {"mode": "cors"});
    const json = await res.json();
  
    return json;
  }

  render() {
    return (
      <div className="Api-masonry">
        {this.state.items.length > 0 && this.state.items.map(({
          kind,
          etag,
          id,
          snippet: {
            publishedAt,
            channelId,
            title,
            description,
            thumbnails = [],
            channelTitle,
            liveBroadcastContent,
          }
        }, index) => 
          <div key={index} className='block'>
            <img src={thumbnails.medium.url} alt={title} />
            <div className='inner'>
              <h1>{title}</h1>
              <span>{channelTitle}</span>
              <p>{description}</p>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Api;
