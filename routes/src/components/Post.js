import React, { Component } from "react";
import axios from "axios";
class Post extends Component {
  state = {
    post: null
  };
  componentDidMount() {
    let id = this.props.match.params.post_id;
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id)
      .then(resp => {
        this.setState({
          post: resp.data
        });
      })
      .catch(err => {});
  }
  render() {
    const post = this.state.post ? (
      <div className="post">
        <h4 className="center">{this.state.post.title}</h4>
        <p>{this.state.post.body}</p>
      </div>
    ) : (
      <div className="center">loading post... </div>
    );
    return <div className="container">{post}</div>;
  }
}
export default Post;
