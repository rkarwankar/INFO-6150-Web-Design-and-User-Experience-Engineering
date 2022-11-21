Node, MongoDB, and Express were used along with Postman. Bcrypt was used for password security.

1. Creates a user which takes 3 parameters full name, email and password. Enforced a strong password rule and added validation for email and full name.
   API Endpoint:
   POST: /user/create – User creation with a meaningful message if the user email or password is invalid

2. Updates the user details (name and password only). Email does not get updated at any point. A proper error message is shown if the user is not present in the database.
   API Endpoint:
   PUT: /user/edit – Add validations for full name and password

3. Deletes the user by taking the user's email as input
   API Endpoint:
   DELETE: /user/delete

4. Gets all the users' email addresses and passwords stored in the database
   API Endpoint:
   GET: /user/getAll
