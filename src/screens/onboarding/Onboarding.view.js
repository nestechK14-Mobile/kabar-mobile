import { ScrollView, View } from 'react-native';
import React from 'react';
import styles from './Onboarding.styles';
import { IMG_Vegetables } from '@/assets';
import { Button, Text } from '@/components';

const OnboardingView = props => {
  const { navigateToAuth } = props;
  return (
    <ScrollView bouncesZoom={false} bounces={false} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <IMG_Vegetables />
        <View style={styles.bodyContainer}>
          <Text content={'Lorem Ipsum is simply dummy'} textStyle={styles.content} />
          <Text
            content={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
            textStyle={styles.subContent}
          />
          <View style={styles.containerBottom}>
            <View style={styles.rowDotSlider}>
              <View style={styles.dotDefault} />
              <View style={styles.dotDefault} />
              <View style={styles.dotDefault} />
            </View>
            <View style={styles.rowButton}>
              <Button style={styles.buttonBack}>
                <Text content={'Back'} textStyle={styles.titleButton} />
              </Button>
              <Button style={styles.buttonNext} onPress={navigateToAuth}>
                <Text content={'Next'} textStyle={styles.titleButton} />
              </Button>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default OnboardingView;
