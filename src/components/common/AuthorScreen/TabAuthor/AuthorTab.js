import React from 'react';
import { View, Image, Text } from 'react-native';

const NewsArticle = ({ headline, subheading, imageSource, body }) => {
  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{headline}</Text>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>{subheading}</Text>
      <Image source={imageSource} />
      <Text style={{ fontSize: 16 }}>{body}</Text>
    </View>
  );
};

export default NewsArticle;
