import { View } from 'react-native';
import React from 'react';
import styles from './styles';
import { IMG_AuthorSample } from '@/assets';

const AuthorProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.authorContent}>
        <IMG_AuthorSample />
      </View>
    </View>
  );
};

export default AuthorProfileScreen;
