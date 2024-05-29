import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    margin:2,
    padding: 1,
    flexDirection: 'row',
    // backgroundColor: 'red',
    // borderColor: 'blue',
    // borderWidth:3
  },
  imageView: {
    padding:3,
    resizeMode:'contain'
  },
  contentView: {
    paddingLeft: 5,
    flex: 3,
    justifyContent: 'space-between',
    alignItems: 'left'
  },
  sourceAndTime: {
    
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default styles;
