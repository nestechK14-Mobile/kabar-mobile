import { scale } from '@/utils';
import * as React from 'react';
import Svg, { Rect, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} fill="none" {...props}>
    <Rect width={scale(64)} height={scale(64)} fill="#1877F2" rx={6} />
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="M26.455 39 22 42.5V24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H26.455Zm-.692-2H40V25H24v13.385L25.763 37ZM31 30h2v2h-2v-2Zm-4 0h2v2h-2v-2Zm8 0h2v2h-2v-2Z"
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
