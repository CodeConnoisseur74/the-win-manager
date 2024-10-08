# **Rewind Testing**

## **CONTENTS**

* [Manual Testing](#manual-testing)
    * [Full Testing](#full-testing)
    * [Defensive Testing](#defensive-testing)
    * [Form Testing](#form-testing)
    * [Console Error Testing](#console-error-testing)
* [Automated Testing](#automated-testing)
    * [React Jest Testing](#react-jest-testing)
    * [Django Unit Testing](#django-unit-testing)
* [Validators](#validators)
    * [ESLint for Javascript and JSX Validation](#eslint-for-javascript-and-jsx-validation)
    * [PEP8 Validation](#pep8-validation)
    * [W3C Markup HTML Validator](#w3c-html-markup-validator)
    * [W3C CSS Validator](#w3c-css-validator)
* [Performance](#performance)
    * [Lighthouse](#lighthouse)
    * [Wave Accessibility](#wave-accessibility)
* [Responsiveness](#responsiveness)

# **Manual Testing**

## **Full Testing**

## **ALL USERS**

| Action | Expected Outcome | Pass/Fail |
| ---- | ---- | :----: |
| User enters site url https://rkdev-rewind-ed88f8459fe7.herokuapp.com/ in a web browser  | User directed to home page  | Pass |

## NavBar

| Action | Expected Outcome | Pass/Fail |
| ---- | ---- | :----: |
| User clicks on brand name on the left of the navbar | User redirected to the home page | Pass |
| Hover over  and move away from brand name in nav bar | Link opacity added to brand name on hover and no opacity on moving away. Cursor turns to pointer | Pass |
| User hovers over nav bar links  | Link colour transformed on hover and returns to original on moving away. Cursor turns to pointer | Pass   |
| User hovers over hamburger toggler on screens below 992px | Cursor turns to pointer | Pass | 
| User clicks on hamburger toggler on screens below 992px when menu items collapsed | Vertical navbar links expanded | Pass |
| User clicks on hamburger toggler or anywhere else on the screen on screens below 992px when menu items expanded. | Vertical navbar links collapsed | Pass |
| Navigate between pages from nav bar links | Navbar link for active page text colour changes colour to indicate active | Pass |


## Footer

| Action | Expected Outcome | Pass/Fail |
| ---- | ---- | :----: |
|  |  |   |
| Hover over and move away from footer icon link | Link colour transformed on hover and returns to original on moving away | Pass |
| User clicks on GitHub Icon in footer | New browser tab opens displaying GitHub repo for Rewind | Pass |

## SnapshotsPage - HOME

| Action | Expected Outcome | Pass/Fail |
| ---- | ---- | :----: |
| User navigates to home page  | Snapshots listed in descending order and sorted by date updated.  Search bar and sort icons appear at top of page above first snapshot  | Pass |
| User scrolls through snapshots | More snapshots load automatically as user scrolls (if more than 5 exist) | Pass |
| User enters text into the search bar | Results filter dynamically with a 1 second pause after the user stops typing.  Snapshots will be displayed if text input matches any text in the title, era, genre or category of the snapshot | Pass |
| User enters text into the search bar that does not match any text in the defined API search fields | Message displayed to user, informing that no snapshots could be found and recommending to adjust their search phrase | Pass |
| User hovers over each of the sort icons | Icon colour transformed on hover and returns to original on moving away | Pass |
| User clicks on 'Recommendations' sort icon | Snapshots sorted by recommendation count (descending) without the page refreshing | Pass |
| User clicks on 'Comments' sort icon | Snapshots sorted by comment count (descending) without the page refreshing | Pass |
| User clicks on 'Date' sort icon | Snapshots sorted by date updated (descending) without the page refreshing | Pass |

## Snapshot

| Action | Expected Outcome | Pass/Fail |
| ---- | ---- | :----: |
| User navigates to home page | Each snapshot in the list displays an image, title, description (if it exists), profile avatar and name of the snapshot owner, and date updated.  The number of recommendations and number of comments should be displayed for each snapshot.  If approved samples belong to the snapshot a waveform icon should be displayed | Pass |
| User hovers or clicks on recommendation icon | Icon colour transformed on hover and returns to original on moving away.  Tooltip displayed, informing user that they must sign in to recommend a snapshot | Pass |
| User hovers over comment icon | Icon colour transformed on hover and returns to original on moving away | Pass |
| User clicks on comments icon | User redirected to detail page for associated snapshot | Pass |
| User hovers over waveform icon | Opacity effect applied on hover and returns to original on moving away.  Tooltip displayed, informing user that samples are available for this snapshot | Pass |
| User clicks on waveform icon | User redirected to detail page for associated snapshot | Pass |

## SnapshotPage

| Action | Expected Outcome | Pass/Fail |
| ---- | ---- | :----: |
| User clicks on snapshot image, comments icon or waveform icon | User redirected to detail page for associated snapshot.  Approved samples associated with the snapshot are listed in date created descending order below the snapshot. First 5 comments associated with the snapshot are displayed in date created descending order below any samples.  If no comments exist, display message to inform user | Pass |
| User scrolls through comments | More comments load automatically as user scrolls (if more than 5 exist) | Pass |
| User clicks play button of audio player | Playback of sample begins | Pass |
| User clicks pause button of audio player | Playback of sample stops | Pass |

## ProfilePage

| Action | Expected Outcome | Pass/Fail |
| ---- | ---- | :----: |
| User clicks on avatar of a profile | User redirected to the profile page of the associated profile.  Stats for the snapshots count, followers count and following count associated with the profile are displayed along side the profile image and name.  All snapshots owned by the profile are listed below | Pass |

## **UNAUTHENTICATED USER**

## NavBar

| Action | Expected Outcome | Pass/Fail |
| ---- | ---- | :----: |
| User enters site url https://rkdev-rewind-ed88f8459fe7.herokuapp.com/ in a web browser | Navbar displays links for Home, Sign In and Sign Up | Pass |
| User clicks on 'Home' navbar link | User redirected to the home page | Pass |
| User clicks on 'Sign Up' navbar link | User redirected to Sign Up Form | Pass |
| User clicks on 'Sign In' navbar link | User redirected to Sign In Form | Pass |

## SnapshotsPage - HOME

| Action | Expected Outcome | Pass/Fail |
| ---- | ---- | :----: |
| User navigates to home page | Hero Image, 'Take a trip back in time' heading and call to action button displayed to right of snapshot list. (Appears above snapshot list on mobile devices below 992px) | Pass |
| User hovers over 'Get started' call to action button | Button colour transformed on hover and returns to original on moving away | Pass | 
| User clicks on 'Get started' call to action button | User redirected to 'Sign Up' page | Pass |

## SignUpForm

| Action | Expected Outcome | Pass/Fail |
| ---- | ---- | :----: |
|  |  |   |
| User hovers over 'Sign Up' button on sign up form | Button hover transformation applied | Pass |
| User clicks on 'Sign Up' button with a valid form | User redirected to Sign In Form pre-populated with new user details | Pass |
| User hovers over 'Sign In' redirect link | Link text colour changes to site secondary colour | Pass |
| User clicks on 'Sign In' redirect link | User redirected to Sign In Form | Pass |

## SignInForm

| Action | Expected Outcome | Pass/Fail |
| ---- | ---- | :----: |
| User hovers over 'Sign In' button on login form  | Button hover transformation applied | Pass |
| User clicks on 'Sign In' button with a valid form | User logged in and redirected to the home page. A bootstrap toast is displayed to inform the user they are successfully logged in | Pass |
| User hovers over 'Sign Up' redirect link | Link text colour changes to site secondary colour | Pass |
| User clicks on 'Sign Up' redirect link | User redirected to Sign Up Form | Pass |

## **AUTHENTICATED USER**

## NavBar

| Action | Expected Outcome | Pass/Fail |
| ---- | ---- | :----: |
| User signs in with valid credentials | Navbar displays links: Home, For You, Pinned, Sign Out and Profile Avatar | Pass |
| User clicks on 'Home' navbar link | User redirected to the home page | Pass |
| User clicks on 'For You' navbar link | User redirected to page displaying snapshots for profiles they are following | Pass |
| User clicks on 'Pinned' navbar link | User redirected to page displaying snapshots they have pinned | Pass |
| User clicks on 'Profile/ Avatar' navbar link | User redirected to their own profile page | Pass |
| User clicks on 'Sign Out' navbar link | User logged out.  A bootstrap toast is displayed to inform the user they are successfully logged out | Pass |

## Snapshot

| Action | Expected Outcome | Pass/Fail |
| ---- | ---- | :----: |
| User hovers over or clicks on recommendation icon when they own the snapshot | Tooltip displayed, informing user that they cannot recommend their own snapshot | Pass |
| User clicks on recommendation icon for a snapshot owned by another user | Recommendation icon turns solid colour and recommendation count increments by 1. Toast message displayed informing user they have recommended the snapshot | Pass |
| User clicks on recommendation icon for a snapshot they have already recommended | Recommendation icon turns to outline and recommendation count decreases by 1. Toast message displayed informing user they have removed recommendation for the snapshot | Pass |
| Hover and click on bookmark icon below snapshot | Icon outline changes colour on hover and turns solid colour on click to indicate that the snapshot has been pinned.  Toast message displayed informing user they have pinned the snapshot | Pass |
| Hover and click on bookmark icon below snapshot that has already been pinned | Icon changes colour on hover and turns to outline icon on click to indicate that the snapshot has been unpinned.  Toast message displayed informing user they have unpinned the snapshot | Pass |

## SnapshotPage

| Action | Expected Outcome | Pass/Fail |
| ---- | ---- | :----: |
| User clicks on snapshot image, comments icon or waveform icon | User redirected to detail page for associated snapshot.  Sample upload form and Comment submit form displayed above snapshot.  Any samples that have been approved by site admin are visible to all users.  Samples that have not been approved are only visible to the owner.  For any comments owned by the current user, an edit and delete icon is displayed next to the comment.  For any samples owned by the current user, a delete icon is displayed next to the sample.  An edit and delete button is also displayed for the snapshot itself if the user owns the snapshot | Pass |
| User clicks on edit icon next to a snapshot they own | User redirected to Snapshot Edit Form | Pass |
| User clicks on delete icon next to a snapshot they own | Modal displayed to confirm deletion.  Upon confirming the action, snapshot deleted and removed from snapshot list. Snapshot count for the profile of the owner should decrease by 1.  Toast message displayed informing user they have deleted their snapshot | Pass |
| User attempts to post an empty comment | 'Post' button has opacity effect applied to indicate that it is disabled and clicking has no effect | Pass |
| User creates and submits a new comment | 'Post' button becomes active as the user types text.  Once posted, the comment appears at top of the comments list and toast message is displayed informing user they have added a comment.  Created date should display as 'now' initially (not visible if user owns the comment).  Comment count should increase by 1 | Pass |
| User selects sample file and submits | Sample appears below snapshot with opacity effect applied. On hovering over pending icon, a tooltip is used to convey message that approval is pending.  A delete icon is displayed next to the sample | Pass |
| User clicks on edit icon next to a comment they own | Comment edit form displayed, pre-populated with existing comment | Pass |
| User clicks on Comment edit form cancel button | Comment edit form hidden | Pass |
| User amends comment and clicks on Comment edit form save button | Comment edit form hidden and amended comment content displayed.  Toast message displayed informing user they have updated their comment | Pass |
| User clicks on delete icon next to a comment they own | Modal displayed to confirm deletion.  Upon confirming the action, comment deleted and removed from comment list. Comment count decreases by 1. Toast message displayed informing user they have deleted their comment | Pass |
| User clicks on delete icon next to a sample they own | Modal displayed to confirm deletion.  Upon confirming the action, sample deleted and removed from sample list. Toast message displayed informing user they have deleted their sample | Pass |

## SnapshotsCreateForm

| Action | Expected Outcome | Pass/Fail |
| ---- | ---- | :----: |
| User clicks on Add Snapshot Icon | Snapshot Create Form displayed | Pass |
| User clicks on Cancel button | User directed back to the page they were previously on | Pass |
| User completes valid field entries and clicks on 'create' button | User redirected to the snapshot detail page of the newly created snapshot and toast message displayed to confirm successful creation | Pass |

## SnapshotEditForm

| Action | Expected Outcome | Pass/Fail |
| ---- | ---- | :----: |
| User clicks on pencil icon for a snapshot that they own | User directed to Snapshot edit page | Pass |
| User clicks on Snapshot Edit Form cancel button | User redirected back to Snapshot detail Page | Pass |
| User updates any snapshot fields and clicks save button | User redirected back to Snapshot detail Page and amended information displayed.  Toast message displayed informing user they have updated their snapshot | Pass |
| User clicks save button with no fields updated | User redirected back to Snapshot detail Page | Pass | 

## SnapshotsPage - FOR YOU

| Action | Expected Outcome | Pass/Fail |
| ---- | ---- | :----: |
|  |  |   |
| User navigates to 'For You' page | All snapshots belonging to any profiles that the current user is following are displayed.  If the current user is not following any profiles, a message informs them of this and encourages them to start following | Pass |
| User sets preferences for their profile | Snapshots are filtered based on user preferences | Pass |
| User updates preferences for their profile | Filtering of snapshots adjusted based on the updated user preferences | Pass |

## SnapshotsPage - PINNED

| Action | Expected Outcome | Pass/Fail |
| ---- | ---- | :----: |
|  |  |   |
| User navigates to 'Pinned' page | All snapshots that the user has pinned are displayed.  Most recently pinned is displayed first.  If they have not pinned any snapshots, a message informs them of this | Pass |
| User unpins a snapshot | The list of snapshots is updated to reflect this change, with the unpinned snapshot no longer visible | Pass |

## RelevantProfile - HOME, FOR YOU, PINNED, PROFILE PAGE

| Action | Expected Outcome | Pass/Fail |
| ---- | ---- | :----: |
| User navigates to home, 'For You' or 'Pinned' page | If the user has not added any preference information to their profile, a 'Tell us more' box directing them to their profile edit page is displayed to the right of snapshot list. (Appears above snapshot list on mobile devices below 992px).  A list of 'popular profiles' appears below.  This is sorted (descending order) by the number of followers each profile has. | Pass |   
| User sets their preferences on the profile edit page | 'Profiles you might like' are displayed by matching current user preferences to other profile preferences. The current user's profile is not displayed as part of these suggestions | Pass |
| User sets their preferences on the profile edit page but there are no matches to the preferences of other profiles | The 'Tell us more' box and 'popular profiles' remain displayed | Pass | 
| User clicks on the 'follow' button next to a profile | Button changes to display 'unfollow'.  The 'followers' count for the selected profile and the 'following' count for the current user increment by 1. | Pass |
| User clicks on the 'unfollow' button next to a profile | Button changes to display 'follow'.  The 'followed' count for the selected profile and the 'following' count for the current user decrease by 1. | Pass |

## ProfilePage

| Action | Expected Outcome | Pass/Fail |
| ---- | ---- | :----: |
| Authenticated user navigates to their own profile page | Icons for edit profile, change username and change password are displayed below their profile stats.  All snapshots owned by the current user are listed below their profile info | Pass |
| User clicks on edit profile icon | User redirected to Profile Edit Form | Pass |
| User clicks on change username icon | User redirected to Username Form | Pass |
| User clicks on change password icon | User redirected to User Password Form | Pass |
| All users navigate to another user's profile page | Picture and name displayed. Stats for snapshot count, follower count and following count associated with the profile are displayed.  All snapshots belonging to the profile are listed | Pass |
| Authenticated user navigates to another user's profile page | Additional to the info displayed to all users, a follow/unfollow button is displayed | Pass |

## ProfileEditForm

| Action | Expected Outcome | Pass/Fail |
| ---- | ---- | :----: |
| User clicks on Profile Edit Form cancel button | User redirected back to Profile Page | Pass |
| User updates profile information and clicks save button | User redirected back to Profile Page and amended information displayed.  Toast message displayed informing user they have updated their profile | Pass |

## UsernameForm

| Action | Expected Outcome | Pass/Fail |
| ---- | ---- | :----: |
| User clicks on Username Form cancel button | User redirected back to Profile Page | Pass |
| User updates username and clicks save button | User redirected back to Profile Page and amended information displayed.  Toast message displayed informing user they have updated their username | Pass |
| User signs out and attempts sign in using updated username | User signed in successfully | Pass |

## UserPasswordForm

| Action | Expected Outcome | Pass/Fail |
| ---- | ---- | :----: |
| User clicks on User Password Form cancel button | User redirected back to Profile Page | Pass |
| User updates, confirms updated password and clicks save button | User redirected back to Profile Page.  Toast message displayed informing user they have updated their password | Pass |
| User signs out and attempts to sign in using updated password | User signed in successfully | Pass |

## Sign Out

| Action | Expected Outcome | Pass/Fail |
| ---- | ---- | :----: |
| Authenticated user clicks 'sign out' nav link | User signed out and only has access to unauthenticated site content.  Toast message displayed informing the user that they have signed out | Pass |

<br>

[Back to top &uarr;](#contents)

## **Defensive Testing**

To check that users cannot access restricted pages by directly entering a url path, I manually tested the following scenarios:

### **User Status: Not logged in**

| URL Tested | Expected Outcome | Note | Pass/Fail |
| ---- | ---- | ---- | :----: |
| https://rkdev-rewind-ed88f8459fe7.herokuapp.com/snapshots/create | User redirected to Home Page | | Pass |
| https://rkdev-rewind-ed88f8459fe7.herokuapp.com/snapshots/11/edit | User redirected to Home Page | | Pass | 
| https://rkdev-rewind-ed88f8459fe7.herokuapp.com/profiles/12/edit | User redirected to Home Page | valid profile id | Pass |
| https://rkdev-rewind-ed88f8459fe7.herokuapp.com/profiles/12/edit/username | User redirected to Home Page | valid profile id | Pass |
| https://rkdev-rewind-ed88f8459fe7.herokuapp.com/profiles/12/edit/password | User redirected to Home Page | valid profile id | Pass |
| https://rkdev-rewind-ed88f8459fe7.herokuapp.com/snapshots/99/edit | User redirected to Home Page | invalid profile id  | Pass |
| https://rkdev-rewind-ed88f8459fe7.herokuapp.com/profiles/99/edit | User redirected to Home Page | invalid profile id  | Pass |
| https://rkdev-rewind-ed88f8459fe7.herokuapp.com/profiles/99/edit/username | User redirected to Home Page | invalid profile id | Pass |
| https://rkdev-rewind-ed88f8459fe7.herokuapp.com/profiles/99/edit/password | User redirected to Home Page | invalid profile id | Pass |

### **User Status: Logged in**

| URL Tested | Expected Outcome | Note | Pass/Fail |
| ---- | ---- | ---- | :----: |
| https://rkdev-rewind-ed88f8459fe7.herokuapp.com/profiles/12/edit | User redirected to Home Page | valid profile id belongs to another user | Pass |
| https://rkdev-rewind-ed88f8459fe7.herokuapp.com/snapshots/11/edit | User redirected to Home Page | valid snapshot id belongs to another user | Pass |
| https://rkdev-rewind-ed88f8459fe7.herokuapp.com/profiles/12/edit/username | User redirected to Home Page | valid profile id belongs to another user | Pass |
| https://rkdev-rewind-ed88f8459fe7.herokuapp.com/profiles/12/edit/password | User redirected to Home Page | valid profile id belongs to another user | Pass |
| https://rkdev-rewind-ed88f8459fe7.herokuapp.com/snapshots/99/edit | User redirected to Home Page | invalid profile id  | Pass |
| https://rkdev-rewind-ed88f8459fe7.herokuapp.com/profiles/99/edit | User redirected to Home Page | invalid profile id  | Pass |
| https://rkdev-rewind-ed88f8459fe7.herokuapp.com/profiles/99/edit/username | User redirected to Home Page | invalid profile id | Pass |
| https://rkdev-rewind-ed88f8459fe7.herokuapp.com/profiles/99/edit/password | User redirected to Home Page | invalid profile id | Pass |

### **All users**

| URL Tested | Expected Outcome | Note | Pass/Fail |
| ---- | ---- | ---- | :----: |
| https://rkdev-rewind-ed88f8459fe7.herokuapp.com/invalid | 404 page displayed | | Pass |

<br>

[Back to top &uarr;](#contents)

## **Form Testing**

All forms have been checked thoroughly to ensure they cannot be submitted until all fields are valid.

### **Snapshot Create Form**

| Field | Action | Expected Outcome | Pass/Fail |
| ---- | ---- | ---- | ---- |
| title | Input > 150 characters | Form prevents input of any additional characters | Pass |
| title | Input empty | Form displays warning 'This field may not be blank' | Pass |
| image | No file selected | Alert warns 'The submitted data was not a file. Check the encoding type on the form.'| Pass |
| image | File selected exceeds 2MB in size | Alert warns 'Please choose an image smaller than 2MB' | Pass |
| image | File selected width > 4096px | Alert warns 'Image width larger than 4096px!' | Pass |
| image | File selected height > 4096px | Alert warns 'Image height larger than 4096px!' | Pass |
| genre | No genre selected from dropdown menu | Form displays warning 'This field may not be null.' | Pass |
| era | No era selected from dropdown menu | Form displays warning 'This field may not be null.' | Pass |
| category | No era selected from dropdown menu | Form displays warning 'This field may not be null.' | Pass |

<br>

### **Snapshot Edit Form**

The Snapshot Edit form is pre-populated with data for the specified snapshot.  If no changes are made and the form is submitted there should be no validation warnings.  Changes made to the title or image fields should throw an alert on submission if the updated field is no longer valid.

| Field | Action | Expected Outcome | Pass/Fail |
| ---- | ---- | ---- | ---- |
| title | Input > 150 characters | Form prevents input of any additional characters | Pass |
| title | Input empty | Form displays warning 'This field may not be blank' | Pass |
| image | New file selected exceeds 2MB in size | Alert warns 'Please choose an image smaller than 2MB' | Pass |
| image | New file selected width > 4096px | Alert warns 'Image width larger than 4096px!' | Pass |
| image | New file selected height > 4096px | Alert warns 'Image height larger than 4096px!' | Pass |

<br>

### **Comment Create/ Edit Form**

Prevention of new empty comments being submitted is handled by disabling the submit button until text has been entered.

| Field | Action | Expected Outcome | Pass/Fail |
| ---- | ---- | ---- | ---- |
| content | No text entered | Post button remains disabled and user unable to submit form | Pass |
| content | User removes all text when updating a comment and tries to submit | Form displays warning 'This field may not be blank' | Pass |

<br>

### **Sample Create Form**

| Field | Action | Expected Outcome | Pass/Fail |
| ---- | ---- | ---- | ---- |
| audio | No file selected | Alert warns 'The submitted data was not a file. Check the encoding type on the form.'| Pass |
| audio | File selected exceeds 2MB in size | Alert warns 'Please choose an image smaller than 2MB' | Pass |
| audio | Attempt to submit form when 3 samples already belong to the specified snapshot | Alert warns 'Sorry, the maximum number of samples have been added for this snapshot' | Pass |

<br>

### **Profile Edit Form**

The profile edit form can be saved with no changes made.  None of the fields are compulsory.  If an image is selected, it must pass validation for file size, width and height.

| Field | Action | Expected Outcome | Pass/Fail |
| ---- | ---- | ---- | ---- |
| image | File selected exceeds 2MB in size | Alert warns 'Please choose an image smaller than 2MB' | Pass |
| image | File selected width > 4096px | Alert warns 'Image width larger than 4096px!' | Pass |
| image | File selected height > 4096px | Alert warns 'Image height larger than 4096px!' | Pass |

<br>

### **Sign Up Form**

| Field | Action | Expected Outcome | Pass/Fail |
| ---- | ---- | ---- | ---- |
| username | Leave field blank | Receive alert 'This field may not be blank' | Pass |
| password | Leave field blank | Receive alert 'This field may not be blank' | Pass |
| confirm password | Leave field blank | Receive alert 'This field may not be blank' | Pass |
| username | enter a space between characters | Receive alert 'Enter a valid username. This value may contain only letters, numbers, and @/./+/-/_ characters.' | Pass |
| password | Enter 123 as password | Receive alert 'This password is too short. It must contain at least 8 characters'/ 'This password is too common'/ 'This password is entirely numeric' | Pass |
| confirm password | Does not match password | Receive alert 'The two password fields didn't match' | Pass |

<br>

### **Sign In Form**

| Field | Action | Expected Outcome | Pass/Fail |
| ---- | ---- | ---- | ---- |
| username | Leave field blank | Receive alert 'Must include "username" and "password"' | Pass |
| password | Leave field blank | Receive alert 'Must include "username" and "password"' | Pass |
| username | Enter an invalid name that does not match a password | Receive alert 'Unable to log in with provided credentials' | Pass |
| password | Enter a password that is invalid for given username | Receive alert 'Unable to log in with provided credentials' | Pass |

<br>

[Back to top &uarr;](#contents)

## **Console Error Testing**

While manually testing the Rewind app, the console has been checked for errors.  No errors are logged apart from the following:

* 3 x `401_UNAUTHORIZED` errors on mount or refresh.  These requests to the API establish whether the user is logged out.
* 1 x `401_UNAUTHORIZED` error on navigation to Sign Up page.  Request to API checking user's authorisation status to determine whether the user should be directed away from the page.  Only unauthenticated users should be able to access this page.
* 1 x `401_UNAUTHORIZED` error on navigation to Sign In page.  Request to API checking user's authorisation status to determine whether the user should be directed away from the page.  Only unauthenticated users should be able to access this page.
* Feedback errors from the API, for example a `400_BAD_REQUEST` error if a form is submitted with invalid fields.  Also a `401_UNAUTHORIZED` error appears when an access token has expired, it is refreshed in the background and the request eventually succeeds.

<br>

[Back to top &uarr;](#contents)

# **Automated Testing**

## React Jest Testing

To complement the manual testing carried out, I used Jest to write some automated tests for the React frontend.  In preparation for running tests, I completed the following steps:

* Install the Mock Service Worker library (only as a dependency for development) using the terminal command `npm install msw --save-dev`

* Create `handlers.js` in src/mocks. This is a file to store mocked API responses.

* Configure `setupTests.js` file in order to connect the mock service worker to the project tests.
 
Due to the fact I was working in a unified project , it was necessary to amend the `axiosDefaults.js` file temporarily during testing.  The base url was set to my local host address while running the tests.

For the NavBar component, I wrote and ran the following tests:

* Test that the NavBar component renders
* Test that the NavBar component renders the Profile Avatar and links for Pinned/For You/Sign out when a user is logged in.
* Test that Sign in and Sign up links are re-rendered when a user signs out

I wrote and ran the following test for the AddSnapshot component:

* Test that the AddSnapshot component is rendered if a user is logged in 

All tests passed as can be seen below:

![React Jest Testing Results](docs/tests/pp5-react-jest-testing-results.png)

<br>

## **Django Unit Testing**

Alongside comprehensive manual testing, I have written some automated tests using Python's `unittest` unit testing framework.  My aim was to verify that the permission classes allocated to List and Detail views were performing as expected.

I created a separate `settings_test.py` file, which is a duplicate of `settings.py` but specifies that the sqlite3 database should be used for testing purposes:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
```

In order to test snapshots that require a valid image field, I included the following code in the setUp method:

```python
from django.core.files.uploadedfile import SimpleUploadedFile

def setUp(self):
    with open("docs/tests/comment-test-image.jpg", "rb") as file:
                image_data = file.read()
    self.image_file = SimpleUploadedFile(name="test_image.jpg", content=image_data,
                                        content_type='image/jpeg')
```

I also tried the following [solution](https://stackoverflow.com/questions/63476979/unit-testing-django-model-with-an-image-not-quite-understanding-simpleuploaded) which does not require the use of a real image, but received the following error: `[ErrorDetail(string='Upload a valid image. The file you uploaded was either not an image or a corrupted image.', code='invalid_image'`

Due to the fact that I am working in a unified project, when it came to running the tests I had to modify the following files/settings:

* `rewind/urls.py` 

```python
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from .views import logout_route

urlpatterns = [
    path('', root_route),
    path("admin/", admin.site.urls),
    path("api-auth/", include("rest_framework.urls")),
    # Logout route has to be above the default one to be matched first
    path('dj-rest-auth/logout/', logout_route),
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path(
        'dj-rest-auth/registration/',
        include('dj_rest_auth.registration.urls'),
    ),
    path("", include("profiles.urls")),
    path("", include("eras.urls")),
    path("", include("genres.urls")),
    path("", include("categories.urls")),
    path("", include("snapshots.urls")),
    path("", include("comments.urls")),
    path("", include("recommendations.urls")),
    path("", include("followers.urls")),
    path("", include("pins.urls")),
    path("", include("samples.urls")),
]
```

* rewind/settings_test.py

```python
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        # Set 'DIRS' as an empty list
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]
```

28 tests have been written so far and all are passing.  The aim will be to continue writing tests to improve coverage across the site.

![Django Unit Test Results](docs/tests/pp5-django-unit-test-results.png)

<br>

[Back to top &uarr;](#contents)

## **Validators**

### **ESLint for Javascript and JSX Validation**

ESLint was installed and configured for my gitpod workspace with help from the following article and CI Slack threads:

* [Install ESLint and Prettier auto formatting for React](https://gist.github.com/ianmeigh/8e603b91a38d7829d959402bfcf29d3d)

* [ESLint Config](https://code-institute-room.slack.com/archives/C02MTH5MBDG/p1663951564900919?thread_ts=1663797268.383809&cid=C02MTH5MBDG)

When the code for the React app is compiled, ESLint checks that certain rules are being adhered to.  Additionally, I used the Prettier extension to format js files on save.  I found that I had to specify that javascript files should use Prettier as the default formatter in my workspace settings.json file, as can be seen in the code snippet below: 

```json
"[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.detectIndentation": true,
        "editor.tabSize": 2,
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": "explicit"
        }, 
        "editor.formatOnSave": true   
    },
```
The following rules have been set in my `.eslintrc.json` file which resides in the root of the frontend directory:

```json
"rules": {
        "react/react-in-jsx-scope": "off",
        "react/prop-types": [0, { "ignore": ["children"] }],
		"react/no-children-prop": [
			0,
			{
				"allowFunctions": true
			}
		],
        "no-unused-vars": ["warn", { "argsIgnorePattern": "req|res|next|__" }],
        "react/no-unescaped-entities": ["error", { "forbid": [">", "}"] }]
    }
```

I received a warning from ESLint `'React' is defined but never used no-unused-vars`.  To solve this , I referenced the following [Stack Overflow thread](https://stackoverflow.com/questions/42541559/eslint-with-react-gives-no-unused-vars-errors) and added two additional rules to my `.eslintrc.json` file:

```json
"react/jsx-uses-react": "error",   
"react/jsx-uses-vars": "error" 
```

The React code is now compiled with no errors or warnings and the following message is displayed in the development terminal:

![ESLint error free](docs/validation/eslint/pp5-eslint-error-free.png)

<br>

[Back to top &uarr;](#contents)

## **PEP8 Validation:**

I passed all python files through the [Code Institute Python Linter](https://pep8ci.herokuapp.com/) Results of this testing can be seen below.  The only warnings flagged were for the `AUTH_PASSWORD_VALIDATORS` in the settings.py file `E501 line too long (91 > 79 characters)`.  I discussed this with my mentor and he confirmed that these would be ok to leave as this was not Python code I wrote myself.

<br>

App: rewind

| File | Errors | Result |
| :----: | :-------: | :------: |
| asgi.py | 0 | Passed |
| permissions.py | 0 | Passed |
| serializers.py | 0 | Passed |
| urls.py | 0 | Passed |
| views.py | 0 | Passed |
| wsgi.py | 0 | Passed |

App: categories

| File | Errors | Result |
| :----: | :-------: | :------: |
| admin.py | 0 | Passed |
| apps.py | 0 | Passed |
| models.py | 0 | Passed |
| serializers.py | 0 | Passed |
| tests.py | 0 | Passed |
| urls.py | 0 | Passed |
| views.py | 0 | Passed |

App: comments

| File | Errors | Result |
| :----: | :-------: | :------: |
| admin.py | 0 | Passed |
| apps.py | 0 | Passed |
| models.py | 0 | Passed |
| serializers.py | 0 | Passed |
| tests.py | 0 | Passed |
| urls.py | 0 | Passed |
| views.py | 0 | Passed |

App: eras

| File | Errors | Result |
| :----: | :-------: | :------: |
| admin.py | 0 | Passed |
| apps.py | 0 | Passed |
| models.py | 0 | Passed |
| serializers.py | 0 | Passed |
| tests.py | 0 | Passed |
| urls.py | 0 | Passed |
| views.py | 0 | Passed |

App: followers

| File | Errors | Result |
| :----: | :-------: | :------: |
| admin.py | 0 | Passed |
| apps.py | 0 | Passed |
| models.py | 0 | Passed |
| serializers.py | 0 | Passed |
| tests.py | 0 | Passed |
| urls.py | 0 | Passed |
| views.py | 0 | Passed |

App: genres

| File | Errors | Result |
| :----: | :-------: | :------: |
| admin.py | 0 | Passed |
| apps.py | 0 | Passed |
| models.py | 0 | Passed |
| serializers.py | 0 | Passed |
| tests.py | 0 | Passed |
| urls.py | 0 | Passed |
| views.py | 0 | Passed |

App: pins

| File | Errors | Result |
| :----: | :-------: | :------: |
| admin.py | 0 | Passed |
| apps.py | 0 | Passed |
| models.py | 0 | Passed |
| serializers.py | 0 | Passed |
| tests.py | 0 | Passed |
| urls.py | 0 | Passed |
| views.py | 0 | Passed |

App: profiles

| File | Errors | Result |
| :----: | :-------: | :------: |
| admin.py | 0 | Passed |
| apps.py | 0 | Passed |
| models.py | 0 | Passed |
| serializers.py | 0 | Passed |
| tests.py | 0 | Passed |
| urls.py | 0 | Passed |
| views.py | 0 | Passed |

App: recommendations

| File | Errors | Result |
| :----: | :-------: | :------: |
| admin.py | 0 | Passed |
| apps.py | 0 | Passed |
| models.py | 0 | Passed |
| serializers.py | 0 | Passed |
| tests.py | 0 | Passed |
| urls.py | 0 | Passed |
| views.py | 0 | Passed |

App: samples

| File | Errors | Result |
| :----: | :-------: | :------: |
| admin.py | 0 | Passed |
| apps.py | 0 | Passed |
| models.py | 0 | Passed |
| serializers.py | 0 | Passed |
| tests.py | 0 | Passed |
| urls.py | 0 | Passed |
| views.py | 0 | Passed |

App: snapshots

| File | Errors | Result |
| :----: | :-------: | :------: |
| admin.py | 0 | Passed |
| apps.py | 0 | Passed |
| models.py | 0 | Passed |
| serializers.py | 0 | Passed |
| tests.py | 0 | Passed |
| urls.py | 0 | Passed |
| views.py | 0 | Passed |

Main Directory:

| File | Errors | Result |
| :----: | :-------: | :------: |
| manage.py | 0 | Passed |

<br>

[Back to top &uarr;](#contents)


### **W3C HTML Markup Validator**

HTML has been validated using the [W3C](https://validator.w3.org/) Markup Validator .  No errors or warnings were displayed.

![HTML Validation Results](docs/validation/html/pp5-html-validation.png)

<br>

[Back to top &uarr;](#contents)

### **W3C CSS Validator**

I used the [W3C jigsaw](https://jigsaw.w3.org/css-validator/) CSS Validation Service to validate my CSS files.  All files were error free.

![css validation error free](docs/validation/css/pp5-css-validation.png)

| File | Errors | Result |
| ---- | :------: | :------: |
| frontend/src/App.module.css | 0 | Pass |
| frontend/src/styles/AddSnapshot.module.css | 0 | Pass |
| frontend/src/styles/AlertPopup.module.css | 0 | Pass |
| frontend/src/styles/Asset.module.css | 0 | Pass |
| frontend/src/styles/Avatar.module.css | 0 | Pass |
| frontend/src/styles/Button.module.css | 0 | Pass |
| frontend/src/styles/Comment.module.css | 0 | Pass |
| frontend/src/styles/CommentCreateEditForm.module.css | 0 | Pass |
| frontend/src/styles/Footer.module.css | 0 | Pass |
| frontend/src/styles/NavBar.module.css | 0 | Pass |
| frontend/src/styles/NotFound.module.css | 0 | Pass |
| frontend/src/styles/Profile.module.css | 0 | Pass |
| frontend/src/styles/ProfilePage.module.css | 0 | Pass |
| frontend/src/styles/Sample.module.css | 0 | Pass |
| frontend/src/styles/SignInUpForm.module.css | 0 | Pass |
| frontend/src/styles/Snapshot.module.css | 0 | Pass |
| frontend/src/styles/SnapshotCreateEditForm.module.css | 0 | Pass |
| frontend/src/styles/SnapshotPage.module.css | 0 | Pass |
| frontend/src/styles/SnapshotsPage.module.css | 0 | Pass |
| frontend/src/styles/ToastPopup.module.css | 0 | Pass |
| frontend/src/index.css | 0 | Pass |

The only warnings that occur relate to the use of vendor pseudo elements, vendor extensions and use of variables.  I am satisfied that these are not causing any issues with the functionality of the site.

![css variables warning](docs/validation/css/pp5-css-comment-validation-warnings.png)

![css vendor pseudo element warning](docs/validation/css/pp5-css-sample-validation-warnings.png)

![css vendor extensions warning](docs/validation/css/pp5-css-index-validation-warnings.png)

<br>

[Back to top &uarr;](#contents)

# **Performance**

## **Lighthouse**

### Improvements

I used Lighthouse within Google Chrome developer tools as a way of testing performance, accessibility, best practices and SEO for the site.  The improvements I made using the Wave Accessibility tool ensured that accessibility scores are **100** on all pages.  

Any recommendations for best practice were also implemented, and the only pages that do not achieve **100** scores are the home landing page, sign up page and sign in page. The reason for this is that HTTP 401 errors are logged to the console, therefore bringing best practice scores down to **92**.  However, 3 errors are to be expected when a user arrives on the home page as 3 network requests are required to establish whether the user is really logged out.  401 errors are also logged when navigating to sign up/ sign in pages as a consequence of checking the user's authorisation status and whether they should be redirected away from these pages if an attempt is made to access them.

### Opportunities

Several opportunities were flagged by the lighthouse report to improve performance throughout the site,  particularly when testing for mobile.

* Preload Largest Contentful Paint image
* Properly size images
* Serve images in next-gen formats
* Enable text compression
* Eliminate render-blocking resources

Size and format of images being served is an area that should be looked into further during future iterations.  I have already implemented server side logic in the Snapshots serializers file to prevent images over 2MB in size being uploaded.  I have tested the site on various devices and networks and the issue does not seem to be impacting page load times to the detriment of the user.

I have also noted that 'issues' are flagged in Dev Tools.  The following warning is communicated when navigating to some forms:

![Dev Tools Issues Tab](docs/lighthouse/issues/pp5-console-issue-form-label.png)

I attempted a solution as suggested by adding a `for attribute on the label that matches a form field id`.  However this then raised further issues as the form is rendered twice in the html even though only one is ever displayed and the other hidden (dependent on screen size).  Because I am storing the form fields in a variable and then rendering, adding an id to a field results in duplicate ids as each field is rendered twice.  This may be something to look at again in future sprints, but for now these pages are still passing with no accessibility errors.


<details><summary>Desktop Results</summary>

<br>

**Home Page Unauthenticated**

![Lighthouse Home Page Unauth Desktop ](docs/lighthouse/desktop/pp5-lighthouse-home-unauth-desktop.png)

**Sign In Page**

![Lighthouse Sign In Desktop ](docs/lighthouse/desktop/pp5-lighthouse-sign-in-desktop.png)

**Sign Up Page**

![Lighthouse Sign Up Desktop ](docs/lighthouse/desktop/pp5-lighthouse-sign-up-desktop.png)

**Home Authenticated User**

![Lighthouse New USer Desktop ](docs/lighthouse/desktop/pp5-lighthouse-home-auth-new-user-desktop.png)

**Snapshot Detail**

![Lighthouse Snapshot Detail Desktop ](docs/lighthouse/desktop/pp5-lighthouse-snapshot-detail-desktop.png)

**Add Snapshot**

![Lighthouse Add Snapshot Desktop ](docs/lighthouse/desktop/pp5-lighthouse-add-snapshot-desktop.png)

**Edit Snapshot**

![Lighthouse Edit Snapshot Desktop ](docs/lighthouse/desktop/pp5-lighthouse-snapshot-edit-desktop.png)

**Profile Page**

![Lighthouse Profile Page Desktop ](docs/lighthouse/desktop/pp5-lighthouse-profile-page-desktop.png)

</details>

<details><summary>Mobile Results</summary>

<br>

**Home Page Unauthenticated**

![Lighthouse Home Page Unauth Mobile ](docs/lighthouse/mobile/pp5-lighthouse-home-unauth-mobile.png)

**Sign In Page**

![Lighthouse Sign In Mobile ](docs/lighthouse/mobile/pp5-lighthouse-sign-in-mobile.png)

**Sign Up Page**

![Lighthouse Sign Up Mobile ](docs/lighthouse/mobile/pp5-lighthouse-sign-up-mobile.png)

**Home Authenticated User**

![Lighthouse New USer Mobile ](docs/lighthouse/mobile/pp5-lighthouse-home-auth-new-user-mobile.png)

**Snapshot Detail**

![Lighthouse Snapshot Detail Mobile ](docs/lighthouse/mobile/pp5-lighthouse-snapshot-detail-mobile.png)

**Add Snapshot**

![Lighthouse Add Snapshot Mobile ](docs/lighthouse/mobile/pp5-lighthouse-add-snapshot-mobile.png)

**Edit Snapshot**

![Lighthouse Edit Snapshot Mobile ](docs/lighthouse/mobile/pp5-lighthouse-snapshot-edit-mobile.png)

**Profile Page**

![Lighthouse Profile Page Mobile ](docs/lighthouse/mobile/pp5-lighthouse-profile-page-mobile.png)

</details>

<br>

[Back to top &uarr;](#contents)

## **Wave Accessibility**

All pages of the site have been passed through the [Wave Chrome Extension](https://wave.webaim.org/extension/) to check for accessibility performance.  No errors are logged on any pages.  I have checked warnings to ensure they are acceptable.

<details><summary>Wave Results</summary>

<br>

![Wave Accessibility Home](docs/accessibility/pp5-wave-accessibility-home.png)

![Wave Accessibility Sign In](docs/accessibility/pp5-wave-accessibility-sign-in.png)

![Wave Accessibility Sign Up](docs/accessibility/pp5-wave-accessibility-sign-up.png)

![Wave Accessibility Home Authenticated](docs/accessibility/pp5-wave-accessibility-home-authenticated.png)

![Wave Accessibility Home New User](docs/accessibility/pp5-wave-accessibility-home-auth-new-user.png)

![Wave Accessibility For You Page](docs/accessibility/pp5-wave-accessibility-for-you.png)

![Wave Accessibility Pinned Page](docs/accessibility/pp5-wave-accessibility-pinned.png)

![Wave Accessibility Snapshot Detail](docs/accessibility/pp5-wave-accessibility-snapshot-detail.png)

![Wave Accessibility Create Snapshot](docs/accessibility/pp5-wave-accessibility-create-snapshot.png)

![Wave Accessibility Edit Snapshot](docs/accessibility/pp5-wave-accessibility-edit-snapshot.png)

![Wave Accessibility Edit Comment](docs/accessibility/pp5-wave-accessibility-edit-comment.png)

![Wave Accessibility Profile Page](docs/accessibility/pp5-wave-accessibility-profile-page.png)

![Wave Accessibility Profile Edit](docs/accessibility/pp5-wave-accessibility-profile-edit.png)

![Wave Accessibility Change Username](docs/accessibility/pp5-wave-accessibility-change-username.png)

![Wave Accessibility Change Password](docs/accessibility/pp5-wave-accessibility-change-password.png)

</details>

<br>

[Back to top &uarr;](#contents)

# **Responsiveness**

Full testing for responsiveness of all pages across the site has been carried out with the help of Google Dev Tools along side the following physical devices:

* Macbook Pro 2021 14 inch M1 Pro
* iPhone 11
* iPad 9th generation A2602

<br>

The following browsers were used to test on each device to check for consistency of appearance and performance:

* Google Chrome
* Firefox
* Safari

| Browser Compatibility |  |        |       |                        
| :---: | :---:  | :---:   | :---:  |
|       | Chrome | Firefox | Safari |  
| Appearance | Good | Good | Good |
| Responsiveness | Good | Good | Good |

<br>

[Back to top &uarr;](#contents)







