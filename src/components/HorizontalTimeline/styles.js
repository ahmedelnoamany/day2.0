import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {

  },
  mainContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#331832',
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  upperContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'

  },
  lowerContainer: {
    flex: .1,
    width: '100%',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
    
  },
  timeline: {
    width: '80%',
    height: '50%',
    backgroundColor: 'grey'
  },
  timelineText: {
    color: 'grey',
    fontSize: 14,
    fontWeight: 'bold'
  },
  draggableItem: {
   width: 80,
   margin: 2,
   height: '100%'
  },
  draggableItemMedium: {
    width: 55,
    margin: 2,
    height: '100%'
  },
  draggableItemSmall: {
    width: 30,
    margin: 2,
    height: '100%'
  }
});