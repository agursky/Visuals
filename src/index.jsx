import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from './components/dialog';
import data from './data';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentArtist: 'Van Gogh', 
            view: false
        };
        this.chooseArtist = this.chooseArtist.bind(this);
        this.toggleViewStatus = this.toggleViewStatus.bind(this);
    }
    
    toggleViewStatus() {
        this.setState({view: !(this.state.view)});
        console.log(this.state.view);
    }
    
    getArtists() {
        var artists = Object.keys(this.props.imgData);
        console.log(artists);
        return artists;
    }
    
//    chooseArtist(str) {
//        this.setState({currentArtist: str, view: false});
//        console.log(str);
//    }
    
    render() {
        return (
            <div>
                <div>
                    {this.props.imgData[this.state.currentArtist].lg.map(function(item, ind) {
                     return <img key={ind} src={item} />
                    })}
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App imgData={data} />, document.getElementById('root'));