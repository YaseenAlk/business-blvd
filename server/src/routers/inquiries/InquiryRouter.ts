// get inquiries for a particular business
// GET /api/inquiries/business/:id

// get all inquiries for a particular business (including private ones)
// GET /api/inquiries/business/:id/all
// (if private, must be signed in)

// get specific question and answer:
// GET /api/inquiries/:id
// (if private, must be signed in)

// post a question (must be signed in):
/*
POST /api/inquiries

{
    businessId: num,
    question: String
}
*/

// edit a question (must be signed in):
/*
PUT /api/inquiries/:id
{
    question: String
}
*/

// delete a question (must be signed in):
/*
DELETE /api/inquiries/:id
*/

// post an answer (must be signed in):
/*
POST /api/inquiries/:id/answer
{
    answer: String
}
*/

// edit an answer (must be signed in):
/*
PUT /api/inquiries/:id/answer
*/

// delete an answer (must be signed in):
/*
DELETE /api/inquiries/:id/answer
*/

// make inquiry public (must be signed in)
/*
POST /api/inquiries/:id/publicity
*/

// make inquiry private (must be signed in)
/*
DELETE /api/inquiries/:id/publicity
*/