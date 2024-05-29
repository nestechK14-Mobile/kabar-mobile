import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect, useId, useState } from 'react';
import {  PNG_Clock, FONTS } from '@/assets';
import styles from './authorProfile.styles';

const ListFromAPI = props => {
  const { mockAPI } = props;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getLoading = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    getLoading();
  }, []);

  return (
    <View>

      {loading ? (<ActivityIndicator />) : (
        <FlatList
          data={mockAPI}
          renderItem={({ item }) => {
            return (
           
            
                <View style={styles.mainContainer}>

                <View style = {styles.imageView}>
                 <Image 
                 style = {{borderRadius: 10}}
                 source = {item.image} />
                  </View>  
           
              <View style={styles.contentView}>
                <Text style={{ paddingTop: 2, fontWeight: 500 }}>{item.category}</Text>
                <Text style={{ paddingTop: 5 }}>{item.content}</Text>

                <View style={styles.sourceAndTime}>
                  <Image
                    source={item.sourceLogo}
                    style={{ resizeMode: 'contain', height: 30, width: 30 }}
                  />
                  <Text style={{ fontWeight: 600, padding: 5 }}>{item.source}</Text>

                  <Image
                    source={PNG_Clock}
                    style={{ resizeMode: 'contain', height: 20, width: 20 }}
                  />
                  <Text
                    style={{ fontSize: 14, paddingTop: 10, fontFamily: FONTS.REGULAR, padding: 5 }}>
                    {item.time}
                  </Text>
                </View>
              </View>
              </View>
            );
          }}
          keyExtractor={(item, index) => item.id + index}
        />
      )}
    </View>
  );
};

export default ListFromAPI;
