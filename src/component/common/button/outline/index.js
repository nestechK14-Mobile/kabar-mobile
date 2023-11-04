
import { Text, View } from 'react-native';
import React, { Component } from 'react';
import ButtonFullFeature from '../full-feature';
import {IC_ArrowDown, IC_Plus} from '@/assets/icons';
export class ButtonOutline extends Component {
  render() {
    return (
        <ButtonFullFeature
        IconLeft  = {IC_Bell}
        IconRight = {IC_Google}
        LabelText = {'Button label'}
        //LabelTextFont = {FONTS.BLACK}
        //LabelTextSize = {Number('60')}
        //LabelTextWeight = {'700'}
        textColor = {COLORS.BLACK}
        IconLeftColor = {'pink'}
        IconRightColor = {'green'}
        bordercolor = {'#70676EF0'}
        //buttoncolor = {COLORS.PRIMARY_BLUE}
        //buttoncolor = {'#B4ADB2F0'}
        iconLeftSize = "40"
        iconRightSize = "70"
        
        />
    );
  }
}

export default ButtonOutline;
