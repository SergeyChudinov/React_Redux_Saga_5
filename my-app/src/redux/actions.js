import { CREATE_POST, SHOW_LOADER, HIDE_LOADER, HIDE_ALERT, SHOW_ALERT, FETCH_POSTS } from './types';

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
	return async dispatch => {
		try {
			dispatch(showLoader());
			const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
			const json = await response.json();
			setTimeout(() => {
				dispatch({
					type: FETCH_POSTS,
					payload: json
				})
				dispatch(hideLoader());
				dispatch(showAlert('Заметки загружены!', 'primary'));
			}, 500)
		} catch (e) {
			dispatch(showAlert('Что-то пошло не так!', 'danger'));
			dispatch(hideLoader());
		}
	}
}