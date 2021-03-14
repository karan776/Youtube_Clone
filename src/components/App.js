import React from "react";
import SearchBar from "./SearchBar"
import Youtube from "../api/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
class App extends React.Component {

    state = {videos: [],selectedVideo:null};

componentDidMount() { 
    this.onTermSubmit("react");
}
 onTermSubmit = async (term) => {
 const Response = await Youtube.get("/search",{ params: {
     q:term
    }
 })

  this.setState(
      {videos: Response.data.items,
      selectedVideo: Response.data.items[0]
    });

  
 }  ;
    onSelectVideo = (video) => {
        this.setState({selectedVideo:video});
        
    };
    render() {
        return (<div className = "ui container" >
            <SearchBar onFormSubmit = {this.onTermSubmit} />
            <div className = "ui grid">
                <div className = "ui row">
                    <div className = "eleven wide column"><VideoDetail video={this.state.selectedVideo} /></div>
                    <div className= "five wide column"><VideoList onSelectVideo={this.onSelectVideo} videos={this.state.videos} /></div>
            </div>
            </div>
           </div>);
    }
}

export default App;