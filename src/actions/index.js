export const login = (user) => {
	return {
		type: "LOGIN",
		user: user,
	};
};

export const logout = () => {
	return {
		type: "LOGOUT",
	};
};

export const addMovieFromState = (user) => {
	return {
		type: "ADD",
		user: user
	};
};

export const removeMovieFromState = (user) => {
	return {
		type: "REMOVE",
		user: user
	};
};

