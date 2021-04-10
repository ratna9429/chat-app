const users = []

const addUser = ({
  id,
  username,
  room
}) => {

  // Clean the Data
  username = username.trim().toLowerCase()
  room = room.trim().toLowerCase()

  // Validate the Data
  if (!username || !room) {
    return {
      error: 'Username & Room are required'
    }
  }

  //Check for existing user
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username
  })

  // Validate username
  if (existingUser) {
    return {
      error: 'Username already taken.'
    }
  }

  //Save User
  const user = {
    id,
    username,
    room
  }
  users.push(user)
  return {
    user
  }
}

const removeUser = (id) => {
  const index = users.findIndex((user) =>
    user.id === id
  )
  if (index !== -1) {
    return users.splice(index, 1)[0]
  }
}

const getUser = (id) => {
  const user = users.find((user) => user.id === id)
  if (!user) {
    return {
      error: 'No such user found'
    }
  }
  return user
}

const getUsersInRoom = (room) => {
  room = room.trim().toLowerCase()
  const user = users.filter((user) => user.room === room)
  return user
}

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom
}