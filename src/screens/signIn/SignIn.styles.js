import { StyleSheet } from 'react-native';
import { DEVICE, scale } from '@/utils';
import { COLORS } from '@/constants';
import { FONTS } from '@/assets';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'left',
    paddingHorizontal: scale(16)
  },
  textDefault: {
    fontFamily: FONTS.REGULAR
  },
  containerCheckBox: {
    marginTop: scale(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
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
    fontSize: scale(14),
    fontFamily: FONTS.REGULAR,
    color: COLORS.BLACK
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
  },
  buttonLogin: {
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: scale(10),
    backgroundColor: '#1877F2'
  },
  containerBtnFbGg: {
    flexDirection: 'row',
    marginTop: scale(10),
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  btnFbGg: {
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEF1F4',
    width: scale(174),
    height: scale(48)
  },
  containerSignup: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles;
