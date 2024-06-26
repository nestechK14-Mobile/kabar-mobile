import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={71} height={70} fill="none" {...props}>
    <Mask
      id="a"
      width={71}
      height={70}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha'
      }}>
      <Circle cx={35.5} cy={35} r={35} fill="#C00" />
    </Mask>
    <G mask="url(#a)">
      <Circle cx={35.5} cy={35} r={35} fill="#C00" />
      <Circle cx={35.5} cy={35} r={25} fill="#fff" />
      <Path
        fill="#C00"
        d="M6.5 6v58h58V6h-58Zm20.839 32.712V28.373c0-3.89 5.029-5.758 7.69-1.237.193.326 4.384 7.545 4.384 7.545v-6.307c0-3.891 5.026-5.76 7.687-1.238.193.326 4.384 7.545 4.384 7.545V24.575h2.508v16.967a.51.51 0 0 1-.365.517c-.265.073-.546-.092-.751-.44a2588.41 2588.41 0 0 1-4.224-7.281l-3.76-6.474c-.528-.895-1.313-1.052-1.871-.9a1.506 1.506 0 0 0-1.1 1.482v13.096a.512.512 0 0 1-.365.517c-.268.073-.548-.092-.751-.44-.037-.06-2.016-3.47-3.928-6.766-2.436-4.2-4.035-6.956-4.06-6.997-.526-.896-1.314-1.05-1.877-.899a1.508 1.508 0 0 0-1.102 1.482v12.82a.701.701 0 0 1-.658.655h-6.508a6.921 6.921 0 0 1 0-13.843h3.384v2.504H22.7a4.417 4.417 0 1 0 0 8.835h3.947a.686.686 0 0 0 .69-.698Zm30.153 2.912c0 3.89-5.03 5.759-7.69 1.24-.191-.326-4.384-7.547-4.384-7.547v6.307c0 3.89-5.027 5.759-7.687 1.24-.194-.326-4.384-7.547-4.384-7.547v5.947c0 2.7-1.603 4.161-4.109 4.161h-6.56a10.426 10.426 0 0 1 0-20.85h3.383v2.503h-3.384a7.922 7.922 0 1 0 0 15.844h6.503a1.692 1.692 0 0 0 1.658-1.656v-12.82a.507.507 0 0 1 .365-.515c.266-.072.546.092.752.44l4.057 6.991c2.359 4.068 3.908 6.738 3.927 6.767.53.894 1.318 1.051 1.88.897a1.504 1.504 0 0 0 1.098-1.484V28.448a.509.509 0 0 1 .36-.517c.263-.072.541.092.744.44l7.987 13.765c.413.701.989.95 1.489.95A1.506 1.506 0 0 0 55 41.542V24.574H57.5l-.007 17.05Z"
      />
    </G>
  </Svg>
);
export default SvgComponent;
