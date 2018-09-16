import { 	START_TIMER, 
			RESTART_TIMER, 
			ADD_SECOND, 
			ADD_FRAME, 
			REMOVE_FRAME, 
			SET_WORK_DURATION, 
			SET_SHORT_BREAK_DURATION, 
			SET_LONG_BREAK_DURATION,
			CHANGE_PRIMARY_COLOR
		}	from './types';

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
const applyStartTimer = (state) => {
	return {
		...state,
		isPlaying: true,
		numberOfTimeframe: state.numberOfTimeframe + 1
	};
}

const applyRestartTimer = (state) => {
	return {
		...state,
		isPlaying: false,
		elapsedTime: 0,
		timerDuration: TIMER_DURATION
	};
}

const applyAddSecond = (state) => {
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

const addFrame = (state) => {
	return {
		...state,
		framesArray: [...state.framesArray, 1, 0]
	};
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

/*const setWorkDuration = (state) => {
	return {
		...state,
		workDuration: TIMER_DURATION
	};
}

const setShortBreakDuration = (state) => {
	return {
		...state,
		shortBreakDuration: TIMER_DURATION
	};
}

const setLongBreakDuration = (state) => {
	return {
		...state,
		longBreakDuration: TIMER_DURATION
	};
}*/

// Reducer Function
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case START_TIMER:
			return applyStartTimer(state);
		case RESTART_TIMER:
			return applyRestartTimer(state);
		case ADD_SECOND:
			return applyAddSecond(state);
		case ADD_FRAME:
			return addFrame(state);
		case REMOVE_FRAME:
			return removeFrame(state);
		case SET_WORK_DURATION:
			return {
				...state,
				workDuration: action.duration
			};
		case SET_SHORT_BREAK_DURATION:
			return {
				...state,
				shortBreakDuration: action.duration
			};
		case SET_LONG_BREAK_DURATION:
			return {
				...state,
				longBreakDuration: action.duration
			};
		case CHANGE_PRIMARY_COLOR:
			return {
				...state,
				backgroundColor: action.color
			};
		default:
			return state;
	}
}

export default reducer;