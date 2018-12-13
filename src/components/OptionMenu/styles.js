import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  optionsContainer: {
    flex: .05,
    width: '100%',
  },
  optionsOpen: {
    flex: .4,
    width: '100%',
  },
  buttonContents: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  buttonInactive: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems : 'center'
  },
  buttonActive: {
    flex: 1,
    marginVertical: '1%',
    backgroundColor: '#FFFFFF',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  buttonContainerA: {
    flex: .5,
    marginTop: '10%',
    width: '66%',
    marginLeft: '6%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonContainerB: {
    flex: .5,
    width: '75%',
    marginBottom: '20%',
    marginLeft: '23%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  exitButton: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: 'white',
    position: 'absolute',
    top: 4,
    right: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#707070',
    borderWidth: 1
  },
  option: {
    height: 75,
    width: 70,
    borderWidth: 3,
    borderColor: '#707070',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText: {
    marginTop: '10%',
    fontFamily: 'Helvetica',
    fontSize: 12,
    fontWeight: 'normal',
    textAlign: 'center'
  }
});