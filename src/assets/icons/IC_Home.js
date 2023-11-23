import { scale } from '@/utils';
import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={scale(70)}
    height={scale(70)}
    fill="none"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#1877F2"
        d="M44 30.5a1 1 0 0 1-1 1H27a1 1 0 0 1-1-1V19.99a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V30.5Zm-10-7v6h2v-6h-2Z"
      />
    </G>
    <Path
      fill="#1877F2"
      d="M22.096 43.742V53.5h-1.274v-4.424h-4.97V53.5h-1.274v-9.758h1.274v4.284h4.97v-4.284h1.274Zm5.641 9.884a3.967 3.967 0 0 1-1.96-.49 3.562 3.562 0 0 1-1.372-1.386c-.326-.607-.49-1.307-.49-2.1 0-.784.168-1.475.504-2.072a3.507 3.507 0 0 1 1.4-1.386 3.995 3.995 0 0 1 1.974-.49c.728 0 1.386.163 1.974.49a3.44 3.44 0 0 1 1.386 1.372c.346.597.518 1.293.518 2.086 0 .793-.177 1.493-.532 2.1a3.605 3.605 0 0 1-1.414 1.386c-.597.327-1.26.49-1.988.49Zm0-1.12a2.69 2.69 0 0 0 1.288-.322c.402-.215.724-.537.966-.966.252-.43.378-.952.378-1.568 0-.616-.121-1.139-.364-1.568-.242-.43-.56-.747-.952-.952a2.61 2.61 0 0 0-1.274-.322c-.466 0-.896.107-1.288.322-.382.205-.69.523-.924.952-.233.43-.35.952-.35 1.568 0 .625.112 1.153.336 1.582.234.43.542.751.924.966.383.205.803.308 1.26.308Zm14.955-6.818c.598 0 1.13.126 1.596.378.467.243.836.611 1.106 1.106.271.495.406 1.097.406 1.806V53.5h-1.26v-4.34c0-.765-.19-1.349-.574-1.75-.373-.41-.882-.616-1.526-.616-.662 0-1.19.215-1.582.644-.392.42-.588 1.031-.588 1.834V53.5h-1.26v-4.34c0-.765-.19-1.349-.574-1.75-.373-.41-.882-.616-1.526-.616-.662 0-1.19.215-1.582.644-.392.42-.588 1.031-.588 1.834V53.5h-1.274v-7.672h1.274v1.106a2.53 2.53 0 0 1 1.008-.924c.43-.215.901-.322 1.414-.322.644 0 1.214.145 1.708.434.495.29.864.714 1.106 1.274.215-.541.57-.961 1.064-1.26a3.134 3.134 0 0 1 1.652-.448ZM55.01 49.37c0 .243-.014.5-.042.77h-6.132c.047.756.304 1.349.77 1.778.476.42 1.05.63 1.722.63.55 0 1.008-.126 1.372-.378.374-.261.635-.607.784-1.036h1.372a3.332 3.332 0 0 1-1.232 1.806c-.616.457-1.381.686-2.296.686-.728 0-1.381-.163-1.96-.49a3.493 3.493 0 0 1-1.344-1.386c-.326-.607-.49-1.307-.49-2.1 0-.793.159-1.489.476-2.086a3.308 3.308 0 0 1 1.33-1.372c.579-.327 1.242-.49 1.988-.49.728 0 1.372.159 1.932.476.56.317.99.756 1.288 1.316.308.55.462 1.176.462 1.876Zm-1.316-.266c0-.485-.107-.9-.322-1.246a2.026 2.026 0 0 0-.882-.798 2.63 2.63 0 0 0-1.218-.28c-.644 0-1.194.205-1.652.616-.448.41-.704.98-.77 1.708h4.844Z"
    />
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M23 10.5h24v24H23z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;
