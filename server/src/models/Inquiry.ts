/*
Inquiry:

    - int id
    - int authorId
    - int businessId
    - string question
    - string? answer  
*/

export class Inquiry {
    id: number;
    authorId: number;
    businessId: number;
    question: string;
    privacy: 'public' | 'private';
    answer?: string;
}