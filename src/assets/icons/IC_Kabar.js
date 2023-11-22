import { scale } from '@/utils';
import * as React from 'react';
import Svg, { Rect, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={108} height={108} fill="none" {...props}>
    <Rect width={scale(108)} height={scale(108)} fill="#1877F2" rx={10} />
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="M80.25 91.5h-52.5A11.25 11.25 0 0 1 16.5 80.25v-60a3.75 3.75 0 0 1 3.75-3.75h52.5a3.75 3.75 0 0 1 3.75 3.75v45h15v15A11.25 11.25 0 0 1 80.25 91.5ZM76.5 72.75v7.5a3.75 3.75 0 0 0 7.5 0v-7.5h-7.5ZM69 84V24H24v56.25A3.75 3.75 0 0 0 27.75 84H69ZM31.5 35.25h30v7.5h-30v-7.5Zm0 15h30v7.5h-30v-7.5Zm0 15h18.75v7.5H31.5v-7.5Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M9 9h90v90H9z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;
