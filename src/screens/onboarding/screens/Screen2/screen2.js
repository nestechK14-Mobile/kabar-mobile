import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native';
import style from '../Screen2/style';
import styles from '../Screen2/style';
import { DEVICE } from '@/utils';
import { IMG_BBC, IMG_KabarLabel, IMG_Ship } from '@/assets';

const Screen2 = () => {
  const [text, setText] = useState('');
  const handleTextChange = newText => {
    setText(newText);
  };
  return (
    <View>
      <View style={style.Header}>
        <IMG_KabarLabel />
        <TouchableOpacity>
          <Image source={require('../../../../assets/icons/Vector.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.Textinput}>
        <View style={styles.Textinside}>
          <View>
            <TouchableOpacity>
              <Image source={require('../../../../assets/icons/IC_Search.png')} />
            </TouchableOpacity>
          </View>
          <View>
            <TextInput
              style={styles.textInput}
              onChangeText={handleTextChange}
              value={text}
              placeholder="Nhập văn bản..."
            />
          </View>
        </View>

        <View>
          <TouchableOpacity>
            <Image source={require('../../../../assets/icons/IC_more.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10
        }}>
        <TouchableOpacity style={{ marginStart: 24 }}>
          <Text style={{ fontWeight: '900' }}>Trending</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginEnd: 24 }}>
          <Text>See All</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 10 }}>
        <IMG_Ship />
        <Text style={{ fontWeight: 'bold', marginStart: 24 }}>Europe</Text>
        <Text style={{ fontWeight: 'bold', marginStart: 24 }}>
          Russian warship: Moskva sinks in Black Sea
        </Text>

        <View style={{ flexDirection: 'row' }}>
          <View style={{ marginRight: 2, marginStart: 24 }}>
            <Image source={IMG_BBC} />
          </View>
          <Text style={{ fontWeight: 'bold' }}>BBC</Text>

          <View
            style={{
              marginStart: 30,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row'
            }}>
            <Image source={require('../../../../assets/icons/IC_Clock.png')} />
            <Text style={{ marginStart: 10 }}>4h ago</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10
        }}>
        <TouchableOpacity style={{ marginStart: 24 }}>
          <Text style={{ fontWeight: '900' }}>Latest</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginEnd: 24 }}>
          <Text>See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={{ height: DEVICE.HEIGH, margin: 20 }}>
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

export default Screen2;
