import Business from '../models/Business';

const data: Map<string, Business> = new Map();

class BusinessController {
  constructor() {
    data.set("1", Business.generateNew());
    data.set("2", Business.generateNew());
  }

  getBusiness(id: string) {
    return data.get(id);
  }

  getAllBusinesses() {
    let listOfBusinesses: Business[] = [];
    data.forEach((value, key, map) => {
      // console.log(value);
      // console.log(key);
      listOfBusinesses.push(value);
    });
    return listOfBusinesses;
  }

  getHours(id: string) {
    let business = data.get(id);
    
    return business?.hours;
  }
}

export = new BusinessController();