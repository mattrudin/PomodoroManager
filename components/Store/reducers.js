const TIMER_DURATION = 1500;

// Initial State
const initialState = {
	isPlaying: false,
	elapsedTime: 0,
	timerDuration: TIMER_DURATION,
	framesArray: [0,1,0],
	workDuration: 1500,
	shortBreakDuration: 300,
	longBreakDuration: 900,
	numberOfTimeframe: -1,
	backgroundColor: '#FAF3EB',
	buttonColor: '#568DBA',
	workColor: '#04986b',
	breakColor: '#d3c786',
	highlighterColor: '#83478B',
	placeholderTextColor: '#fff'
};

// Helper Functions
const addSecond = (state) => {
	if (state.elapsedTime < TIMER_DURATION) {
		return {
			...state,
			elapsedTime: state.elapsedTime + 1
		};
	} else {
		return {
			...state,
			isPlaying: false
		};
	}
}

const removeFrame = (state) => {
  	if (state.framesArray.length <= 1) {
  		return {
		...state,
		framesArray: [0]
		};
	} else {
	  	return {
	  		...state,
	  		framesArray: state.framesArray.slice(0, -2)
	  	};
  	}
}

// Reducer Function
export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'START_TIMER':
			return {
				...state,
				isPlaying: true,
				numberOfTimeframe: state.numberOfTimeframe + 1
			};
		case 'RESTART_TIMER':
			return {
				...state,
				isPlaying: false,
				elapsedTime: 0,
				timerDuration: TIMER_DURATION
			};
		case 'ADD_SECOND':
			return addSecond(state);
		case 'ADD_FRAME':
			return {
				...state,
				framesArray: [...state.framesArray, 1, 0]
			};
		case 'REMOVE_FRAME':
			return removeFrame(state);
		case 'CHANGE_PRIMARY_COLOR':
			return {
				...state,
				...action.color
			};
		default:
			return state;
	}
}