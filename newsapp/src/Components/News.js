import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  render() {
    return (
      <div className="container my-3 center">
        <h2 className="text-center">News - Top headlines</h2>
        <div className="row">
          <div className="col-md-4 my-3">
            <Newsitem title="first" descriptions="hello first news" />
          </div>
          <div className="col-md-4 my-3">
            <Newsitem title="first" descriptions="hello first news" />
          </div>
          <div className="col-md-4 my-3">
            <Newsitem title="first" descriptions="hello first news" />
          </div>
          <div className="col-md-4 my-3">
            <Newsitem title="first" descriptions="hello first news" />
          </div>
          <div className="col-md-4 my-3">
            <Newsitem title="first" descriptions="hello first news" />
          </div>
          <div className="col-md-4 my-3">
            <Newsitem title="first" descriptions="hello first news" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
