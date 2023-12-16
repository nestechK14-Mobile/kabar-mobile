import { StyleSheet, Animated, View } from 'react-native';
import React from 'react';
import { COLORS } from '@/constants';
import { scale } from '@/utils';

const Paginator = ({ data, currentIndex }) => {
  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        return (
          <Animated.View
            style={[
              styles.indicator,
              {
                backgroundColor: currentIndex === i ? COLORS.BLUE_CRAYOLA : COLORS.GRAY
              }
            ]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  container: { flexDirection: 'row', flex: 0.3, justifyContent: 'center', alignItems: 'center' },
  indicator: {
    backgroundColor: COLORS.GRAY,
    height: scale(14),
    width: scale(14),
    marginHorizontal: scale(2),
    borderRadius: scale(28)
  }
});
