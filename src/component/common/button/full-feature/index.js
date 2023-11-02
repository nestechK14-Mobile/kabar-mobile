import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './style';
import { FONTS, IC_Bell } from '@/assets';
const ButtonFullFeature = props => {
  const {
    IconLeft,
    IconRight,
    IconRightColor,
    IconLeftColor,
    LabelText,
    LabeTextFont,
    LabeTextdWeight,
    LabeTextSize,
    buttoncolor,
    bordercolor,
    textColor,
    iconLeftSize,
    iconRightSize,
    
  } = props;
  return (
    
    <TouchableOpacity style = { { backgroundColor: buttoncolor }}>
      <View
        style={[
          styles.ButtonDefault,
         
          { borderColor: bordercolor }
        ]}>

        <View>
        <IconLeft width={iconLeftSize} height={iconLeftSize} fill={IconLeftColor} />
        </View>
        
        <Text style={{ paddingHorizontal:10, fontFamily: LabeTextFont, fontWeight: LabeTextdWeight, fontSize: LabeTextSize , color: textColor }}>
          {LabelText}
        </Text>
        <IconRight IconRight width={iconRightSize} height={iconRightSize}fill={IconRightColor} />
  
       
      </View>
    </TouchableOpacity>
  );
};

export default ButtonFullFeature;
