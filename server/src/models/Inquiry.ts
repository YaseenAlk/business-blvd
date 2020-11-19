/*
Inquiry:

    - int id
    - int authorId
    - int businessId
    - string question
    - string? answer  
*/
enum Privacy {
  PUBLIC,
  PRIVATE,
}
export class Inquiry {
  id: number;
  authorId: number;
  businessId: number;
  question: string;
  privacy: Privacy;
  answer?: string;

  constructor() {
    this.id = 1;
    this.authorId = 1;
    this.businessId = 1;
    this.question = 'Is it open?';
    this.privacy = Privacy.PUBLIC;
  }
}
