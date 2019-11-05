import React from "react";
import styled from "styled-components";

const Image = styled.img``;

class AsyncImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };

    this.setLoadedTrue = this.setLoadedTrue.bind(this);
  }

  render() {
    const { source, placeholder, className } = this.props;
    const { loaded } = this.state;
    return (
      <React.Fragment>
        <Image
          src={source}
          onLoad={() => this.setLoadedTrue()}
          className={className}
        />
        {!loaded ? <Image src={placeholder} className={className} /> : null}
      </React.Fragment>
    );
  }

  setLoadedTrue = () => {
    this.setState({ loaded: true });
  };
}

export default AsyncImage;
