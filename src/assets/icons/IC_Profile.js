import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import { memo } from 'react';
const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#4E4B66"
        d="M12 22.5c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10Zm-4.987-3.744A7.966 7.966 0 0 0 12 20.5a7.97 7.97 0 0 0 5.167-1.892A6.978 6.978 0 0 0 12.16 16.5a6.982 6.982 0 0 0-5.147 2.256ZM5.616 17.32a8.975 8.975 0 0 1 6.544-2.82 8.972 8.972 0 0 1 6.362 2.634 8 8 0 1 0-12.906.187v-.001ZM12 13.5a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
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
