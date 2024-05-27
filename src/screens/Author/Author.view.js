import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { IC_Back, IMG_BBC } from '@/assets';
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
            imageSource={require('../../assets/image/IMG_Business')}
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
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <IC_Back />
          <Text>...</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <View>
            <IMG_BBC />
          </View>

          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginStart: 16
            }}>
            <TextAuthor content={'1.2k'} content1={'Followers'} StyleText={{ flex: 1 }} />
            <TextAuthor content={'124K'} content1={'Following'} StyleText={{ flex: 1 }} />
            <TextAuthor content={'326'} content1={'News'} StyleText={{ flex: 1 }} />
          </View>
        </View>

        <View style={{ marginTop: 6 }}>
          <TextAuthor content={'BBC News'} />
        </View>
        <View style={{ backgroundColor: 'red' }}>
          <TextAuthor
            content1={
              'is an operational business division of the British Broadcasting Corporation responsible for the gathering and broadcasting of news and current affairs.'
            }
          />
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
