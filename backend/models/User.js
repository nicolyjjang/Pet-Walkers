const Sequelize = require('sequelize')
const db = require('./db')

const User = db.define('users',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_tutor: {
        type: Sequelize.STRING,
        allowNull:false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull:false
    },
    telefone:{
        type: Sequelize.STRING,
        allowNull:false
    },
    sexo: {
        type: Sequelize.STRING,
        allowNull:false
    },
    email: {
        type: Sequelize.STRING,
        allowNull:false
    },
    senha: { 
        type: Sequelize.STRING,
        allowNull:false
    },
    pet1: {
        type: Sequelize.STRING,
        allowNull:false
    },
    pet2:{
        type: Sequelize.STRING,
        allowNull:true
    },
    idade:{
        type: Sequelize.INTEGER,
        allowNull:false
    }
})

// Criar a tabela
//User.sync()
db.sync();

module.exports = User