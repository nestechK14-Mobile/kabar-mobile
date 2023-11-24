import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#4E4B66"
        d="M6.17 18a3 3 0 0 1 5.66 0H22v2H11.83a3 3 0 0 1-5.66 0H2v-2h4.17Zm6-7a3 3 0 0 1 5.66 0H22v2h-4.17a3 3 0 0 1-5.66 0H2v-2h10.17Zm-6-7a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3 3 0 0 1-5.66 0H2V4h4.17ZM9 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-6 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
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
