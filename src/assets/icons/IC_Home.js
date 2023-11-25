import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#4E4B66"
        d="M13 19.5h6v-9.022l-7-5.444-7 5.444V19.5h6v-6h2v6Zm8 1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.99a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20.5Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 .5h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default React.memo(SvgComponent);
