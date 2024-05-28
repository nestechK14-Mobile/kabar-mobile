import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { IC_Back, IMG_AuthorSample, IMG_BBC, IMG_Business } from '@/assets';
import { TextAuthor } from '@/components';
import ButtonAuthor from '@/components/common/AuthorScreen/ButtonAuthor';
import styles from './Author.style';
import NewsArticle from '@/components/common/AuthorScreen/TabAuthor/AuthorTab';

const AuthorView = () => {
  const [ActiveButton, setActiveButton] = useState('News');
  const handlePress = ButtonName => {
    setActiveButton(ButtonName);
  };

  const renderContent = () => {
    switch (ActiveButton) {
      case 'News':
        return (
          <NewsArticle
            headline={'Eupore'}
            subheading={'sdsadsdsad'}
            body={'aaaasdsad'}
            imageSource={require('@/assets/image/IMG_AuthorSample.png')}
          />
        );
      case 'Recent':
        return (
          <View>
            <Text>hello</Text>
          </View>
        );
      default:
        return null;
    }
  };
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ marginVertical: 16, marginHorizontal: 16 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}>
          <IMG_BBC />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              flex: 1,
              marginHorizontal: 32
            }}>
            <TextAuthor content={'1.2k'} content1={'Followers'} />
            <TextAuthor content={'124K'} content1={'Following'} />
            <TextAuthor content={'326'} content1={'News'} />
          </View>
        </View>
        {/* <View style={{ marginTop: 6 ??}}><TextAuthor content={'BBC News'} /> ??</View> */}
        <View>
          <Text>
            'is an operational business division of the British Broadcasting Corporation responsible
            for the gathering and broadcasting of news and current affairs.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around'
          }}>
          <ButtonAuthor content={'Following'} />
          <ButtonAuthor content={'Website'} />
        </View>
        <View
          style={{
            marginHorizontal: '30%',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: 34,
            width: 134
          }}>
          <TouchableOpacity
            style={[ActiveButton === 'News' ? styles.ActiveButton : styles.inActiveButton]}
            onPress={() => handlePress('News')}>
            <Text style={[ActiveButton === 'News' ? styles.ActiveText : {}]}>News</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={ActiveButton === 'Recent' ? styles.ActiveButton : styles.inActiveButton}
            onPress={() => handlePress('Recent')}>
            <Text style={[ActiveButton === 'Recent' ? styles.ActiveText : {}]}>Recent</Text>
          </TouchableOpacity>
        </View>
        {renderContent()}
      </View>
    </View>
  );
};

export default AuthorView;
