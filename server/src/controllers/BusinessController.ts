import Business from '../models/Business';

const data: Business[] = [];

class BusinessController {
  constructor() {
    data.push(Business.generateNew());
  }

  defaultMethod() {
    return {
      text: `You've reached the ${this.constructor.name} default method`,
    };
  }

  getHours() {
    console.log(data[0].name);
    return {
      response: data[0].name,
    };
  }
}

export = new BusinessController();