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
    paddingTop:2,
    paddingLeft:10,
    flex: 3,
    justifyContent: 'left',
  },
  sourceAndTime: {
   
    
    flexDirection: 'row',
    alignItems: 'center'

  },

});

export default styles;
