import React, { Fragment } from "react";

class BlogBuilder {
  list = [];

  constructor({ id, title, cover, description }) {
    this.id = id;
    this.title = title;
    this.cover = cover;
    this.description = description;
  }

  addParagraph = (props) => {
    this.list.push(
      <Fragment key={this.list.length}>
        <p className="lead">{props}</p>
      </Fragment>
    );
    return this;
  };

  addHeading = (props) => {
    this.list.push(
      <Fragment key={this.list.length}>
        <h1 className="">{props}</h1>
        <hr />
      </Fragment>
    );
    return this;
  };

  addHeadingTwo = (props) => {
    this.list.push(
      <Fragment key={this.list.length}>
        <h3 className="">{props}</h3>
      </Fragment>
    );
    return this;
  };

  addImage = ({ image, caption }) => {
    this.list.push(
      <Fragment key={this.list.length}>
        <div className="text-center my-3">
          <figure>
            <img
              src={image}
              alt={caption}
              width={"60%"}
              className="figure-image img-fluid"
            />
            <figcaption className="figure-caption">{caption}</figcaption>
          </figure>
        </div>
      </Fragment>
    );
    return this;
  };

  getBlog = () => {
    return <div className="container-lg">{this.list}</div>;
  };
}

export { BlogBuilder };
