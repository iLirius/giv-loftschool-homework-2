import React, { Component } from "react";
import NewsPost from "./components/NewsPost/";
import "./App.css";

class App extends Component {
  state = {
    news: [],
    newsInput: ""
  };

  handleChange = event => {
    var value = event.target.value;
    this.setState({ newsInput: value });
  };

  handleKeyDown = event => {
    if (event.keyCode === 13) {
      const id = this.state.news.length;
      const { newsInput, news } = this.state;
      const newNews = { id: id, text: newsInput };
      this.setState({ newsInput: "", news: [...news, newNews] });
    }
  };

  render() {
    const { news, newsInput } = this.state;
    return (
      <div className="App">
        <input
          type="text"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          className="input"
          value={newsInput}
        />
        <div>
          {news.map(post => <NewsPost key={post.id} text={post.text} />)}
        </div>
      </div>
    );
  }
}

export default App;
