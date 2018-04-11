const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  console.log('data: ', data)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const changePassword = function (data) {
  console.log('data is ', data)
  console.log('store.user is ', store.user)
  return $.ajax({
    url: config.apiUrl + '/change-password/:id',
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + `/sign-out/${store.user.id}`,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const create = function () {

}
module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
