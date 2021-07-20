import axios from 'axios';

//data inicial
const dataInitial = {
	token: '',
	activo: false,
};

const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
const GET_PRUEBA = 'GET_PRUEBA';

//REDUCER
export default function userReducer(state = dataInitial, action) {
	switch (action.type) {
		case GET_USER_SUCCESS:
			localStorage.setItem('token', action.payload);
			return { ...state, token: action.payload, activo: true };
		case GET_PRUEBA:
			return { ...state, goku: action.payload };
		default:
			return state;
	}
}

//acciones
export const getLogin = (data) => async (dispatch, getState) => {
	try {
		const res = await axios
			.post('https://back-cv.herokuapp.com/api/auth/signin', data)
			.catch((err) => {
				console.log(err.response.data);
				return err;
			});
		if (res.data) {
			dispatch({
				type: GET_USER_SUCCESS,
				payload: res.data.token,
			});
		}
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const getToken = (token) => (dispatch, getState) => {
	if (token !== 'null') {
		dispatch({
			type: GET_USER_SUCCESS,
			payload: token,
		});
	}
};
