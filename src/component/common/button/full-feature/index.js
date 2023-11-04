import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './style';
import { FONTS } from '@/assets';
const ButtonFullFeature = props => {
  const  {
    IconLeft,
    IconRight,
    IconRightColor,
    IconLeftColor,
    LabelText = 'label',
    // LabeTextFont,
    // LabeTextdWeight,
    // LabeTextSize,
    buttoncolor,
    bordercolor,
    textColor,
    iconLeftSize,
    iconRightSize
    
  } = props;
  return (
    
    <TouchableOpacity >
      <View
        style={[
          styles.ButtonDefault,
          { backgroundColor: buttoncolor },
          { borderColor: bordercolor }
        ]}>

        <View>

        <IconLeft width={iconLeftSize} height={iconLeftSize} fill={IconLeftColor} /> 
        </View>
        
        <Text style={{ paddingHorizontal:10, fontFamily: FONTS.POPPINS_MEDIUM, fontWeight: 700, fontSize: 20 , color: textColor }}>
          {LabelText}
        </Text>
        <IconRight IconRight width={iconRightSize} height={iconRightSize}fill={IconRightColor} />
        
      
       
      </View>
    </TouchableOpacity>
  );
};

export default ButtonFullFeature;
