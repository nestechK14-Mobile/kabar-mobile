import { TYPE_BUTTON } from '@/constants';
import React, { memo } from 'react';
import { TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import AppText from '../AppText';

const AppButton = props => {
  const {
    type = TYPE_BUTTON.DEFAULT,
    children,
    IconLeft,
    IconRight,
    label = {},
    buttonStyle,
    ...rest
  } = props;

  const ButtonContent = () => {
    const LeftIcon = IconLeft && <IconLeft />;
    const RightIcon = IconRight && <IconRight />;
    return (
      <>
        {children ?? children?.()}
        {LeftIcon?.()}
        <AppText content={label.content} contentStyle={label.contentStyle} />
        {RightIcon?.()}
      </>
    );
  };

  const renderContent = type => {
    const { NOT_FEEDBACK, HIGHLIGHT } = TYPE_BUTTON;
    switch (type) {
      case NOT_FEEDBACK:
        return (
          <TouchableWithoutFeedback style={buttonStyle} {...rest}>
            {ButtonContent()}
          </TouchableWithoutFeedback>
        );

      case HIGHLIGHT:
        return (
          <TouchableHighlight style={buttonStyle} {...rest}>
            {ButtonContent()}
          </TouchableHighlight>
        );

      default:
        return (
          <TouchableOpacity style={buttonStyle} {...rest}>
            {ButtonContent()}
          </TouchableOpacity>
        );
    }
  };

  return <>{renderContent(type)}</>;
};

export default memo(AppButton);
