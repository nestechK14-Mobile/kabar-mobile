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
  },
  spacingInput: {
    marginBottom: scale(16)
  },
  bottomContainer: {
    flex: 1,
    paddingHorizontal: scale(24),
    marginTop: scale(16)
  },
  buttonSignUp: {
    backgroundColor: COLORS.BLUE_CRAYOLA,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: scale(13),
    borderRadius: scale(6)
  },
  titleSignUp: {
    color: COLORS.WHITE,
    fontSize: scale(16),
    fontFamily: FONTS.SEMIBOLD
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  errorContentStyle: {
    color: COLORS.RED_DARK,
    fontSize: scale(14),
    fontFamily: FONTS.REGULAR,
    marginHorizontal: scale(2),
    textAlign: 'center',
    textAlignVertical: 'center'
  }
});

export default styles;
