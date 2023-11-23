import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */
const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={48} height={1} {...props}>
    <Path fill="#063855" fillRule="evenodd" d="M0 0h48v1H0z" />
  </Svg>
);
export default SvgComponent;
