const { response,request } = require('express');

const usersGet = (req = request, res = response) => {

  const query = req.query;

  res.json({
    msg: "Get API - Controller",
    query
  });
};

const usersPost = (req, res = response) => {
  const body = req.body;
  
  res.status(404).json({
    msg: "Post API - Controller",
    body
  });
};

const usersPut = (req, res = response) => {

  const id = req.params.id;

  res.status(404).json({
    msg: "Put API - Controller",
    id
  });
};

const usersPatch = (req, res = response) => {
  res.status(404).json({
    msg: "Patch API - Controller",
  });
};

const usersDelete = (req, res = response) => {
  res.status(404).json({
    msg: "Delete API - Controller",
  });
};

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersPatch,
    usersDelete
}
