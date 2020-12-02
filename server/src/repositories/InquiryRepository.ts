import { Inquiry, Publicity } from '../models/Inquiry';

class InquiryRepository {
  findOneById(id: string): Promise<Inquiry | undefined> {
    return Inquiry.findOne({ id });
  }

  // note that these will return empty lists if the business doesn't exist
  getPublicInquiriesFromBusiness(id: string): Promise<Inquiry[]> {
    return Inquiry.find({ businessId: id, publicity: Publicity.PUBLIC });
  }

  getPrivateInquiriesFromBusiness(businessId: string): Promise<Inquiry[]> {
    return Inquiry.find({ businessId, publicity: Publicity.PRIVATE });
  }

  getPrivateInquiriesOfBusinessFromAuthor(businessId: string, userId: string): Promise<Inquiry[]> {
    return Inquiry.find({ businessId, authorId: userId, publicity: Publicity.PRIVATE });
  }

  createOne(businessId: string, question: string, userId: string): Promise<Inquiry> {
    const newInquiry = new Inquiry(userId, businessId, question);
    return newInquiry.save();
  }

  postAnswer(id: string, answer: string): Promise<Inquiry | undefined> {
    return Inquiry.findOne({ id }).then((inquiry) => {
      if (inquiry) inquiry.answer = answer;
      return inquiry?.save();
    });
  }

  makePublic(id: string): Promise<Inquiry | undefined> {
    return Inquiry.findOne({ id }).then((inquiry) => {
      if (inquiry) inquiry.publicity = Publicity.PUBLIC;
      return inquiry?.save();
    });
  }

  makePrivate(id: string): Promise<Inquiry | undefined> {
    return Inquiry.findOne({ id }).then((inquiry) => {
      if (inquiry) inquiry.publicity = Publicity.PRIVATE;
      return inquiry?.save();
    });
  }
}

export = new InquiryRepository();
