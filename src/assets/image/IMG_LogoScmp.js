import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={71} height={70} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M70.5 35c0 19.33-15.67 35-35 35S.5 54.33.5 35s15.67-35 35-35 35 15.67 35 35Z"
    />
    <Path
      fill="#FEFEFE"
      fillRule="evenodd"
      d="M15.083 49.551h42.902V17.5H15.083v32.051Z"
      clipRule="evenodd"
    />
    <Path
      fill="#FFCA05"
      fillRule="evenodd"
      d="M18.785 45.963h15.89V21.086h-15.89v24.877Z"
      clipRule="evenodd"
    />
    <Path
      fill="#001246"
      fillRule="evenodd"
      d="M38.393 45.963h15.893V21.086H38.393v24.877Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
