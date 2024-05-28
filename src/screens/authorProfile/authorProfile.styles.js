import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  imageView: {
    flex: 1,
    justifyContent: 'left'
  },

  contentView: {
    
    paddingLeft: 5,
    flex: 3,
    justifyContent: 'left',
  },
  sourceAndTime: {
   
    padding: 3,
    flexDirection: 'row',
    alignItems: 'center'

  },

});

export default styles;
