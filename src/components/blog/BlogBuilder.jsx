import React, { Fragment } from "react";
import { CodeBlock, vs2015 } from "react-code-blocks";

class BlogBuilder {
  list = [];

  constructor({ id, title, cover, description, publishedDate }) {
    this.id = id;
    this.title = title;
    this.cover = cover;
    this.description = description;
    this.publishedDate = publishedDate;
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
        <br />
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

  addCodeBlock = ({ language, code, caption }) => {
    this.list.push(
      <div className="my-3">
        <Fragment key={this.list.length}>
          <CodeBlock
            text={code}
            language={language}
            showLineNumbers={true}
            theme={vs2015}
          />
          {caption && (
            <figcaption className="figure-caption">{caption}</figcaption>
          )}
        </Fragment>
      </div>
    );
    return this;
  };

  addBr = () => {
    this.list.push(<br />);
    return this;
  };

  getBlog = () => {
    return <div className="container-lg">{this.list}</div>;
  };
}

export { BlogBuilder };
