import { scale } from '@/utils';
import * as React from 'react';
import Svg, { Rect, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} fill="none" {...props}>
    <Rect width={scale(50)} height={scale(50)} fill="#1877F2" rx={6} />
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="M14.923 22.37c-.51-.205-.504-.51.034-.689l19.086-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.475.553-.717.07L24 26l-9.077-3.63Zm4.89-.2 5.636 2.255 3.04 6.082 3.546-12.41-12.223 4.073h.001Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M13 13h24v24H13z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;
