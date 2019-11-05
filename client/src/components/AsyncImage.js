import React from "react";
import styled from "styled-components";

const Image = styled.img``;

class AsyncImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  render() {
    const { source, placeholder, className } = this.props;
    const { loaded } = this.state;
    return (
      <React.Fragment>
        {!loaded ? <Image src={placeholder} className={className} /> : null}
        <Image
          style={!loaded ? { visibility: "hidden" } : {}}
          onLoad={() => this.setState({ loaded: true })}
          src={source}
          className={className}
        />
      </React.Fragment>
    );
  }
}

export default AsyncImage;
