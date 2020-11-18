/*
Properties

- Username
- Password
- Followed Businesses
- Email

Methods:

- Change username?
- Change Password?
- Change email
- Follow a Business
- Unfollow a Business
- Get followed businesses

- Sign up

- Sign out
- Sign in
*/

/*

// Get user info
GET /api/users/:id

// create account
POST /api/users
{
    email: "email@email.com",
    username: "username",
    password: "password"
}

// edit username or password (probably just email/password...)
PUT /api/users/:id
{
    (optional) username: "username",
    (optional) password: "password",
    (optional) email: "email@email.com"
}

// delete account
DELETE /api/users/:id

// sign in
POST /api/users/:id/signin

// sign out
DELETE /api/users/:id/signout

// check following status
GET /api/businesses/:id/isFollowing

// follow a business (uses session)
POST /api/businesses/:id/follow

// unfollow a business (uses session)
DELETE /api/businesses/:id/follow

// get followed businesses (uses session)
GET /api/businesses/following
*/