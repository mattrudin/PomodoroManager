import { START_TIMER, RESTART_TIMER, ADD_SECOND, ADD_FRAME, REMOVE_FRAME } from './types';

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

const actionCreators = {
	startTimer,
	restartTimer,
	addSecond,
	addFrame,
	removeFrame
};

export { actionCreators };