import Business from '../models/business/Business';

const data: Map<string, Business> = new Map();

class BusinessController {
  constructor() {
    data.set('1', Business.generateExample());
    data.set('2', Business.generateExample());
  }

  defaultMethod(): { text: string } {
    return {
      text: `You've reached the ${this.constructor.name} default method`,
    };
  }

  businessExists(id: string) {
    return data.has(id);
  }

  getBusiness(id: string) {
    return data.get(id);
  }

  getAllBusinesses() {
    const listOfBusinesses: Business[] = [];
    data.forEach((value) => {
      listOfBusinesses.push(value);
    });
    return listOfBusinesses;
  }

  getHours(id: string) {
    const business = data.get(id);

    return business?.hours;
  }
}

export = new BusinessController();
