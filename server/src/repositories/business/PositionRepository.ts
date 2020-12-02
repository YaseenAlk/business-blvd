import Position from '../../models/business/Position';

class PositionRepository {
  private data: Position[] = [];

  findOneById(businessId: string): Position | undefined {
    return this.data.filter((position) => position.businessId === businessId)[0];
  }

  update(businessId: string, address: string, lat: number, lng: number) {
    const position = this.data.filter((position) => position.businessId === businessId)[0];
    position.address = address;
    position.lat = lat;
    position.lng = lng;
  }
}

export = new PositionRepository();
