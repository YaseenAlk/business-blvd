import Business, { BusinessJSON } from '../models/business/Business';
import HoursRepository from './business/HoursRepository';
import PositionRepository from './business/PositionRepository';
import RatingsRepository from './business/RatingsRepository';
import SocialsRepository from './business/SocialsRepository';
import TagsRepository from './business/TagsRepository';

import fs from 'fs';
const csv = fs.readFileSync('./src/repositories/business_examples.csv');

interface BusinessCSV {
  businessId: string;
  name: string;
  description: string;
  ownerId: string | null;
  followers: string[];
  phone: string;
  internalURL: string;
  externalURL: string;
  facebook: string;
  twitter: string;
  instagram: string;
  address: string;
  lat: number;
  lng: number;
}

export default class BusinessExamples {
  static async loadCSV(): Promise<void> {
    let rows = csv.toString().split('\n');
    rows = rows.slice(1); // remove header row
    rows.forEach(async (businessRow) => {
      const bs = businessRow.split(',');
      const entireBusinessObj: BusinessCSV = {
        businessId: bs[0],
        name: bs[1],
        description: bs[2],
        ownerId: bs[3] || null,
        followers: [],
        phone: bs[5],
        internalURL: bs[6],
        externalURL: bs[7],
        facebook: bs[8],
        twitter: bs[9],
        instagram: bs[10],
        address: bs[11],
        lat: parseFloat(bs[12]),
        lng: parseFloat(bs[13]),
      };

      const businessId = entireBusinessObj.businessId;
      const exists = await Business.findOne({ businessId }).then((business) => business !== undefined);
      if (exists) {
        return;
      } else {
        // unloaded businesses reach here, time to load and save them
        return Promise.all([
          BusinessExamples.loadBusiness(entireBusinessObj),
          BusinessExamples.loadHours(entireBusinessObj),
          BusinessExamples.loadPosition(entireBusinessObj),
          BusinessExamples.loadRatings(entireBusinessObj),
          BusinessExamples.loadSocials(entireBusinessObj),
          BusinessExamples.loadTags(entireBusinessObj),
        ]);
      }
    });
  }

  private static async loadBusiness(bs: BusinessCSV) {
    const businessJSON: BusinessJSON = {
      name: bs.name,
      description: bs.description,
      businessId: bs.businessId,
      followers: bs.followers,
      ownerId: bs.ownerId,
      internalURL: bs.internalURL,
      externalURL: bs.externalURL,
      phone: bs.phone,
    };

    const business = new Business(businessJSON);
    return business.save();
  }

  private static async loadHours(bs: BusinessCSV) {
    return HoursRepository.generateExample(bs.businessId);
  }

  private static async loadPosition(bs: BusinessCSV) {
    return PositionRepository.generateExample(bs.businessId, bs.address, bs.lat, bs.lng);
  }

  private static async loadRatings(bs: BusinessCSV) {
    return RatingsRepository.generateExample(bs.businessId);
  }

  private static async loadSocials(bs: BusinessCSV) {
    return SocialsRepository.generateExample(bs.businessId, bs.facebook, bs.twitter, bs.instagram);
  }

  private static async loadTags(bs: BusinessCSV) {
    return TagsRepository.generateExamples(bs.businessId);
  }
}
