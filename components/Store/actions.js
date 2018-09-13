import { 	START_TIMER, 
			RESTART_TIMER, 
			ADD_SECOND, 
			ADD_FRAME, 
			REMOVE_FRAME, 
			SET_WORK_DURATION, 
			SET_SHORT_BREAK_DURATION, 
			SET_LONG_BREAK_DURATION 
		} from './types';

const startTimer = () => {
	return {
		type: START_TIMER
	};
}

const restartTimer = () => {
	return {
		type: RESTART_TIMER
	};
}

const addSecond = () => {
	return {
		type: ADD_SECOND
	};
} 

const addFrame = () => {
	return {
		type: ADD_FRAME
	};
}

const removeFrame = () => {
	return {
		type: REMOVE_FRAME
	};
}

const setWorkDuration = () => {
	return {
		type: SET_WORK_DURATION
	};
}

const setShortBreakDuration = () => {
	return {
		type: SET_SHORT_BREAK_DURATION
	};
}

const setLongBreakDuration = () => {
	return {
		type: SET_LONG_BREAK_DURATION
	};
}

const actionCreators = {
	startTimer,
	restartTimer,
	addSecond,
	addFrame,
	removeFrame,
	setWorkDuration,
	setShortBreakDuration,
	setLongBreakDuration
};

export { actionCreators };