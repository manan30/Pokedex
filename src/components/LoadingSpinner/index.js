import React from 'react';

import { DotWrapper, Dot } from './styled';

const LoadingSpinner = () => {
  return (
    <DotWrapper>
      <Dot delay="0s" />
      <Dot delay="0.1s" />
      <Dot delay="0.2s" />
    </DotWrapper>
  );
};

export default LoadingSpinner;
