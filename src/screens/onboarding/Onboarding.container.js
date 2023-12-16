import React, { useRef, useState } from 'react';
import OnboardingView from './Onboarding.view';
import { useNavigation } from '@react-navigation/native';
import { PAGE_CONSTANTS, SCREENS_STACK } from '@/constants';
import { Alert, Animated } from 'react-native';
import { DEVICE } from '@/utils';

const OnboardingContainer = () => {
  const navigation = useNavigation();
  const { ONBOARDING } = PAGE_CONSTANTS;
  const { LIST_IMAGE } = ONBOARDING;
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const viewItemChange = useRef(({ viewableItems }) => {
    if (viewableItems && viewItemChange.length > 0) {
      setCurrentIndex(viewableItems[0]?.index);
    }
  })?.current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const slidesRef = useRef(null);

  const navigateToAuth = () => {
    navigation.navigate(SCREENS_STACK.AUTH_STACK);
  };

  const updateCurrentSlideIndex = e => {
    const contentOffset = e.nativeEvent.contentOffset.x;
    const currentIndexs = Math.round(contentOffset / DEVICE.WIDTH);
    setCurrentIndex(currentIndexs);
  };

  const pressNextImage = () => {
    const nextSlide = currentIndex + 1;
    if (nextSlide !== LIST_IMAGE.length) {
      const offset = nextSlide * DEVICE.WIDTH;
      slidesRef?.current?.scrollToOffset({ offset });
      setCurrentIndex(nextSlide);
    }
  };

  const pressBackImage = () => {
    const indexNow =
      currentIndex === LIST_IMAGE.length - 1
        ? currentIndex - 1
        : currentIndex === 0
        ? 0
        : currentIndex;
    if (indexNow !== LIST_IMAGE.length) {
      const offset = indexNow * DEVICE.WIDTH;
      slidesRef?.current?.scrollToOffset({ offset });
      setCurrentIndex(indexNow);
    }
  };

  return (
    <OnboardingView
      {...{
        navigateToAuth,
        listImage: LIST_IMAGE,
        scrollX,
        currentIndex,
        viewItemChange,
        viewConfig,
        slidesRef,
        updateCurrentSlideIndex,
        pressNextImage,
        pressBackImage
      }}
    />
  );
};

export default OnboardingContainer;
