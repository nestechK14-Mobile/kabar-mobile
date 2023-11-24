import { FONTS } from '@/assets';
import { COLORS, SIZES } from '@/constants';
import { scale } from '@/utils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textDefault: {
    color: COLORS.GRAY,
    fontSize: SIZES.FONT_SIZE.SMALL,
    fontFamily: FONTS.REGULAR,
    lineHeight: SIZES.LINE_HEIGHT.MEDIUM_XL
  },
  textActive: {
    color: COLORS.BLUE_CRAYOLA,
    fontSize: SIZES.FONT_SIZE.SMALL,
    fontFamily: FONTS.REGULAR,
    lineHeight: SIZES.LINE_HEIGHT.MEDIUM_XL
  },
  tabStyle: {
    paddingVertical: scale(4),
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      height: 10,
      width: 0
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  },
  tabContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;
