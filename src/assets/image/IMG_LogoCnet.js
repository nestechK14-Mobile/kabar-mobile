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
    <Circle cx={35.5} cy={35} r={35} fill="#fff" />
    <Circle cx={35.5} cy={35} r={35} fill="url(#a)" />
    <Defs>
      <Pattern id="a" width={1} height={1} patternContentUnits="objectBoundingBox">
        <Use xlinkHref="#b" transform="scale(.00195)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,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"
        id="b"
        width={512}
        height={512}
      />
    </Defs>
  </Svg>
);
export default SvgComponent;