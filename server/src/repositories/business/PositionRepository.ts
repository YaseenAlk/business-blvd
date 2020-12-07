import Position from '../../models/business/Position';

class PositionRepository {
  generateExample(businessId: string, address: string, lat: number, lng: number) {
    const position = new Position(businessId, address, lat, lng);
    return position.save();
  }

  findOneById(businessId: string): Promise<Position | undefined> {
    return Position.findOne({ businessId });
  }

  update(businessId: string, address: string, lat: number, lng: number): Promise<Position | undefined> {
    return Position.findOne({ businessId }).then((position) => {
      if (position) {
        position.address = address;
        position.lat = lat;
        position.lng = lng;
      }
      return position?.save();
    });
  }
}

export = new PositionRepository();
