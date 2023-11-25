import { StyleSheet } from 'react-native';
import { FONTS } from '@/assets';
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
  }
});

export default styles;
