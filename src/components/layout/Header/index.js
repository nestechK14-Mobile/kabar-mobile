import { View, StyleSheet } from 'react-native';
import React from 'react';
import { AppButton } from '@/components/common';
import { IC_Back, IC_MenuOption } from '@/assets';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '@/constants';

const Header = ({ onLeftPress, onRightPress }) => {
  const navigation = useNavigation();
  const onBack = () => {
    navigation.goBack();
    // ký tự ?. => kiểm tra onLeftPress có truyền vào hay không
    onLeftPress && typeof onLeftPress === 'function' && onLeftPress?.();
  };

  const _onRightPress = () => {
    onRightPress && typeof onRightPress === 'function' && onRightPress?.();
  };

  return (
    <View style={styles.container}>
      <AppButton onPress={onBack}>
        <IC_Back style={{ color: COLORS.BLACK }} />
      </AppButton>
      <AppButton onPress={_onRightPress}>
        <IC_MenuOption />
      </AppButton>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
