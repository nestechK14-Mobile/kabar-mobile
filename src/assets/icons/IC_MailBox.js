import { scale } from '@/utils';
import * as React from 'react';
import Svg, { Rect, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} fill="none" {...props}>
    <Rect width={scale(64)} height={scale(64)} fill="#1877F2" rx={6} />
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="M23 23h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H23a1 1 0 0 1-1-1V24a1 1 0 0 1 1-1Zm17 4.238-7.928 7.1L24 27.216V39h16V27.238ZM24.511 25l7.55 6.662L39.502 25H24.511Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M20 20h24v24H20z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;
