import React from 'react';
import styled, { keyframes } from 'styled-components';

const Slide = styled.div`
  background: rgba(255, 255, 255, .7);
  border-radius: 10px;
  width: 700px;
  color: black;
  margin: 0 auto;
  padding: 10px 0;
  font-size: 1.8em;
  position: relative;
  overflow: hidden
`;

const load = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
`;

const Loading = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 5px;
  background: red;
  width: 0%;
  animation: ${load} ${props => props.slideInterval}ms ease-in infinite;
`;

export default ({quote, slideInterval}) =>
  <Slide>
    <Loading slideInterval={slideInterval} />
    <blockquote><strong>"{ quote.text }"</strong></blockquote>
    <cite style={{float: "right"}}> par {quote.author}</cite>
  </Slide>
