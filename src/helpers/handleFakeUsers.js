const fakeUsers = require('../../fakeUsersData.json')
const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, '..', '..', 'fakeUsersData.json')
const hanleFakeUsers = () => {
  let currentFakeUsers = [...fakeUsers]

  return {
    getUser(_id) {
      return currentFakeUsers.find(user => user._id == _id)
    },
    addUser(token) {
      currentFakeUsers.push({
        _id: currentFakeUsers.length + 1,
        token
      })

      const fileData = JSON.stringify(currentFakeUsers)
      console.log(fileData)
      // fs.readFile(path, (e)=>console.log(e));
      fs.writeFileSync( filePath, fileData);
      //vừa có bác comment do path. path fs khác với path require
    }
  }
}

module.exports = hanleFakeUsers