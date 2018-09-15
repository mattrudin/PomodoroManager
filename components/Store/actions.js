import { 	START_TIMER, 
			RESTART_TIMER, 
			ADD_SECOND, 
			ADD_FRAME, 
			REMOVE_FRAME, 
			SET_WORK_DURATION, 
			SET_SHORT_BREAK_DURATION, 
			SET_LONG_BREAK_DURATION,
			CHANGE_PRIMARY_COLOR
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

const setWorkDuration = (duration) => {
	return {
		type: SET_WORK_DURATION,
		duration
	};
}

const setShortBreakDuration = (duration) => {
	return {
		type: SET_SHORT_BREAK_DURATION,
		duration
	};
}

const setLongBreakDuration = (duration) => {
	return {
		type: SET_LONG_BREAK_DURATION,
		duration
	};
}

const changePrimaryColor = (color) => ({
	type: CHANGE_PRIMARY_COLOR,
	color
});

const actionCreators = {
	startTimer,
	restartTimer,
	addSecond,
	addFrame,
	removeFrame,
	setWorkDuration,
	setShortBreakDuration,
	setLongBreakDuration,
	changePrimaryColor
};

export { actionCreators };