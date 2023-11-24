import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native';
import { DEVICE } from '@/utils';
import {
  IC_Bell,
  IC_Clock,
  IC_Filter,
  IC_Search,
  IMG_BBC,
  IMG_KabarLabel,
  IMG_Ship
} from '@/assets';
import styles from './Home.styles';

const HomeView = () => {
  const [text, setText] = useState('');
  const handleTextChange = newText => {
    setText(newText);
  };
  return (
    <View>
      <View styles={styles.Header}>
        <IMG_KabarLabel />
        <TouchableOpacity>
          <IC_Bell />
        </TouchableOpacity>
      </View>

      <View styles={styles.Textinput}>
        <View styles={styles.Textinside}>
          <View>
            <TouchableOpacity>
              <IC_Search />
            </TouchableOpacity>
          </View>
          <View>
            <TextInput
              styles={styles.textInput}
              onChangeText={handleTextChange}
              value={text}
              placeholder="Nhập văn bản..."
            />
          </View>
        </View>

        <View>
          <TouchableOpacity>
            <IC_Filter />
          </TouchableOpacity>
        </View>
      </View>

      <View
        styles={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10
        }}>
        <TouchableOpacity styles={{ marginStart: 24 }}>
          <Text styles={{ fontWeight: '900' }}>Trending</Text>
        </TouchableOpacity>

        <TouchableOpacity styles={{ marginEnd: 24 }}>
          <Text>See All</Text>
        </TouchableOpacity>
      </View>

      <View styles={{ marginTop: 10 }}>
        <IMG_Ship />
        <Text styles={{ fontWeight: 'bold', marginStart: 24 }}>Europe</Text>
        <Text styles={{ fontWeight: 'bold', marginStart: 24 }}>
          Russian warship: Moskva sinks in Black Sea
        </Text>

        <View styles={{ flexDirection: 'row' }}>
          <View styles={{ marginRight: 2, marginStart: 24 }}>
            <Image source={IMG_BBC} />
          </View>
          <Text styles={{ fontWeight: 'bold' }}>BBC</Text>

          <View
            styles={{
              marginStart: 30,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row'
            }}>
            <IC_Clock />
            <Text styles={{ marginStart: 10 }}>4h ago</Text>
          </View>
        </View>
      </View>

      <View
        styles={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10
        }}>
        <TouchableOpacity styles={{ marginStart: 24 }}>
          <Text styles={{ fontWeight: '900' }}>Latest</Text>
        </TouchableOpacity>

        <TouchableOpacity styles={{ marginEnd: 24 }}>
          <Text>See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView styles={{ height: DEVICE.HEIGH, margin: 20 }}>
        <IMG_Ship />
        <IMG_Ship />
        <IMG_Ship />
        <IMG_Ship />
        <IMG_Ship />
        <IMG_Ship />
        <IMG_Ship />
        <IMG_Ship />
        <IMG_Ship />
        <IMG_Ship />
      </ScrollView>
    </View>
  );
};

export default HomeView;
