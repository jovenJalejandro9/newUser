'use strict';
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config')
const user1 = {
  id : 1,
  psw: "$2a$04$Sn9LB2C0DLuTTeQlR4qaHOVRooaaynPxX0J9iRH879oaJoqG/GfD.",
  nickName: "Jalejandro", 
  firstSurname : "Moreno"
},
user2 = {
  id : 2,
  psq: "$2a$04$u7jKR8nIFqe5Q56pv20ZGuTmlrIULCm3B/jVNHuNFR3MY3pKI5I5u",
  nickName: "Sonia", 
  firstSurname : "Lolo"
}
const collection = [user1,user2]

function findUserByNick (collect, nick){
  for(var i = 0; i < collect.length ; i++){
    if (collect[i].nickName.localeCompare(nick)){
      return collect[i]
    }
  }
}



module.exports = {
  createToken: (body) => {
    // create a token
    //comprobacion del nick y psw!! como lo linkamos desde aqui!! 
		if(body.nickName || body.password){
			var user = findUserByNick(collection, body.nickName)
			var infoToken = {token: jwt.sign({ id:user.id},config.secretKey)}
	   	return Promise.resolve(infoToken)	
		}else{
			return Promise.reject("Check if the nickname or password are correct")
		}
  }
}



