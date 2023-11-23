import { scale } from '@/utils';
import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={scale(14)}
    height={scale(14)}
    fill="none"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#4E4B66"
        d="M6.417 11.667.583 7l5.834-4.667V5.25a5.833 5.833 0 0 1 5.814 6.306 5.252 5.252 0 0 0-4.465-2.803l-.183-.003H6.417v2.917ZM5.25 7.584h2.353l.203.004c.75.025 1.472.18 2.144.446a4.657 4.657 0 0 0-3.533-1.617H5.25V4.76L2.451 7 5.25 9.24V7.583Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h14v14H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;
