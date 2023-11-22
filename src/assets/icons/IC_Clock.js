import { scale } from '@/utils';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={scale(12)}
    height={scale(12)}
    fill="none"
    {...props}>
    <Path
      fill="#4E4B66"
      d="M6 11.833A5.833 5.833 0 1 1 6 .167a5.833 5.833 0 0 1 0 11.666Zm0-1.166a4.667 4.667 0 1 0 0-9.333 4.667 4.667 0 0 0 0 9.333ZM6.583 6h2.334v1.167h-3.5V3.083h1.166V6Z"
    />
  </Svg>
);
export default SvgComponent;
