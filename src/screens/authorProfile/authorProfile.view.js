import { View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import { PNG_Europe,PNG_BBC_News,PNG_Clock, FONTS} from '@/assets';
import uuid from 'react-native-uuid';
import styles from './authorProfile.styles';

const AuthorProfileView = (API_mock) => {
 const {
    id,
    image,
    category,
    source,
    sourceLogo,
    time,
    content} = API_mock;

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

        <Text style = {{paddingTop: 2,fontWeight: 500}}>{mockTest[0]?.category}</Text>
        <Text style = {{paddingTop: 5}}>{mockTest[0]?.content}</Text>

        <View 
        style = { styles.sourceAndTime}>
        <Image source={mockTest[0]?.sourceLogo}
         style = {{ resizeMode: 'contain' , height:30, width: 30}}/>
        <Text  style = {{fontWeight:400,padding: 5}}>{mockTest[0]?.source}</Text>

        <Image source={PNG_Clock}
         style = {{ resizeMode: 'contain' , height:20, width: 20}}/>
        <Text  style = {{fontSize: 14,paddingTop:10,fontFamily:FONTS.REGULAR,padding: 5}}>{mockTest[0]?.time}</Text>
        </View>
        

        </View>

    </View>


  );
};

export default AuthorProfileView;

