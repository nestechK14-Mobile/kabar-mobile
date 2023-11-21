import * as React from 'react';
import Svg, { G, Path, Defs } from 'react-native-svg';

const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={38} height={42} fill="none" {...props}>
    <G filter="url(#a)">
      <Path
        fill="#000"
        d="M12 26.25h14v-6.969c0-3.883-3.134-7.031-7-7.031s-7 3.148-7 7.031v6.969Zm7-16c4.97 0 9 4.043 9 9.031v8.969H10v-8.969c0-4.988 4.03-9.031 9-9.031Zm-2.5 19h5a2.5 2.5 0 0 1-5 0Z"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default SvgComponent;
