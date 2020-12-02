import InquiryRepository from '../repositories/InquiryRepository';
import BusinessRepository from '../repositories/business/BusinessRepository';
import { Inquiry } from '../models/Inquiry';
import { ReturnObj } from './Common';

class InquiryController {
  getInquiriesFromBusiness(
    id: string,
    userId?: string,
  ): Promise<ReturnObj & ({ data: Inquiry[] } | { message: string })> {
    const returnedInquiries: Inquiry[] = [];

    return BusinessRepository.findOneById(id).then((business) => {
      if (!business) return { status: 404, message: 'Business not found' };
      else
        return InquiryRepository.getPublicInquiriesFromBusiness(id).then((inquiries) => {
          returnedInquiries.push(...inquiries);
          if (!userId) return { status: 200, data: returnedInquiries };

          return (business.ownerId === userId
            ? InquiryRepository.getPrivateInquiriesFromBusiness(id)
            : InquiryRepository.getPrivateInquiriesOfBusinessFromAuthor(id, userId)
          ).then((extraInquiries) => {
            returnedInquiries.push(...extraInquiries);
            return { status: 200, data: returnedInquiries };
          });
        });
    });
  }

  createInquiry(businessId: string, question: string, userId: string): Promise<ReturnObj> {
    return InquiryRepository.createOne(businessId, question, userId).then(() => {
      return { status: 200, message: 'Successfully created inquiry!' };
    });
  }

  postAnswer(id: string, answer: string): Promise<ReturnObj> {
    return InquiryRepository.postAnswer(id, answer).then(() => {
      return { status: 200, message: 'Successfully posted answer!' };
    });
  }

  makePublic(id: string): Promise<ReturnObj> {
    return InquiryRepository.makePublic(id).then(() => {
      return { status: 200, message: 'Successfully made inquiry public.' };
    });
  }

  makePrivate(id: string): Promise<ReturnObj> {
    return InquiryRepository.makePrivate(id).then(() => {
      return { status: 200, message: 'Successfully made inquiry private.' };
    });
  }
}

export = new InquiryController();
