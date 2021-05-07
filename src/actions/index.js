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

export const addMovie = (user, movie) => {
	return {
		type: "ADD",
		movies: movie,
		user: user
	};
};

export const removeMovie = (user, movie) => {
	return {
		type: "REMOVE",
		movies: movie,
		user: user
	};
};

