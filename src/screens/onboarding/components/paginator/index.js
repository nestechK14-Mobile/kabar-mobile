import { StyleSheet, Animated, View } from 'react-native';
import React from 'react';
import { COLORS } from '@/constants';
import { DEVICE, scale } from '@/utils';

const Paginator = ({ data, scrollX, currentIndex }) => {
  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * DEVICE.WIDTH, i * DEVICE.WIDTH, (i + 1) * DEVICE.WIDTH];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [scale(6), scale(10), scale(6)],
          extrapolate: 'clamp'
        });

        return (
          <Animated.View
            style={[
              styles.indicator,
              {
                height: dotWidth,
                width: dotWidth,
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
    height: scale(6),
    marginHorizontal: scale(4),
    borderRadius: scale(20)
  }
});
