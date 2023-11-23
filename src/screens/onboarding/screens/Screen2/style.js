import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginStart: 24,
    marginEnd: 24,
    marginTop: 10
  },
  Textinput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    marginStart: 24,
    marginEnd: 24,
    borderRadius: 10,
    height: 40,
    marginTop: 12
  },
  Textinside: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default styles;
