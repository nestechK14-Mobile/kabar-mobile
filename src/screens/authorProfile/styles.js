import { COLORS } from '@/constants';
import { scale } from '@/utils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    marginTop: scale(24)
  },
  authorContent: {
    flexDirection: 'row',
    marginTop: scale(12)
  },
  contentAuthor: { flex: 3, flexDirection: 'row', marginLeft: scale(16) },
  wrapAuthorContent: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  },
  containerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: scale(12),
    marginHorizontal: scale(16)
  },
  buttonDefault: {
    backgroundColor: COLORS.BLUE_CRAYOLA,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(12),
    paddingVertical: scale(12),
    marginHorizontal: scale(16)
    // flexDirection: 'row'
  },
  titleButtonDefault: {
    color: COLORS.WHITE,
    fontWeight: '500'
  }
});

export default styles;
