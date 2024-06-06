import { FlatList, View } from 'react-native';
import React from 'react';
import TabItem from '../TabItems';
import { LIST_NEWS_TAB } from '@/__mocks__/authProfile';

const NewsTab = () => {
  const renderItem = ({ item }) => {
    return <TabItem {...item} />;
  };

  return (
    <FlatList
      data={LIST_NEWS_TAB}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => {
        return String(item.id + index);
      }}
    />
  );
};

export default NewsTab;
