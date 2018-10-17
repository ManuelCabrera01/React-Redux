import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import souitCase from "../113-1136589_briefcase-icon-briefcase-emoji.png";
class Home extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1/posts")
      .then(res => {
        this.setState({
          posts: res.data.slice(0, 10)
        });
      });
  }

  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img className="image" src={souitCase} alt="a suitecase" />
            <div className="card-content">
              <Link to={"/" + post.id}>
                <span className="card-title">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center"> No posts yet</div>
    );
    return (
      <div className="container">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    );
    ("https://jsonplaceholder.typicode.com/todos/1");
  }
}
export default Home;
