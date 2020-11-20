import { Inquiry } from '../models/Inquiry';

// this is a temporary class until we switch to data persistence
// once we switch to a DB, might not be necessary because we can use typeorm repositories

// however we could still use it to generalize more advanced DB operations

class InquiryRepository {
  private data: Inquiry[] = [];
}

export = new InquiryRepository();
