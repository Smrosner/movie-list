const getUsers = async (req, res) => {
  try {
    console.log(req.body);
  } catch (err) {
    console.error(err.message);
  }
};

// const getUserById = (req, res) => {

// }

// const createUser = (req, res) => {

// }

// const updateUser = (req, res) => {

// };

// const deleteUser = (req, res) => {

// };

module.exports = {
  getUsers, //,
  // getUserById,
  // createUser,
  // updateUser,
  // deleteUser,
};
