import React, { Component } from "react";
import Comment from "../Comment";
import "./NewsPost.css";

class NewsPost extends Component {
  state = {
    comments: [],
    commentInput: ""
  };

  handleChange = event => {
    var value = event.target.value;
    this.setState({ commentInput: value });
  };
  handleKeyDown = event => {
    if (event.keyCode === 13) {
      const id = this.state.comments.length;
      const { comments, commentInput } = this.state;
      const newComment = { id: id, text: commentInput };
      this.setState({
        commentInput: "",
        comments: [...comments, newComment]
      });
    }
  };

  handleDelete = commentId => {
    this.setState({
      comments: this.state.comments.filter(
        comment => (comment.id !== commentId ? true : false)
      )
    });
  };

  render() {
    const { text } = this.props;
    const { comments, commentInput } = this.state;
    return (
      <div className="news-post">
        <input
          type="text"
          className="comment-input"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          value={commentInput}
        />
        <p>{text}</p>
        <div>
          {comments.map(comment => (
            <Comment
              key={comment.id}
              id={comment.id}
              onDelete={this.handleDelete}
              text={comment.text}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default NewsPost;
