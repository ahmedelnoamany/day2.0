const initialState = {
  activeView: 0,
  morningRoutine: {
    startTime: '8:00',
    endTime: '12:00',
    activities: [
      {name: 'Work', time: '8:00'},
      {name: 'Excercise', time: '9:00'},
      {name: 'Read', time: '10:00'},
      {name: 'Eat', time: '11:00'},
    ],
    schedule: [
      '8:00',
      '9:00',
      '10:00',
      '11:00',
      '12:00'
    ]
  },
  afternoonRoutine: {
    startTime: '12:00',
    endTime: '4:00',
    activities: [
      {name: 'Cardio', time: '12:00'},
      {name: 'Read', time: '1:00'},
      {name: 'Write', time: '2:00'},
      {name: 'Lunch', time: '3:00'}
    ],
    schedule: [
      '12:00',
      '1:00',
      '2:00',
      '3:00',
      '4:00'
    ]
  },
  eveningRoutine: {
    startTime: '5:00',
    endTime: '10:00',
    activities: [
      {name: 'Read', time: '5:00'},
      {name: 'Draw', time: '6:00'},
      {name: 'Relax', time: '7:00'},
      {name: 'Dinner', time: '8:00'},
      {name: 'Email', time: '9:00'},
      {name: 'Sleep', time: '10:00'}
    ],
    schedule: [
      '5:00',
      '6:00',
      '7:00',
      '8:00',
      '9:00',
      '10:00'
    ]
  }
};

export default function (state = initialState, action) {
  if (!state) {
    this.state = initialState;
  }
  switch (action.type) {
    case 'CHANGE_VIEW' :
      return {
        ...state,
        activeView: action.payload
      }
    default:
      return state;
    }
}