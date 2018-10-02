import React, { Component } from 'react';
import logo from '../static/img/logo-doggy.svg';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {pictures: []};
    }

    componentDidMount() {
        fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c22d48140f5ca304816ef08963e4e4fe&tags=dogs&page=1&format=json&nojsoncallback=1')
            .then((response) => response.json())
            .then((results) => {
                let picArray = results.photos.photo.map((pic) => {
                    const srcPath =
                    `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`
                    return (
                        <img alt='dog' src={srcPath} />
                    )
                })
                this.setState({ pictures: picArray })
            })
    }


    render() {
        console.log('to:', this.state.pictures.length)
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
            <div className="App-intro">
              {this.state.pictures}
            </div>

          </div>
        );
    }
}

export default App;
