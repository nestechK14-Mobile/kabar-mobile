import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={71} height={70} fill="none" {...props}>
    <Path
      fill="#FFF200"
      d="M70.5 35c0 19.33-15.67 35-35 35S.5 54.33.5 35s15.67-35 35-35 35 15.67 35 35Z"
    />
    <Path
      fill="#444745"
      d="M33.41 21.714h.703l.084-.309h-8.693l-.085.31h1.266c1.097 0 1.97.759 1.97 2.278 0 .844-.365 1.941-.956 3.264l-5.6 12.436-1.378-16.15c-.113-1.265.506-1.827 1.942-1.827h.815l.084-.311H11.324l-.113.31H12c.957 0 1.322.59 1.435 1.744L15.6 44.334h5.149l8.609-18.23c1.294-2.73 2.672-4.39 4.051-4.39Zm-1.014 22.733c-.787 0-1.266-.253-1.266-1.548 0-1.632.59-4.81 1.237-7.708.084 1.35 1.013 2.672 2.392 2.672.338 0 .62-.028.899-.084-1.268 5.515-1.771 6.668-3.262 6.668Zm24.505-10.973c1.632 0 2.673-1.35 2.673-2.87 0-1.294-.928-2.25-2.25-2.25-2.392 0-3.516 1.885-5.486 5.372-.42-2.167-1.405-5.008-3.938-5.008-2.84 0-6.105 4.052-9.116 6.555-1.35 1.125-2.869 1.856-4.08 1.856-1.237 0-1.968-1.267-1.968-3.488.873-3.63 1.35-4.587 2.701-4.587.93 0 1.323.535 1.323 1.632 0 1.152-.253 3.123-.76 5.57 1.35-.423 3.378-2.11 5.064-3.938-.899-2.138-2.812-3.602-5.598-3.602-5.147 0-9.65 4.613-9.65 9.79 0 3.574 2.533 6.274 6.5 6.274 6.555 0 9.285-5.683 9.285-9.622 0-.563-.028-.984-.085-1.491 1.014-1.097 2.308-2.138 3.377-2.138 1.21 0 2.166 3.039 3.123 7.625-.845.927-1.69 2.728-2.11 3.037-.17-1.632-1.239-2.644-2.673-2.644-1.604 0-2.73 1.519-2.73 2.813 0 1.463 1.013 2.42 2.335 2.42 2.786 0 3.574-2.645 5.318-4.98.535 2.503 1.773 4.979 3.91 4.979 2.533 0 4.896-2.167 6.105-3.714l-.224-.366c-.788.76-1.548 1.266-2.42 1.266-1.575 0-2.701-3.404-3.573-7.512.507-.703 1.322-2.475 1.885-3.094.395.731 1.21 2.11 3.068 2.11l-.006.005Z"
    />
  </Svg>
);
export default SvgComponent;
