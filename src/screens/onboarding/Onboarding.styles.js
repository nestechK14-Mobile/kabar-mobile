import { FONTS } from '@/assets';
import { COLORS } from '@/constants';
import { DEVICE, scale } from '@/utils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE
  },
  topContainer: {
    flex: 1
  },
  bodyContainer: {
    paddingHorizontal: scale(16),
    height: '30%'
  },
  rowDotSlider: {
    flexDirection: 'row',
    width: '10%',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  dotDefault: {
    width: scale(10),
    height: scale(10),
    backgroundColor: COLORS.GRAY,
    borderRadius: scale(10)
  },
  dotActive: {
    width: scale(10),
    height: scale(10),
    backgroundColor: COLORS.BLUE_CRAYOLA,
    borderRadius: scale(10)
  },
  containerBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: scale(16)
  },
  rowButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  content: {
    fontSize: scale(20),
    fontFamily: FONTS.BOLD,
    lineHeight: scale(36)
  },
  subContent: {
    fontSize: scale(14),
    fontFamily: FONTS.REGULAR,
    lineHeight: scale(24),
    color: COLORS.GRAY
  },
  buttonBack: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(10),
    paddingVertical: scale(12),
    paddingHorizontal: scale(10)
  },
  buttonNext: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(10),
    backgroundColor: COLORS.BLUE_CRAYOLA,
    paddingVertical: scale(12),
    paddingHorizontal: scale(24)
  },
  titleButtonBack: {
    color: COLORS.GRAY,
    fontSize: scale(16),
    fontFamily: FONTS.SEMIBOLD
  },
  titleButtonNext: {
    color: COLORS.WHITE,
    fontSize: scale(16),
    fontFamily: FONTS.SEMIBOLD
  },
  titleButtonDisabled: {
    color: 'gray',
    fontSize: scale(16),
    fontFamily: FONTS.SEMIBOLD
  },
  itemImage: {
    resizeMode: 'contain'
  },
  containerItemImage: {
    width: DEVICE.WIDTH
  }
});

export default styles;
