import { FONTS } from '@/assets';
import { COLORS } from '@/constants';
import { DEVICE, scale } from '@/utils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE
  },
  bodyContainer: {
    paddingHorizontal: scale(16),
    marginTop: scale(12)
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
    flexWrap: 'wrap',
    marginBottom: scale(12)
  },
  rowButton: {
    flexDirection: 'row',
    width: '45%',
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
    backgroundColor: COLORS.GRAY,
    width: scale(85),
    paddingVertical: scale(12)
  },
  buttonNext: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(10),
    backgroundColor: COLORS.BLUE_CRAYOLA,
    width: scale(85),
    paddingVertical: scale(12)
  },
  titleButton: {
    color: COLORS.WHITE
  },
  itemImage: {
    resizeMode: 'contain'
  },
  containerItemImage: {
    width: DEVICE.WIDTH
  }
});

export default styles;
