const db = require('../models');

class Services {
  constructor(modelName) {
    this.modelName = modelName;
  }

  async findAll(where = {}) {
    return db[this.modelName].findAll({
      where: {...where},
    });
  }

  async pegaUmRegistro(where = {}) {
    return db[this.modelName].findOne({where: {...where}});
  }

  async create(dados) {
    return db[this.modelName].create(dados);
  }

  async atualizaRegistro(dadosAtualizados, id, transacao = {}) {
    return db[this.modelName].update(
      dadosAtualizados,
      {where: {id: id}},
      transacao
    );
  }

  async atualizaRegistros(dadosAtualizados, where, transacao = {}) {
    return db[this.modelName].update(
      dadosAtualizados,
      {where: {...where}},
      transacao
    );
  }

  async apagaRegistro(id) {
    return db[this.modelName].destroy({where: {id: id}});
  }

  async restauraRegistro(id) {
    return db[this.modelName].restore({where: {id: id}});
  }

  async consultaRegistroApagado(id) {
    return db[this.modelName].findOne({
      paranoid: false,
      where: {id: Number(id)},
    });
  }

  async encontraEContaRegistros(where = {}, agregadores) {
    return db[this.modelName].findAndCountAll({
      where: {...where},
      ...agregadores,
    });
  }
}

module.exports = Services;
