import { Animated, FlatList, View } from 'react-native';
import React from 'react';
import styles from './Onboarding.styles';
import { Button, Text } from '@/components';
import { Paginator } from './components';

const OnboardingView = props => {
  const {
    navigateToAuth,
    listImage,
    scrollX,
    viewItemChange,
    viewConfig,
    slidesRef,
    updateCurrentSlideIndex,
    pressNextImage,
    pressBackImage,
    currentIndex
  } = props;

  const renderItemImage = ({ item }) => {
    const ItemImage = item?.image;
    return (
      <View style={styles.containerItemImage}>
        <ItemImage style={styles.itemImage} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={listImage}
        renderItem={renderItemImage}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        bouncesZoom={false}
        keyExtractor={({ item, index }) => item?.id?.toString()}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false
        })}
        onViewableItemsChanged={viewItemChange}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
        scrollEventThrottle={32}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        style={styles.topContainer}
      />
      <View style={styles.bodyContainer}>
        <View style={{ flex: 1 }}>
          <Text content={'Lorem Ipsum is simply dummy'} textStyle={styles.content} />
          <Text
            content={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
            textStyle={styles.subContent}
          />
        </View>
        <View style={styles.containerBottom}>
          <Paginator data={listImage} scrollX={scrollX} currentIndex={currentIndex} />
          <View style={styles.rowButton}>
            <Button
              style={styles.buttonBack}
              onPress={pressBackImage}
              disabled={currentIndex === 0}>
              <Text content={'Back'} textStyle={styles.titleButtonBack} />
            </Button>
            <Button
              style={styles.buttonNext}
              onPress={currentIndex === listImage.length - 1 ? navigateToAuth : pressNextImage}>
              <Text
                content={currentIndex === listImage.length - 1 ? 'Get Started' : 'Next'}
                textStyle={styles.titleButtonNext}
              />
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OnboardingView;
