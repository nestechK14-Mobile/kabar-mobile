import { View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { AppButton, AppText } from '@/components';
import { COLORS, TAB_TITLE_AUTH_PROFILE } from '@/constants';
import { scale } from '@/utils';
import NewsTab from './components/NewsTab';
import RecentTab from './components/RecentTab';

const Tabs = () => {
  const [tabSelect, setTabSelect] = useState(TAB_TITLE_AUTH_PROFILE.NEWS);

  const onSelectedTab = content => {
    setTabSelect(content);
  };

  const renderTabs = () => {
    switch (tabSelect) {
      case TAB_TITLE_AUTH_PROFILE.NEWS:
        return <NewsTab />;

      case TAB_TITLE_AUTH_PROFILE.RECENT:
        return <RecentTab />;

      default:
        return <></>;
    }
  };

  return (
    <>
      <View style={styles.container}>
        <AppButton
          style={[
            tabSelect === TAB_TITLE_AUTH_PROFILE.NEWS ? styles.tabSelect : styles.tabDefault,
            { marginHorizontal: 6 }
          ]}
          onPress={() => onSelectedTab(TAB_TITLE_AUTH_PROFILE.NEWS)}>
          <AppText content={'News'} />
        </AppButton>
        <AppButton
          style={[
            tabSelect === TAB_TITLE_AUTH_PROFILE.RECENT ? styles.tabSelect : styles.tabDefault,
            { marginHorizontal: 6 }
          ]}
          onPress={() => onSelectedTab(TAB_TITLE_AUTH_PROFILE.RECENT)}>
          <AppText content={'Recent'} />
        </AppButton>
      </View>
      {renderTabs()}
    </>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: scale(16),
    marginTop: scale(12),
    justifyContent: 'center'
  },
  tabDefault: {
    borderBottomColor: COLORS.WHITE,
    borderBottomWidth: scale(1)
  },
  tabSelect: {
    borderBottomColor: COLORS.BLUE_CRAYOLA,
    borderBottomWidth: scale(1)
  }
});
