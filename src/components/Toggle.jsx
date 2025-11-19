import React from 'react';
import { useGlobalContext } from '../context';

const Toggle = () => {
  const { greeting } = useGlobalContext();
  return <h2>{`${greeting} Toggle World`}</h2>;
};

export default Toggle;
