import { Inquiry } from '../models/Inquiry';

// this is a temporary class until we switch to data persistence
// once we switch to a DB, might not be necessary because we can use typeorm repositories

// however we could still use it to generalize more advanced DB operations

class InquiryRepository {
  private data: Inquiry[] = [];

  findOneById(id: string): Inquiry {
    return this.data.filter((inq) => inq.id === id)[0];
  }

  getPublicInquiriesFromBusiness(id: string): Inquiry[] {
    return this.data.filter((inq) => inq.businessId === id && inq.privacy === 'public');
  }

  getPrivateInquiriesFromBusiness(id: string): Inquiry[] {
    return this.data.filter((inq) => inq.businessId === id && inq.privacy === 'private');
  }

  getPrivateInquiriesOfBusinessFromAuthor(id: string, userId: string): Inquiry[] {
    return this.data.filter((inq) => inq.businessId === id && inq.authorId === userId && inq.privacy === 'private');
  }

  createOne(id: string, businessId: string, question: string, userId: string) {
    const newInquiry = new Inquiry(id, userId, businessId, question);
    this.data.push(newInquiry);
  }

  postAnswer(id: string, answer: string) {
    const inquiry = this.data.filter((inq) => inq.id === id)[0];
    inquiry.answer = answer;
  }

  makePublic(id: string) {
    const inquiry = this.data.filter((inq) => inq.id === id)[0];
    inquiry.privacy = 'public';
  }

  makePrivate(id: string) {
    const inquiry = this.data.filter((inq) => inq.id === id)[0];
    inquiry.privacy = 'private';
  }
}

export = new InquiryRepository();
