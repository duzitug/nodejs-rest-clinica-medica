const Service = require('../service/Service.js');

class DoctorService extends Service {
  constructor() {
    super('Doctor');
  }
}

module.exports = DoctorService;
