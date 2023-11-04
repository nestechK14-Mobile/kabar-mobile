
import ButtonFullFeature from '../full-feature';
import { View,Text} from 'react-native';
import React from 'react';
import { COLORS } from '@/constants';
import { IC_ArrowDown, IC_Back, IC_Plus } from '@/assets';

const ButtonPrimaryDefaut = props => {
    const {Label} = props;
  return (
<View>
<ButtonFullFeature
      IconLeft = {IC_ArrowDown} 
      IconRight = {IC_Plus}
      LabelText = {Label}
      //LabelTextFont = {FONTS.BLACK}
      //LabelTextSize = {Number('60')}
      //LabelTextWeight = {'700'}
      textColor = {COLORS.BLACK}
      IconLeftColor = {COLORS.PRIMARY_BLUE}
      IconRightColor = {'yellow'}
      bordercolor = {'#70676EF0'}
      //buttoncolor = {COLORS.PRIMARY_BLUE}
      //buttoncolor = {'#B4ADB2F0'}
      iconLeftSize = "30"
      iconRightSize = "30"
      
      />
</View>
    
  
  );
};

export default ButtonPrimaryDefaut;

/* !!!: 

<ButtonFullFeature
    LabelText = {'Label'}
    buttoncolor = {COLORS.PRIMARY_BLUE}
    textColor = {COLORS.WHITE}
    />









    <ButtonFullFeature
      IconLeft = {IC_Back}
      IconRight = {IC_Send}
      LabelText = {'Label1'}
      //LabelTextFont = {FONTS.BLACK}
      //LabelTextSize = {Number('60')}
      //LabelTextWeight = {'700'}
      textColor = {COLORS.BLACK}
      IconLeftColor = {'pink'}
      IconRightColor = {'green'}
      bordercolor = {'#70676EF0'}
      //buttoncolor = {COLORS.PRIMARY_BLUE}
      //buttoncolor = {'#B4ADB2F0'}
      iconLeftSize = "20"
      iconRightSize = "20"
      
      />
*/