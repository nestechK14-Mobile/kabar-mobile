import { View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import { PNG_Europe,PNG_BBC_News } from '@/assets';
import uuid from 'react-native-uuid';
import styles from './authorProfile.styles';
const AuthorProfileView = (props) => {
 
  const mockTest = [
    {
      id: uuid.v4(),
      image: PNG_Europe,
      category: 'EUROPE',
      source: "BBC News",
      sourceLogo: PNG_BBC_News,
      time: '15m ago',
      content: "Ukraine's President Zelensky to BBC: Blood money being paid..."
    }];

  return (
    <View style = {styles.mainContainer}>
        <View style = {styles.imageView}>
          <Image source={PNG_Europe}/>
        </View>

        <View style = {styles.contentView}>

        <Text>{mockTest[0]?.category}</Text>
        <Text>{mockTest[0]?.content}</Text>

        <View style = {styles.sourceAndTime}>
        <Image source={mockTest[0]?.sourceLogo}
         style = {{resizeMode: 'contain' , height:30}}/>
        <Text >{mockTest[0]?.source}</Text>
        </View>

        </View>

    </View>


  );
};

export default AuthorProfileView;

