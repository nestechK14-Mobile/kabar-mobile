import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
    <Path
      fill="#4E4B66"
      d="M3.828 7H16v2H3.828l5.364 5.364-1.414 1.414L0 8 7.778.222l1.414 1.414L3.828 7Z"
    />
  </Svg>
);
export default SvgComponent;
