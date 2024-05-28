import { View } from 'react-native';
import React, { useMemo } from 'react';
import styles from './styles';
import { IMG_AuthorSample } from '@/assets';
import { AuthorContent } from './components';
import styleCommon from '@/constants/styleCommon';
import { Text } from '@/components';

const AuthorProfileScreen = () => {
  const countFibonanci = num => {
    let a = 1,
      b = 0,
      temp;
    while (num > 0) {
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
    return b;
  };

  const value = countFibonanci(20);

  return (
    <View style={styles.container}>
      <Text content={value} />
      <View style={styles.authorContent}>
        <View style={styles.wrapAuthorContent}>
          <View style={styleCommon.flexDefault}>
            <IMG_AuthorSample />
          </View>
          <View style={styles.contentAuthor}>
            {/* {AUTHOR_CONTENT.map(items => {
              return (
                <AuthorContent
                  key={items?.id}
                  title={items?.content}
                  subTitle={items?.title}
                  stateSample={stateSample}
                />
              );
            })} */}
            <AuthorContent title={'1.2M'} subTitle={'Followers'} />
            <AuthorContent title={'1.2M'} subTitle={'Followers'} />
            <AuthorContent title={'1.2M'} subTitle={'Followers'} />
          </View>
        </View>
      </View>
      <AuthorContent title={'1.2M'} subTitle={'Followers'} />
    </View>
  );
};

export default AuthorProfileScreen;
