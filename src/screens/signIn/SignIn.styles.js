import { StyleSheet } from 'react-native';
import { FONTS } from '@/assets';
import { DEVICE } from '@/utils';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    justifyContent: 'flex-start',
    paddingLeft: 24,
    alignItems: 'left'
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
  }
});

export default styles;
