import { View, StyleSheet } from 'react-native';
import React from 'react';
import { IC_Clock } from '@/assets';
import { AppButton, AppText } from '@/components';

const TabItem = item => {
  const { title, author, image, content, time } = item;
  const { avatar, name } = author;
  const NewsItemImage = image;
  const AuthorAvatar = avatar;

  const click = () => {};

  return (
    <View style={styles.container}>
      <NewsItemImage />
      <View style={styles.content}>
        <AppText content={title} textStyle={styles.title} />
        <AppText content={content} textStyle={styles.subTitle} />
        <View
          style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <AuthorAvatar />
              <AppText content={name} textStyle={{ marginLeft: 2, textAlign: 'center' }} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 4 }}>
              <IC_Clock />
              <AppText content={time + ' ago'} textStyle={{ marginLeft: 2, textAlign: 'center' }} />
            </View>
          </View>
          <AppButton onPress={click}>
            <AppText content={'...'} />
          </AppButton>
        </View>
      </View>
    </View>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  content: {
    paddingHorizontal: 8,
    paddingVertical: 4
  },
  title: {
    color: 'black',
    fontWeight: '500'
  },
  subTitle: {
    color: 'gray',
    fontWeight: '600'
  }
});
