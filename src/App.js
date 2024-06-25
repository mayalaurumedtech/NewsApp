import { Component } from 'react';
import './App.css';
import NavigatinBar from './component/NavigatinBar';
import News from './component/News';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 8;
  // apiKey = process.env.REACT_APP_NEWS_API
  apiKey = "240061d545d84592a2cb5eddc44b7879"

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <NavigatinBar />
          <LoadingBar
            height={5}
            color='#f11946'
            progress={this.state.progress}
          />
          <Switch>
            <Route exact path="/"> <News setProgress={this.setProgress} key="general" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="general" /> </Route>
            <Route exact path="/business"> <News setProgress={this.setProgress} key="business" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="business" /> </Route>
            <Route exact path="/entertainment"> <News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="entertainment" /> </Route>
            <Route exact path="/general"> <News setProgress={this.setProgress} key="general" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="general" /> </Route>
            <Route exact path="/health"> <News setProgress={this.setProgress} key="health" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="health" /> </Route>
            <Route exact path="/science"> <News setProgress={this.setProgress} key="science" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="science" /> </Route>
            <Route exact path="/sports"> <News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="sports" /> </Route>
            <Route exact path="/technology"> <News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="technology" /> </Route>
          </Switch>
        </Router>

      </div>
    );
  }
}


