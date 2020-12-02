import Position from '../../models/business/Position';
import BusinessRepository from './BusinessRepository';

class PositionRepository {
  generateExamples(): Promise<Position> {
    const [b1, b2] = BusinessRepository.getExampleBusinessIDs();
    const p1 = new Position(b1, '123 Seasame Street', 42.362541, -71.09845);
    const p2 = new Position(b2, '124 Seasame Street', 42.362545, -71.09855);
    return Position.findOne({ businessId: b1 }).then((position) => {
      if (!position)
        return p1.save().then(() => {
          return p2.save();
        });
      return position;
    });
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
