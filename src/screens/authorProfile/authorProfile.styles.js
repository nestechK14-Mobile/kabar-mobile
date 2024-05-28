import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection:'row',
    justifyContent: 'center',
   
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
   
    alignItems: 'left',
    flexDirection: 'row',


  },

});

export default styles;
