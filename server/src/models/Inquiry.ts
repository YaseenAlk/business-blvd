/*
Inquiry:

    - int id
    - int authorId
    - int businessId
    - string question
    - string? answer  
*/

export class Inquiry {
  private _id: string;
  private _authorId: string;
  private _businessId: string;
  private _question: string;
  private _privacy: 'public' | 'private';
  private _answer?: string;

  constructor(
    id: string,
    authorId: string,
    businessId: string,
    question: string,
    privacy?: 'public' | 'private',
    answer?: string,
  ) {
    this._id = id;
    this._authorId = authorId;
    this._businessId = businessId;
    this._question = question;
    this._privacy = privacy || 'private';
    if (answer) this._answer = answer;
  }

  get id(): string {
    return this._id;
  }

  get authorId(): string {
    return this._authorId;
  }

  get businessId(): string {
    return this._businessId;
  }

  get question(): string {
    return this._question;
  }
  set question(newQuestion: string) {
    this._question = newQuestion;
  }

  get privacy(): 'public' | 'private' {
    return this._privacy;
  }
  set privacy(newPrivacy: 'public' | 'private') {
    this._privacy = newPrivacy;
  }

  get answer(): string | undefined {
    return this._answer;
  }
  set answer(newAnswer: string | undefined) {
    this._answer = newAnswer;
  }
}
