import { scale } from '@/utils';
import * as React from 'react';
import Svg, { Circle, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={scale(24)}
    height={scale(24)}
    fill="none"
    {...props}>
    <Circle cx={12} cy={12} r={12} fill="#EEF1F4" />
    <G clipPath="url(#a)">
      <Path
        fill="#4E4B66"
        d="m14.175 10.65-.825-.825-5.433 5.434v.824h.825l5.433-5.433Zm.824-.825.825-.824L15 8.176 14.175 9l.824.824ZM9.226 17.25H6.75v-2.475l7.837-7.837a.583.583 0 0 1 .825 0l1.65 1.65a.584.584 0 0 1 0 .825L9.225 17.25Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M5 5h14v14H5z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;
