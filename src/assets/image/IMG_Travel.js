import * as React from 'react';
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={71}
    height={70}
    fill="none"
    {...props}>
    <Path fill="url(#a)" d="M.5 0h93.516v70H.5z" />
    <Defs>
      <Pattern id="a" width={1} height={1} patternContentUnits="objectBoundingBox">
        <Use xlinkHref="#b" transform="matrix(.00042 0 0 .00057 -.03 0)" />
      </Pattern>
      <Image
        id="b"
        width={2500}
        height={1767}
      />
    </Defs>
  </Svg>
);
export default SvgComponent;