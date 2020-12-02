import InquiryRepository from '../repositories/InquiryRepository';
import BusinessRepository from '../repositories/BusinessRepository';
import { v4 as uuidv4 } from 'uuid';
import Business from '../models/business/Business';

class InquiryController {
  getInquiriesFromBusiness(businessId: string, userId?: string) {
    const inquiries = InquiryRepository.getPublicInquiriesFromBusiness(businessId);
    const business: Business | undefined = BusinessRepository.findOneById(businessId);

    if (userId) {
      if (business?.ownerId === userId) {
        inquiries.push(...InquiryRepository.getPrivateInquiriesFromBusiness(businessId));
      } else {
        inquiries.push(...InquiryRepository.getPrivateInquiriesOfBusinessFromAuthor(businessId, userId));
      }
    }
    return inquiries;
  }

  createInquiry(businessId: string, question: string, userId: string) {
    const inqID = uuidv4(); // this ID is internal so it's okay for it to be a long string

    InquiryRepository.createOne(inqID, businessId, question, userId);
    return { message: 'Successfully created inquiry!' };
  }

  postAnswer(id: string, answer: string) {
    InquiryRepository.postAnswer(id, answer);
    return { message: 'Successfully posted answer!' };
  }

  makePublic(id: string) {
    InquiryRepository.makePublic(id);
    return { message: 'Successfully made inquiry public.' };
  }

  makePrivate(id: string) {
    InquiryRepository.makePrivate(id);
    return { message: 'Successfully made inquiry private.' };
  }
}

export = new InquiryController();
