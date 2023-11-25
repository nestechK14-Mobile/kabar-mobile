import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import { memo } from 'react';
const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#1877F2"
        d="M5 2.5h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.53l-7.234 4.536A.5.5 0 0 1 4 22.643V3.5a1 1 0 0 1 1-1Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 .5h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
