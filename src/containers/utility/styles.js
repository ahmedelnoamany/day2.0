import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  secondaryPageContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#EB6B6B',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  tabNavContainer: {
    flex: .08,
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  navButton: {
    height: '100%',
    flex: .333,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeNav: {
    backgroundColor: '#E8E8E8'
  },
  optionButtonContainer: {
    flex: .3,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  routineContainer: {
    backgroundColor: '#331832',
    flex: .6,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  singleOption: {
    flex: .33,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  optionToggle: {
    width: 70,
    height: 40,
    backgroundColor: 'rgba(51, 24, 50, .5)'
  },
  newEventButton: {
    flex: .8,
    width: '100%',
    backgroundColor: 'rgba(134, 237, 177, .5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  newEventContainer: {
    flex: .2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  eventContainer: {
    flex: .8,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  newEventText: {
    color: '#86EDB1'
  },
  routineCard: {
    flex: .2,
    marginVertical: '.5%',
    width: '90%',
    backgroundColor: '#FFFFFF'
  }
});