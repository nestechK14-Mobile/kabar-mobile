import * as React from 'react';
import Svg, { Circle, Defs, Pattern, Use, Image } from 'react-native-svg';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={71}
    height={70}
    fill="none"
    {...props}>
    <Circle cx={35.5} cy={35} r={35} fill="#004DB3" />
    <Circle cx={35.5} cy={35} r={35} fill="url(#a)" />
    <Defs>
      <Pattern id="a" width={1} height={1} patternContentUnits="objectBoundingBox">
        <Use xlinkHref="#b" transform="matrix(.0031 0 0 .0031 .15 .148)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,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"
        id="b"
        width={225}
        height={225}
      />
    </Defs>
  </Svg>
);
export default SvgComponent;
