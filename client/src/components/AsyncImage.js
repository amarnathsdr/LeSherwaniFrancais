import React from "react";
import styled from "styled-components";

const Image = styled.img``;

class AsyncImage extends React.Component {
  state = { loaded: false };

  render() {
    const { source, placeholder, className } = this.props;
    return (
      <React.Fragment>
        <Image src={source} onLoad={this.onLoad} className={className} />
        {!this.state.loaded && (
          <Image src={placeholder} className={className} />
        )}
      </React.Fragment>
    );
  }

  onLoad = () => {
    this.setState(() => ({ loaded: true }));
  };
}

export default AsyncImage;
