const checkAuth = (req, res, next) => {

    next(); // Si el  usuario está autenticado, continuamos con la siguiente función
};

export default checkAuth;