import { TSMap } from 'typescript-map';

import Business from '../../models/business/Business';
import { Days } from '../../models/business/BusinessHours';

type ReturnObj = {
  status: number;
  data: any;
};

const data: TSMap<string, Business> = new TSMap();

class BusinessController {
  constructor() {
    data.set('1', Business.generateExample());
    data.set('2', Business.generateExample());
  }

  /***************
  DEFAULT METHOD
  ****************/
  defaultMethod(): ReturnObj {
    return {
      status: 200,
      data: `You've reached the ${this.constructor.name} default method.`,
    };
  }

  /***************
  GET BUSINESSES METHODS
  ****************/
  businessExists(id: string): ReturnObj {
    return {
      status: 200,
      data: data.has(id),
    };
  }

  getBusiness(id: string): ReturnObj {
    if (id == 'all') {
      return { status: 200, data: this.getAllBusinesses() };
    } else {
      const businessExists = this.businessExists(id);
      if (businessExists) {
        return { status: 200, data: [data.get(id)] };
      } else {
        return { status: 404, data: `No business found with id ${id}` };
      }
    }
  }

  getAllBusinesses(): Business[] {
    const listOfBusinesses: Business[] = [];
    data.forEach((value) => {
      listOfBusinesses.push(value);
    });
    return listOfBusinesses;
  }

  /***************
  LOCATION METHODS
  ****************/
  getLocation(id: string): ReturnObj {
    const businessExists = this.businessExists(id);
    if (businessExists) {
      const location = data.get(id)?.location;
      return {
        status: 200,
        data: {
          address: location?.address,
          lat: location?.lat,
          lng: location?.lng,
        },
      };
    } else {
      return { status: 404, data: `No business found with id ${id}` };
    }
  }

  setLocation(id: string, address: string, lat: number, lng: number): ReturnObj {
    // const businessExists = this.businessExists(id);
    const business = data.get(id);
    if (business) {
      business.location.address = address;
      business.location.lat = lat;
      business.location.lng = lng;
      return { status: 200, data: `Updated address successfully` };
    } else {
      return { status: 404, data: `No business found with id ${id}` };
    }
  }

  /***************
  HOURS METHODS
  ****************/
  getHours(id: string): ReturnObj {
    const businessExists = this.businessExists(id);
    if (businessExists) {
      return { status: 200, data: data.get(id)?.hours.getHours() };
    } else {
      return { status: 404, data: `No business found with id ${id}` };
    }
  }

  setHours(id: string, day: Days, openTime: number, closeTime: number): ReturnObj {
    const businessExists = this.businessExists(id);
    if (businessExists) {
      return { status: 200, data: data.get(id)?.hours.setHours(day, openTime, closeTime) };
    } else {
      return { status: 404, data: `No business found with id ${id}` };
    }
  }
}

export = new BusinessController();
