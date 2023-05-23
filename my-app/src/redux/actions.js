import { CREATE_POST, SHOW_LOADER, HIDE_LOADER, HIDE_ALERT, SHOW_ALERT, REQUEST_POSTS } from './types';

export const createPost = (post) => {
	return {
		type: CREATE_POST,
		payload: post
	}
}

export function showLoader() {
	return {
		type: SHOW_LOADER
	}
}

export function hideLoader() {
	return {
		type: HIDE_LOADER
	}
}

export function showAlert(text, type = 'warning') {
	return dispatch => {
		dispatch({
			type: SHOW_ALERT,
			payload: {text, type}
		})
		setTimeout(() => {
			dispatch(hideAlert());
		}, 3000)
	}
}

export function hideAlert() {
	return {
		type: HIDE_ALERT
	}
}

export const fetchPosts =  () => {
	return {
		type: REQUEST_POSTS
	}
}