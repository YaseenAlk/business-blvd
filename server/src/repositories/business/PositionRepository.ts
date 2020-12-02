import Position from '../../models/business/Position';
import BusinessRepository from './BusinessRepository';

class PositionRepository {
  private data: Position[] = [];

  constructor() {
    const [b1, b2] = BusinessRepository.getExampleBusinessIDs();
    this.data.push(new Position(b1, '123 Seasame Street', 42.362541, -71.09845));
    this.data.push(new Position(b2, '123 Seasame Street', 42.362541, -71.09845));
  }

  findOneById(businessId: string): Position | undefined {
    return this.data.filter((position) => position.businessId === businessId)[0];
  }

  update(businessId: string, address: string, lat: number, lng: number) {
    const position = this.data.filter((position) => position.businessId === businessId)[0];
    if (position) {
      position.address = address;
      position.lat = lat;
      position.lng = lng;
    }
  }
}

export = new PositionRepository();
