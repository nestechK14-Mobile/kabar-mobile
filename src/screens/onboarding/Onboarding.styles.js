import { FONTS } from '@/assets';
import { COLORS } from '@/constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textDefault: {
    fontFamily: FONTS.REGULAR,
    color: COLORS.BLUE_CRAYOLA
  },
  content: {
    fontSize: 18
  }
});

export default styles;
