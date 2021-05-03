export const login = (user) => {
	console.log(user);
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

export const addToNominations = (movieId) => {
	return {
		type: "ADD",
		movie: movieId,
	};
};

export const removeFromNominations = (movieId) => {
	return {
		type: "REMOVE",
		movie: movieId,
	};
};
