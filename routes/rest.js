var User= require('../controller/user');
var Session= require('../controller/session');
/*var User= require('../controller/visit');
var User= require('../controller/state');
var User= require('../controller/sheet');*/

// API Server Endpoints
module.exports = function(router){
	//Session group
	router.post('/session', Session.createToken)
	//User Group
	//router.use('/users', User.midelware),
	router.post('/users', User.create),
	router.get('/users', User.getAll),
	router.get('/users/:id', User.get),
	router.patch('/users/:id', User.update),
	router.delete('/users/:id', User.delete)

/*	//Visit Group
	router.post('/visits', User.create),
	router.get('/visits', User.getAll),
	router.get('/visits/:id', User.get),
	router.patch('/visits/:id', User.update),
	router.delete('/visits/:id', User.delete)
	//State Group
	router.post('/states', User.create),
	router.get('/states', User.getAll),
	router.get('/states/:id', User.get),
	router.patch('/states/:id', User.update),
	router.delete('/states/:id', User.delete)	
	//Sheet Group
	router.post('/sheets', User.create),
	router.get('/sheets', User.getAll),
	router.get('/sheets/:id', User.get),
	router.patch('/sheets/:id', User.update),
	router.delete('/sheets/:id', User.delete) */
}
