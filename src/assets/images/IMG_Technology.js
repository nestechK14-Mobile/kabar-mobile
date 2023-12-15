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
    <Path fill="url(#a)" d="M-26.722-3.972H87.793v76.288H-26.722z" />
    <Defs>
      <Pattern id="a" width={1} height={1} patternContentUnits="objectBoundingBox">
        <Use xlinkHref="#b" transform="matrix(.00026 0 0 .0004 0 0)" />
      </Pattern>
      <Image
        id="b"
        width={3840}
        height={2560}
      />
    </Defs>
  </Svg>
);
export default SvgComponent;