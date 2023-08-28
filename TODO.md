1. Display Posts:
   Scenario: When a user accesses the homepage, they should see a list of the latest 10 posts.

   - Fetch data from /posts.
   - Display the titles and a snippet of the content.
   - Show a link/button to navigate to the full post.

2. Search for a Post:

   - Scenario: A user should be able to search for posts based on titles.
   - Implement a search box.
   - As the user types, filter the displayed list based on the title matching the search query.

3. User's Posts:

   - Scenario: Display all posts made by a specific user.
   - Fetch users from /users to populate a dropdown.
   - When a user is selected from the dropdown, fetch and display all posts by that user from /posts?userId={selectedUserId}.

4. Post Details:
   Scenario: A user should be able to click on a post title and view the details of that post.

   - Navigate to a PostDetail page or view.
   - Display the post's title, content, and associated user information.
   - Optionally, show the comments related to that post fetched from /posts/{postId}/comments.

5. Comments on a Post:
   Scenario: Under each post detail, a user should see comments related to that post.
   - Fetch comments from /posts/{postId}/comments.
   - Display the name of the commenter, email, and the comment body.
