import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import { memo } from 'react';
const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#1877F2"
        d="M12 2.5c5.52 0 10 4.48 10 10s-4.48 10-10 10-10-4.48-10-10 4.48-10 10-10ZM6.023 15.916c1.468 2.19 3.672 3.584 6.137 3.584 2.464 0 4.669-1.393 6.136-3.584A8.968 8.968 0 0 0 12.16 13.5a8.968 8.968 0 0 0-6.137 2.416ZM12 11.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 .5h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
