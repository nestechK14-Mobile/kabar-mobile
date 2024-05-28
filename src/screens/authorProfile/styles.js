import { COLORS } from '@/constants';
import { scale } from '@/utils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: scale(16),
    paddingVertical: scale(24)
  },
  authorContent: {
    flexDirection: 'row'
  }
});

export default styles;
