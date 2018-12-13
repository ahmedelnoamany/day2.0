import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  activeCardContainer: {
    height: 200,
    backgroundColor: '#331832',
    justifyContent: 'center',
    alignItems: 'center'
  },
  normalCardContainer: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  startCardHeadingText: {
    position: 'absolute',
    top: 2,
    left: 10,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 15,
    color: 'rgba(253, 255, 203, .5)'
  },
  normalCardActivityText: {
    fontFamily: 'Helvetica',
    fontWeight: 'normal',
    color: 'rgba(253, 255, 203, .5)',
    fontSize: 25
  },
  endCardText: {
    fontFamily: 'Helvetica',
    fontWeight: 'normal',
    color: 'rgba(253, 255, 203, .5)',
    fontSize: 15,
    marginTop: 10
  },
  smallHeadingText: {
    position: 'absolute',
    top: 3,
    left: 3,
    color: '#FDFFCB'
  },
  activeCardFlex: {
    flexDirection: 'row',
    height: '90%',
    marginTop: 15
  },
  normalCard: {
    width: '80%',
    height: '80%',
    backgroundColor: 'rgba(51, 24, 50, .5)',
    marginLeft: '2%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  streakText: {
    fontFamily: 'Helvetica',
    fontWeight: 'normal',
    color: '#FDFFCB',
    opacity: .7,
    fontSize: 15
  },
  activeDetailsContainer: {
    flex: .8,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  infoContainer: {
    height: '90%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  infoContainerRight: {
    height: '60%',
    marginLeft: -40
  },
  iconContainer: {
    height: '65%',
    width: '30%',
    backgroundColor: 'white'
  },
  activityNameText: {
    fontFamily: 'Helvetica',
    fontWeight: 'normal',
    color: '#FDFFCB',
    opacity: .5,
    fontSize: 25
  },
  timeText: {
    fontFamily: 'Helvetica',
    fontWeight: 'normal',
    color: '#FDFFCB',
    opacity: .5,
    fontSize: 20
  },
  activeCardTimelineContainer: {
    flex: .2,
    marginTop: '-5%',
    height: '111.5%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  normalCardTimeLineContainer: {
    backgroundColor: '#707070',
    height: '100%',
    width: '2%',
    position: 'absolute',
    bottom: 0,
    right: '8%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  startCardTimeLineContainer: {
    backgroundColor: '#707070',
    height: '50%',
    width: '2%',
    position: 'absolute',
    bottom: 0,
    right: '8%',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  endCardTimeLineContainer: {
    backgroundColor: '#707070',
    height: '55%',
    width: '2%',
    position: 'absolute',
    top: -1,
    right: '8%',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  activeCardTimeline: {
    width: '10%',
    backgroundColor: '#707070',
    height: '110%',
    marginLeft: '10%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  activeCardTimelineButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#707070'
  },
  normalCardTimeLineButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: '#707070',
    justifyContent: 'center',
    alignItems: 'center'
  }
})