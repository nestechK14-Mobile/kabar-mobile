import React, { useRef, useState } from 'react';
import OnboardingView from './Onboarding.view';
import { useNavigation } from '@react-navigation/native';
import { PAGE_CONSTANTS, SCREENS_STACK } from '@/constants';
import { Animated } from 'react-native';
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
    console.log(viewableItems, 'view');
    console.log(currentIndex, 'index');
  }).current;
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
    const backSlide = currentIndex - 1;
    if (backSlide !== LIST_IMAGE.length) {
      const offset = backSlide * DEVICE.WIDTH;
      slidesRef?.current?.scrollToOffset({ offset });
      setCurrentIndex(backSlide);
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
