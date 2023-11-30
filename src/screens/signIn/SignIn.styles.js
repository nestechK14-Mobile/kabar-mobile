import { StyleSheet } from 'react-native';
import { FONTS } from '@/assets';
import { DEVICE, scale } from '@/utils';
import { COLORS } from '@/constants';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'left',
    paddingHorizontal: scale(16)
  },
  textdefault: {
    fontFamily: FONTS.REGULAR
  },
  containerCheckBox: {
    marginTop: 30,
    marginLeft: 30
  },
  titleCheckBox: {
    fontSize: 24,
    marginBottom: 20
  },
  backgroundIcon: {
    flexDirection: 'row',
    width: DEVICE.WIDTH,
    alignItems: 'center'
  },
  containerInputPassword: {
    marginTop: scale(8)
  },
  containerInputPasswordLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scale(4)
  },
  labelDefault: {
    fontsize: scale(14),
    fontFamily: FONTS.REGULAR,
    color:COLORS.BLACK
  },
  labelRequired: { color: COLORS.RED_DARK },
  containerInputPasswordBody: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    borderWidth: scale(1),
    paddingHorizontal: scale(8),
    borderRadius: scale(6),
    borderColor: COLORS.GRAY
  },
  containerInputPasswordBodyInput: {
    width: '90%',
    fontSize: scale(14),
    fontFamily: FONTS.REGULAR,
    color: COLORS.BLACK
  }
});

export default styles;
