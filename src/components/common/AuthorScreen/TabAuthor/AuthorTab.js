import React from 'react';
import { View, Image, Text } from 'react-native';

const NewsArticle = ({ headline, subheading, imageSource, body }) => {
  const ImageSource = imageSource;

  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{headline}</Text>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>{subheading}</Text>
      {typeof imageSource === 'number' ? <Image source={imageSource} /> : <ImageSource />}
      <Text style={{ fontSize: 16 }}>{body}</Text>
    </View>
  );
};

export default NewsArticle;
