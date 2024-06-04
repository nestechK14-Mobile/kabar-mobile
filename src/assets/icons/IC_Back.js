import { scale } from '@/utils';
import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={scale(16)}
    height={scale(16)}
    fill="none"
    {...props}>
    <Path
      fill="currentColor"
      d="M3.828 7H16v2H3.828l5.364 5.364-1.414 1.414L0 8 7.778.222l1.414 1.414L3.828 7Z"
    />
  </Svg>
);
export default SvgComponent;
