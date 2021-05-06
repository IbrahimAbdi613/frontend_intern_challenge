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

export const getNominations = (movies) => {
	return {
		type: "GET",
		movies: movies,
	};
};

export const getTrash = (movies) => {
	return {
		type: "GET",
		movies: movies,
	};
};

