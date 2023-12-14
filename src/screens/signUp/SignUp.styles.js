import { FONTS } from '@/assets';
import { COLORS } from '@/constants';
import { scale } from '@/utils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE
  },
  headerContainer: {
    flex: 1,
    padding: scale(24),
    marginBottom: scale(49)
  },
  bodyContainer: {
    flex: 1,
    paddingHorizontal: scale(24)
  },
  titleHeader: {
    color: COLORS.BLUE_CRAYOLA,
    fontFamily: FONTS.BOLD,
    fontSize: scale(48)
  },
  contentHeader: {
    color: COLORS.GRAY,
    fontFamily: FONTS.REGULAR,
    fontSize: scale(20)
  }
});

export default styles;
