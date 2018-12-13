import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  outer: {
    flex: 1,
    width: '100%',
    margin: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  regularCard: {
    marginTop: '20%',
    flex: .8,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#E8E8E8'
  },
  mediumCard: {
    marginTop: '20%',
    flex: .6,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E8E8E8'
  },
  regularTimeStamp: {
    flex: .2,
    width: '100%',
    backgroundColor: 'transparent',
    alignItems: 'center'
  },
  mediumTimeStamp: {
    flex: .4,
    width: '100%',
    backgroundColor: 'transparent',
    alignItems: 'center'
  },
  iconContainer: {
    marginTop: '10%',
    width: '80%',
    height: '60%',
    borderWidth: 3,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  eventText: {
    color: '#331832',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 2,
    fontFamily: 'Helvetica',
    textTransform: 'capitalize'
  },
  eventTextMedium: {
    color: '#331832',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 2,
    fontFamily: 'Helvetica',
    textTransform: 'capitalize'
  },
  eventTextSmall: {
    color: '#F4F4F4',
    fontSize: 10,
    fontWeight: 'normal'
  },
  timeStampContainer: {
    width: 80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  timeFlag: {
    flex: 1,
    width: '5%',
    backgroundColor: '#707070',
    justifyContent: 'center',
    alignItems: 'center'
  },
  timeStamp: {
    color: '#23B5D3',
    fontSize: 12,
    fontWeight: 'bold',
  },
  smallTitleContainer: {
    flex: .1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  smallLine: {
    width: '10%',
    flex: .2,
    backgroundColor: '#707070'
  },
  switchedSmallLine: {
    width: '10%',
    flex: .1,
    backgroundColor: '#707070'
  },
  smallCard: {
    flex: .3,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E8E8E8'
  },
  smallTimeStamp: {
    flex: .4,
    width: '10%',
    backgroundColor: '#707070',
    alignItems: 'center'
  },
  switchedSmallTimeStamp: {
    flex: .3,
    width: '10%',
    backgroundColor: '#707070',
    alignItems: 'center'
  }
})