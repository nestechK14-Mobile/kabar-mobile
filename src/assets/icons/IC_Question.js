import { scale } from '@/utils';
import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
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
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16.001A8 8 0 0 0 12 20Zm-1-5h2v2h-2v-2Zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.5 3.5 0 1 1 13 13.355Z"
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
