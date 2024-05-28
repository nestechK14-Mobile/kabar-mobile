import { StyleSheet, View } from 'react-native';
import React, { memo } from 'react';
import { Text } from '@/components';
import { scale } from '@/utils';
import { FONTS } from '@/assets';
import { COLORS } from '@/constants';

const AuthorContent = ({ title, subTitle }) => {
  console.log('re-render');
  return (
    <View style={styles.container}>
      <Text content={title ?? ''} textStyle={styles.title} />
      <Text content={subTitle ?? ''} textStyle={styles.subTitle} />
    </View>
  );
};

export default memo(AuthorContent);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1
  },
  title: {
    fontSize: scale(16),
    fontFamily: FONTS.BOLD,
    color: COLORS.BLACK,
    lineHeight: scale(24)
  },
  subTitle: {
    fontSize: scale(16),
    fontFamily: FONTS.SEMIBOLD,
    color: COLORS.GRAY,
    lineHeight: scale(24)
  }
});
