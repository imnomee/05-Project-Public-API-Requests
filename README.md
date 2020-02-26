# UNIT 5 PROJECT - Public API Requests

https://imnomee.github.io/Public-API-Requests/

In this project, we fetched Random User Data from an API (randomuser.me).
We fetch 12 results and displayed their information on the page,
including picture, name, email, city and state.

When a user clicks on any of the generated card,
A modal box is opend with some extra information about the profile,
including Address, Date of Birth etc
with Buttons to close, previous and next. - Close button will close the modal window - Next button will show the next profile - Prev button will show the previous profile

It won't display any errors if the user is on the first or last record.

We implemented a Search box for the fetch profiles.
When a user enters a search string of more than 2 characters, it will display the result profiles
and if there is not match a message is shown on the page.

Sometimes the results will return multiple profiles,
but user can still navigation through the buttons and get next or prev modal

Some minor changes I have made in the css and display:

    - Changed body background Color
    - Changed the colour of H1 header
    - Changed the cursor for when on card
    - Changed the cursor for when on search submit button
    - Added a new H1 error message with colour when the search returns null
    - Changed the border colour of all cards
    - Removed some margin from the Modal buttons container
