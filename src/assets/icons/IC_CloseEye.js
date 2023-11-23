import { scale } from '@/utils';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={scale(22)}
    height={scale(22)}
    fill="none"
    {...props}>
    <Path
      fill="#4E4B66"
      d="M16.882 18.297A10.949 10.949 0 0 1 11 20C5.608 20 1.122 16.12.18 11a10.982 10.982 0 0 1 3.34-6.066L.393 1.808 1.807.393l19.799 19.8-1.415 1.414-3.31-3.31ZM4.935 6.35A8.965 8.965 0 0 0 2.223 11a9.005 9.005 0 0 0 13.2 5.838l-2.027-2.028A4.5 4.5 0 0 1 7.19 8.604L4.935 6.35Zm6.979 6.978-3.242-3.242a2.5 2.5 0 0 0 3.24 3.241l.002.001Zm7.893 2.264-1.431-1.43a8.934 8.934 0 0 0 1.4-3.162A9.006 9.006 0 0 0 8.553 4.338L6.974 2.76C8.22 2.27 9.58 2 11 2c5.392 0 9.878 3.88 10.819 9a10.946 10.946 0 0 1-2.012 4.592Zm-9.084-9.084a4.5 4.5 0 0 1 4.769 4.769l-4.77-4.769Z"
    />
  </Svg>
);
export default SvgComponent;