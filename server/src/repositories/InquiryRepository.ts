import { Inquiry, Publicity } from '../models/Inquiry';

// this is a temporary class until we switch to data persistence
// once we switch to a DB, might not be necessary because we can use typeorm repositories

// however we could still use it to generalize more advanced DB operations

class InquiryRepository {
  private data: Inquiry[] = [];

  findOneById(id: string): Inquiry {
    return this.data.filter((inq) => inq.id === id)[0];
  }

  getPublicInquiriesFromBusiness(id: string): Inquiry[] {
    return this.data.filter((inq) => inq.businessId === id && inq.publicity === Publicity.PUBLIC);
  }

  getPrivateInquiriesFromBusiness(id: string): Inquiry[] {
    return this.data.filter((inq) => inq.businessId === id && inq.publicity === Publicity.PRIVATE);
  }

  getPrivateInquiriesOfBusinessFromAuthor(id: string, userId: string): Inquiry[] {
    return this.data.filter(
      (inq) => inq.businessId === id && inq.authorId === userId && inq.publicity === Publicity.PRIVATE,
    );
  }

  createOne(id: string, businessId: string, question: string, userId: string) {
    const newInquiry = new Inquiry(id, userId, businessId, question);
    this.data.push(newInquiry);
    // await inquiry.save();
  }

  postAnswer(id: string, answer: string) {
    const inquiry = this.data.filter((inq) => inq.id === id)[0];
    inquiry.answer = answer;
    // await inquiry.save();
  }

  makePublic(id: string) {
    const inquiry = this.data.filter((inq) => inq.id === id)[0];
    inquiry.publicity = Publicity.PUBLIC;
    // await inquiry.save();
  }

  makePrivate(id: string) {
    const inquiry = this.data.filter((inq) => inq.id === id)[0];
    inquiry.publicity = Publicity.PRIVATE;
    // await inquiry.save();
  }
}

export = new InquiryRepository();
