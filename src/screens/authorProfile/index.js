import { SafeAreaView, View } from 'react-native';
import React from 'react';
import styles from './styles';
import { IC_Back, IMG_AuthorSample } from '@/assets';
import { AuthorContent, Tabs } from './components';
import styleCommon from '@/constants/styleCommon';
import { AppButton, AppText, Header } from '@/components';

const AuthorProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: 16 }}>
        <Header />
        <View style={styles.authorContent}>
          <View style={styles.wrapAuthorContent}>
            <View style={styleCommon.flexDefault}>
              <IMG_AuthorSample />
            </View>
            <View style={styles.contentAuthor}>
              <AuthorContent isCenter={true} isFlex={true} title={'1.2M'} subTitle={'Followers'} />
              <AuthorContent isCenter={true} isFlex={true} title={'124K'} subTitle={'Following'} />
              <AuthorContent isCenter={true} isFlex={true} title={'326'} subTitle={'News'} />
            </View>
          </View>
        </View>
        <AuthorContent
          containerStyle={{ marginTop: 12 }}
          title={'BBC News'}
          subTitle={
            'is an operational business division of the British Broadcasting Corporation responsible for the gathering and broadcasting of news and current affairs.'
          }
        />
      </View>
      <View style={styles.containerButton}>
        <AppButton style={[styles.buttonDefault]}>
          {/* <IC_Back style={{ color: 'white' }} /> */}
          <AppText content={'Following'} textStyle={styles.titleButtonDefault} />
        </AppButton>
        <AppButton style={styles.buttonDefault}>
          <AppText content={'Website'} textStyle={styles.titleButtonDefault} />
        </AppButton>
      </View>
      <Tabs />
    </SafeAreaView>
  );
};

export default AuthorProfileScreen;
