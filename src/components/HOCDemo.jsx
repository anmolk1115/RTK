import React from 'react';
import WithHOC from './WithHOC';

const MyComponent = () => {
    return <div>Hello, World!</div>;
  };

const MyComponentWithLogging = WithHOC(MyComponent);

const HOCDemo = () => {
  return (
    <MyComponentWithLogging />
  )
}

export default HOCDemo;