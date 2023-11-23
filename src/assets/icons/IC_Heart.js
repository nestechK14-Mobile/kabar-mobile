import { scale } from '@/utils';
import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={scale(14)}
    height={scale(14)}
    fill="none"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#4E4B66"
        d="M9.625 1.75c1.772 0 3.208 1.458 3.208 3.5 0 4.083-4.375 6.417-5.833 7.292-1.458-.875-5.833-3.209-5.833-7.292 0-2.042 1.458-3.5 3.208-3.5 1.085 0 2.042.583 2.625 1.167.583-.584 1.54-1.167 2.625-1.167Zm-2.08 9.102c.514-.324.977-.647 1.411-.992 1.74-1.382 2.71-2.893 2.71-4.61 0-1.377-.896-2.333-2.041-2.333-.628 0-1.307.332-1.8.825L7 4.566l-.825-.825c-.493-.492-1.172-.824-1.8-.824-1.132 0-2.042.966-2.042 2.333 0 1.717.972 3.228 2.71 4.61.434.345.898.668 1.412.992.175.11.347.216.545.333.198-.117.37-.223.545-.333Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h14v14H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;
