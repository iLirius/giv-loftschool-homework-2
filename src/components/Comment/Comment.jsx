import React, { Component } from "react";
import "./Comment.css";

class Comment extends Component {
  handleDelete = () => {
    const { onDelete, id } = this.props;
    onDelete(id);
  };
  render() {
    const { text } = this.props;
    return (
      <div className="comment">
        <p className="comment-text">{text}</p>
        <span onClick={this.handleDelete} className="delete comment-delete">
          &times;
        </span>
      </div>
    );
  }
}

export default Comment;
