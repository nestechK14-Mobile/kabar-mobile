import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={16} height={17} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#C30052"
        d="M8 15.167A6.667 6.667 0 1 1 8 1.834a6.667 6.667 0 0 1 0 13.333Zm0-1.334A5.333 5.333 0 1 0 8 3.166a5.333 5.333 0 0 0 0 10.667ZM7.333 10.5h1.334v1.333H7.333V10.5Zm0-5.333h1.334v4H7.333v-4Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 .5h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;
