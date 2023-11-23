import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import { scale } from '@/utils';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={scale(24)}
    height={scale(24)}
    fill="none"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#050505"
        d="M6 8V7a6 6 0 1 1 12 0v1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2Zm13 2H5v10h14V10Zm-8 5.732a2 2 0 1 1 2 0V18h-2v-2.268ZM8 8h8V7a4 4 0 1 0-8 0v1Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;
