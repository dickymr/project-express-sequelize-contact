const models = require('../../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.getAllAccounts = async (req, res) => {
  try {
    const response = await models.accounts.findAll()
    res.status(200).send({
      message: 'Find Success',
      data: response
    })
  } catch (error) {
    res.status(500).send({
      message: 'Find Error'
    })
  }
}

exports.postCreateAccount = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10)
    req.body.password = bcrypt.hashSync(req.body.password, salt)

    const response = await models.accounts.create(req.body)
    res.status(200).send({
      message: "Insert Success",
      data: response
    })
  } catch (error) {
    res.status(500).send({
      message: "Insert Error"
    })
  }
}

exports.deleteAccount = async (req, res) => {
  try {
    const response = await models.accounts.findByPk(req.params.id)
    await response.destroy()
    res.status(200).send({
      message: 'Delete Success',
      data: response
    })
  } catch (err) {
    res.status(500).send({
      message: 'Delete Error'
    })
  }
}

exports.updateAccount = async (req, res) => {
  try {
    const response = await models.accounts.findByPk(req.params.id)

    await response.update({
      name: req.body.name,
      email: req.body.email
    })

    res.status(200).send({
      message: 'Update Success',
      data: response
    })
  } catch (err) {
    res.status(500).send({
      message: 'Update Error'
    })
  }
}

exports.postLogin = async (req, res) => {
  // Find Account
  const account = await models.accounts.findOne({ where: { email: req.body.email } })

  if (account === null) return res.send('Account Not Found')

  // Compare Password
  const validPassword = await bcrypt.compare(req.body.password, account.password)

  if (!validPassword) return res.send('Password is not valid')

  // Create Token
  const token = jwt.sign({ id: account.id, email: account.email }, process.env.JWT_SECRET, { expiresIn: '7d' })
  res.send({
    message: 'You are logged in',
    token: token
  })
}

exports.getAllDepartment = async (req, res) => {
  try {
    const response = await models.departments.findAll()
    res.status(200).send({
      message: 'Find Success',
      data: response
    })
  } catch (error) {
    res.status(500).send({
      message: 'Find Error'
    })
  }
}

exports.postCreateDepartment = async (req, res) => {
  try {
    const response = await models.departments.create(req.body)
    res.status(200).send({
      message: "Insert Success",
      data: response
    })
  } catch (error) {
    res.status(500).send({
      message: "Insert Error"
    })
  }
}