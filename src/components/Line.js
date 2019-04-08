import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #289eda;
  height: 2px;
`;

export default class Line extends Component {
  render() {
    return <Wrapper />;
  }
}
