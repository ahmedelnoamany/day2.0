import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    height: 90,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,  
    overflow: 'hidden',
  },
  linearGradientContainerMorning: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  linearGradientContainerAfternoon: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  linearGradientContainerEvening: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  sunMorning: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FDFFCB',
    marginTop: '12%',
    marginLeft: '5%'
  },
  sunAfternoon: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: '#FFC04A',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'visible',
  },
  sunEvening: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FDFFCB',
    marginTop: '34%',
    marginRight: '1%'
  },
  eveningMoon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFFFF8',
    marginTop: '-6%',
    marginLeft: '3%'
  },
  morningText: {
    fontSize: 25,
    fontWeight: 'normal',
    letterSpacing: 4,
    color: '#FDFFCB',
    marginRight: '5%',
    textAlign: 'center',
  },
  afternoonText: {
    fontSize: 25,
    fontWeight: 'normal',
    letterSpacing: 2,
    color: '#FDFFCB',
    textAlign: 'center',
    position: 'absolute',
    zIndex: 1,
    letterSpacing: 5
  },
  eveningText: {
    fontSize: 25,
    fontWeight: 'normal',
    letterSpacing: 4,
    color: '#FDFFCB',
    textAlign: 'center',
    marginLeft: '5%'
  }
});