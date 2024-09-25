# Project Name - The Win Mnager


* [Link to Deployed Project](https://winmanager-6a83a594eb75.herokuapp.com/)

## CONTENTS
* [USER EXPERIENCE (UX)](#user-experience)
  * [Purpose & target audience](#purpose-and-target-audience)
  * [Goals](#goals)
* [PROJECT DESIGN](#project-design)
  * [Agile Approach](#agile-approach)
  * [Wireframes](#wireframes)
  * [User Stories](#user-stories)
  * [Logic](#logic)
  * [Color Scheme](#color-scheme)
  * [Imagery](#imagery)
  * [Typography](#typography)
  * [MVP](#mvp)
* [FEATURES](#features)
* [VALIDATION](#validation)
* [TECH STACK](#tech-stack)
  * [Languages and Frameworks](#languages-and-frameworks)
  * [Tools and Libraries](#tools-and-libraries)
  * [React Components](#react-components)
  * [Refactoring Opportunities](#refactoring-opportunities)
* [TESTING](#testing)
  * [Tests performed](#tests-performed)
  * [User Story Tests](#user-story-tests)
  * [Bugs resolved](#bugs-resolved)
  * [Unresolved bugs](#unresolved-bugs)
  * [Improvements & future developments](#improvements-and-future-developments)
* [DEPLOYMENT](#deployment)
* [FORKING & CLONING INSTRUCTIONS](#forking-and-cloning-instructions)
* [SECURITY SETTINGS](#security-settings)
* [CREDITS](#credits)
  * [Code](#code)
  * [Resources](#resources)
  * [Content](#content)
  * [Media](#media)
  * [Acknowledgements](#acknowledgements)


## USER EXPERIENCE

   ### Purpose and target audience

GarageGuru is a collaborative job management app aimed at vehicle service centres.

It is designed with the employee in mind, where jobs can be created, and assigned to different users, and job status can be tracked. Jobs can be viewed, watched, edited, filtered and searched.  In addition, an invoice can be created and its status can also be separately managed.

Each job card also has a comments section where users can collaborate on the job and specific comments in the form of a conversation thread.

This fully responsive accessible website can be used on a  desktop or the employee's mobile device on the workshop floor.


<img src="">

* [Back to Contents](#contents)

  ### Goals
  #### Goals for the first time user
  1. To be able to create an account easily.
  2. To be able to customise and update their profile.
  3. To easily understand what the app is supposed to do and how to navigate it on a desktop or mobile device.
  4. To easily be able to add a job, choose from a selection of job types, assign a job by default to themselves, or to be able to select another user.
  5. To be able to select a due date for the job, while defaulting to the current day.
  6. To be unable to choose a date in the past.
  7. To be able to watch various jobs and view them on a dashboard.
  8. To be able to view the jobs they have created on a dashboard.
  9. To be able to view jobs assigned to them on a specific dashboard.
  10. To be able to easily create and edit an invoice associated with a job.
  11. To be able to leave comments about any job.
  12. To view all the invoices in the system and manage their status.

  #### Goals for the returning user <br>
  13. All the pages of the app should be secure, so once logged out, the only way to access any pages is via the login page.<br>
  14. The app should feel familiar to the returning user.

  #### Goals for the Administrator <br>
  15. The administrator can easily update or override any information on the backend as a superuser.

  #### Goals for the Site Owner <br>
  16. The app should have the capacity to scale. <br>
  17. More choices of services can easily be added and customised for different businesses. <br>
  18. Images are validated to ensure they are not oversized dragging on site performance and storage resources. <br>
  19. Jobs, invoices and comments are pulled as required, to avoid dragging on site performance and storage resources.


* [Back to Contents](#contents)

## PROJECT DESIGN

  ### Agile Approach
  From the start the project was managed using [GitHub Projects (View Here - ensure labels are activated)](https://github.com/users/rstan-dev/projects/8/views/2?filterQuery=), using an agile approach.
  - The project goals were broken into epics, which were broken into user stories with acceptance criteria and individual tasks.
  - Each User Story was allocated a certain number of story points based on a rough estimation of time to complete the work.
  - This allowed me to create a roadmap with milestones and target dates. [View Roadmap Here(ensure milestone and start date markers are activated)](https://github.com/users/rstan-dev/projects/8/views/1)
  - Each User Story was assigned a label according to the MoSCoW system so I could prioritise the work.
  - <img src="https://github.com/rstan-dev/GarageGuru-PP5/blob/main/documentation/images/wireframes/moscow_labels.png">

  ### Wireframes
   The initial wireframes were created in [Balsamiq](https://balsamiq.cloud/) to understand how the site would work, and this layout would drive User Stories, the logic required and overall design artwork decisions.

   The final app deviated slightly in a couple of areas as improvements were made while the site was being built and user functions could be tested.

   The Invoice functionality was added midway through the project because I felt not only would it complete the app, but it would add a layer of much-needed functionality.

   The Comments design and functionality was also enhanced later in the project when I added the ability to leave a reply to a comment, ensuring it was a fully collaborative system.

   General visual styling improvements were made during the project that were not considered during wireframing or when I received some early-stage user feedback, which resulted in a better UX.

   - <img src="https://github.com/">

   <details>
    <summary><u>Click to View More Wireframe Images</u></summary>
   - <img src">
   <br>
   <br>
   <br>

   New wireframe for including the invoice module was conceived halfway through the project.
   - <img src="https://github.com/rstan-dev/GarageGuru-PP5/blob/main/documentation/images/wireframes/wf_newalljobs.png">
   </details>

* [Back to Contents](#contents)

  ### User Stories
  All epics, user stories with their acceptance criteria and tasks can be viewed on the GarageGuru [GitHub Project board]()

  There were 12 Epics created from Project Concept to Project Submission.

  There were 35 User Stories Created including:

1. [US1] Project General Requirements
    - As a developer, I can understand the goals of the site so that development decisions can be made accordingly.
    - Maps to Project Goal 16, 17, 18 and 19
2. [US2] Setup Repo
    - As a developer, I will set up the repo and install the necessary packages so that I can start building the initial models to view on the React front-end
3. [US3] Profiles Model
    - As a superuser, I can log in to the admin panel	so that I can manage users and other parts of the system as it develops
    - Maps to Project Goal 15
4. [US4] Jobs Model
    - As a superuser, I can create a Job Card so that I can capture the details of the job I wish to display
5. [US5] Create NavBar
    - As a website user, I can view the basic navbar so that I can easily navigate the website on desktop and mobile
    - Maps to Project Goal 14
6. [US6] Link NavBar
    - As a website user, I can navigate each page seamlessly so that I do not need to wait for page refresh
    - Maps to Project Goal 3
7. [US7] User Login frontend
    - As a website user, I can log in so that I can access all the functions of the site, and I can easily see if I am logged in or not
    - Maps to Project Goal 1 and 13
8. [US8] User Logout frontend
    - As a website user, I can log out so that I can protect my profile data, and I can easily see if I need to log in again
9. [US9] User Registration Frontend
    - As a website user, I can register for an account so that I can access the functions of the site
10. [US10] Refresh Access Tokens
    - As a website user, I can maintain my logged-in status until I decide to log out So that my user experience is not interrupted
11. [US11] View Profile Page frontend
    - As a logged in user I can view my profile so that I can see the details I have entered about myself
12. [US12] Edit Profile Page frontend
    - As a logged in user I can edit my profile so that I can change my personal info
    - Maps to Project Goal 2
13. [US13] Update Password frontend
    - As a logged-in user, I can update my password so that I can change my password if I need to
14. [US14] Update Username frontend
    - As a logged-in user, I can change my username so that I can change my username if I want to
15. [US15] View all jobs
    - As a logged-in user, I can click on the All Jobs button in the NavBar so that I can see all the jobs in the system
16. [US16] Search all jobs
    - As a logged-in user, I can enter a query in the search bar so that I can find a job easily
17. [US17] Filter jobs
    - As a logged-in user, I can filter the job cards so that I can display them in the order I want
18. [US18] Add Job
    - As a logged-in user, I can click on the Add Job button in the NavBar so that I can add the job details to a form and save them to the database
    - Maps to Project Goal 4 and 5 and 6
19. [US19] Edit Job Card
    - As a logged-in user, and creator of a job, I can click on the edit icon on the JobCard so that I can edit the job details
20. [US20] Delete a Job
    - As a logged-in user, and creator of a job, I can click on the edit icon on the JobCard so that I can delete the job details
21. [US21] Add comment
    - As a logged-in user, I can add a comment so that I can leave any comments about a particular job
22. [US22] View Job Comments
    - As a logged-in user I can click on the comments bubble so that I can view all the comments that have been made about the job
23. [US23] Edit Comment
    - As a logged-in user, and creator of a comment, I can click on the edit icon of a comment I have written so that I can update it if I want to
24. [US24] Delete Comment
    - As a logged-in user, and creator of a comment, I can click on the edit item of a comment I have written so that I can delete it if I want to
    - Maps to Project Goal 11
25. [US25] Add Invoice details
    - As an Owner or Assigned person of a JobCard, I can add invoice details to a job so that a financial record can be maintained
26. [US26] View Invoice Details on the JobCard
    - As any user of a JobCard, I can view invoice details on a job card so that I can see the status of the invoices for a job
27. [US27] Edit Invoice Details on the JobCard
    - As an Owner or Assigned person of a JobCard, I can edit invoice details on a job card so that I can edit any of the details of the invoices for a job
28. [US28] Delete Invoice details on the JobCard
    - As an Owner or Assigned person of a JobCard, I can delete an invoice related to a job card so that I can delete an invoice if a job is cancelled
29. [US29] View Invoice Details on AllInvoicesPage
    - As any user of a JobCard, I can view invoice details on the AllInvoicesPage so that I can see the status of the invoices for a job
    - Maps to Project Goal 11
30. [US30] Edit Invoice Details on AllInvoicesPage
    - As an Owner or Assigned person of an Invoice, I can edit invoice details on the AllInvoicesPage so that I can edit any of the details of the invoices for a job
    - Maps to Project Goal 10
31. [US31] My Jobs & Assigned Jobs View
    - As a logged-in user, I can click on the MyJobs button or the Assigned Jobs button in the NavBar so that I can see all of the jobs that I have created or that have been assigned to me in the system
    - Maps to Project Goal 8 and 9
32. [US32] Watch Jobs
    - As a logged-in user, I can click on the eye icon on a job card so that I can add it to my watch list where I can keep an eye on a job
    - Maps to Project Goal 7
33. [US33] UX & Testing
    - As a developer, I can test each user story function so that I can verify each function works as intended
34. [US34] Deploy to Heroku
    - As a developer, I can deploy to Heroku so that I can host the site in production
35. [US35] Complete Readme Documentation
    - As a developer, I can submit a comprehensive Readme document so that other developers can understand the project's development process


* [Back to Contents](#contents)

  ### Logic
  The database schema and website logic was conceived and created using [Lucid](https://lucid.app/) as follows:

  Database Structure:
  - <img src="https://github.com/rstan-dev/GarageGuru-PP5/blob/main/documentation/images/wireframes/garageguru_schematic_dec_2023.png">

* [Back to Contents](#contents)

  ### Color Scheme
  The main colours of blue, white and grey were chosen for maximum contrast. I used [Coolors](https://coolors.co) to generate a colour palette.

  - <img src="https://github.com/rstan-dev/GarageGuru-PP5/blob/main/documentation/images/wireframes/color_pallette.png">

  I used [Canva](https://www.canva.com/) to generate a logo and a style guide.

  - <img src="https://github.com/rstan-dev/GarageGuru-PP5/blob/main/documentation/images/site_images/garageguru_logo.jpg">
  <br>

  <details>
    <summary><u>Click to View More Color Scheme Images</u></summary>

  With a color palette in mind, I could create a project style guide:
  <br>

  - <img src="https://github.com/rstan-dev/GarageGuru-PP5/blob/main/documentation/images/wireframes/garageguru_project_colors.jpg">

    <br>
  - <img src="https://github.com/rstan-dev/GarageGuru-PP5/blob/main/documentation/images/site_images/gg_icon.png">

  </details>

  * [Back to Contents](#contents)

  ### Imagery
  - I used FontAwesome https://fontawesome.com/ for various icons in the navbar, JobCard, and other places for visual effects.

   <br>

  - I used [Unsplash](https://unsplash.com/) to populate the site with realistic royalty-free images while testing.

  * [Back to Contents](#contents)

  ### Typography
   * I used a default Google font of Raleway and sans serif throughout the website for visual clarity and consistency.


  ### MVP
  Using the GitHub project board I prioritised user stories to give me an incremental MVP.

  At each stage of achieving an MVP, I would aim to complete a piece of functioning work.  Styling issues would be noted as a small-item, logged to the Kanban board and I would revisit to make incremental visual improvements once the functionality logic was completed.

  Every commit message thoroughly detailed the work that had been completed.  Some of the more complex pieces of functionality required updates and development across several pages for the functions to work as expected and this was captured in the commit history.

1. I created the basic models for profiles and jobs first so I could upload information to pull into the front end.
2. I built the Navbar and routes
3. I built the Login, Logout and registration functionality
4. I built the Profile Area with CRUD functionality
5. I built the Jobs section with CRUD functionality
6. I built the comments section below each job card with CRUD functionality
7. I built the Invoice Model and frontend components and linked them to the relevant JobCard
8. I built the Watch Jobs functionality and views
9. I built the filters and views for My Jobs and Assigned Jobs


   * [Back to Contents](#contents)

## FEATURES
* The following fully responsive website pages have been implemented:
1. Register
2. Login
3. AllJobs with Status Dashboard, filter and search functionality
4. MyJobs with Status Dashboard, filter and search functionality
5. Assigned Jobs with Status Dashboard, filter and search functionality
6. Watched Jobs with Status Dashboard, filter and search functionality
7. Job Card with comments and links to assigned user profile, invoice, and conditional editing and ability to watch a job
8. Add Invoice functionality with custom validation and alerts
9. AddJob form with custom validation and alerts
10. All Invoices with Status Dashboard, filter and search functionality, links to conditional editing, assigned users and relevant JobCard
11. Profile page with editing functionality and custom validation

  <details>
    <summary><u>Click to View Images</u></summary>
   

  </details>


  * [Back to Contents](#contents)

* UX features and User Interactions to note:
  - Unauthenticated users can only access the login or register page.  All other pages are protected at the Route level and only available to users who have registered and logged in to their account.
  - Users can always see where they are by the nav icon that highlights yellow or by the breadrcumb Viewing bar at the top of each screen. [US5, US6,]
  - Users can hover over each icon in the NavBar to see the Nav label, and users will know they are logged in by seeing their name next to the Profile link.
  - All users can access their own Profile page where they can view or edit their profile, username or password. [US3, US11, US12, US13, US14]
  - Users can view all the jobs, jobs only created by them or jobs assigned to them. [US4, US15, US31 and US32]
  - A dashboard allows them to organise each view according to its status and the status counter lets the user filter by and know at all times how many jobs are Pending, Underway or Completed. [US16, US17]
  - Users can filter by jobs that are recently created (the default), recently updated or by their due date. [US16, US17]
  - Users can enter a keyword to search by job type, description, created by or assigned to. [US16, US17]
  - On each job card, users can click through to view the profiles of the user who created the job or the user who is assigned to the job. [ US11 ]
  - A jobs can be edited by the person who created it and allows updates to any of the fields including the image. [ US19 ]
  - An invoice can be added by the two users involved in the job - those who created it and those who are assigned to the job. [ US25 ]
  - Any user can view the invoice summary by opening the accordion feature by clicking "Click To View Invoice Summary", where they can find a button to view the invoice card or edit it if they have permission. [ US26 ]
  - Users can also click an eye icon which will add the job to a Watch list if they want to keep track of a job. [ US32 ]
  - Users will see if any comments have been left on a job and will know the amount of comments that have been left on that specific job. [US21, US22, US23, US24]
  - Users can click on the comment bubble icon and view the job card, and invoice summary, leave a comment, leave a reply to a comment and edit or delete any of their comments. [US21, US22, US23, US24]
  - Users can view all invoices in the system and use familiar dashboard features to view and filter the status, order by dates and search using keywords. [ US29 ]
  - On each invoice card, users can click through to view the profiles of the user who created the invoice or the user who is assigned to the job. [ US11 ]
  - Invoices can be edited only by those who created or were assigned to the job. [US27 and US30]
  - Any user can click on the "View Job Summary" accordion and find a link to view the full job card
  - Any user can click the "BackToTop" button incorporated on Jobs and Invoices pages to help navigate long page lists.
  <br>

  <details>
    <><u>Click to View UX Features Images</u></
  </details>

  * [Back to Contents](#contents)

## VALIDATION
Various validation methods have been incorporated:
 1. Onscreen success messages after user actions
 2. Onscreen warnings if form fields have been omitted
 3. Onscreen modal confirmation step before updating or deleting items
 4. No-Data to display icon
 5. Custom 404 page for redirecting logged-in users to non-existing pages
 6. General catch-all redirects for logged-out users to the Login page for non-existing pages.
 7. Date validation to prevent booking or invoicing a past date
 8. Image validation to prevent oversized images from being uploaded
 9. Infinite scroll on jobs and invoices to reduce server load
 10. Form validation to capture email and phone formats correctly


 <details>
  <summary><u>Click to View Validation Images</u></summary>

 
</details>

 * [Back to Contents](#contents)

## TECH STACK
The site has been built with the following tech, tools and libraries

### Languages and Frameworks

* HTML5
* CSS
* JavaScript
* React - javascript library
* JSX - syntax extension for JavaScript
* Python
* Django - web framework
* Django REST Framework - API framework
* Django CORS - handles Cross Origin Resource Sharing
* Django AllAuth - user authentication
* Django Filter - filtering querysets
* Psycopg2 - postgreSQL adapter for python
* ElephantSQL - database hosting
* Axios - promise API
* JWT - JSON web token
* Cloudinary - media hosting
* Pillow - python image processing library
* Gunicorn - WSGI HTTP server for UNIX
* Bootstrap 4 and react-bootsrap - frontend responsive styling framework
* Heroku - live site hosting


### Tools and Libraries
* GitHub Projects - agile management, kanban, roadmap and milestones
* GitHub Repo - code storage
* Git - version control
* GitPod & VS Code - IDE
* [Balsamiq](https://balsamiq.com/) - creating wireframes
* [Coolors](https://coolors.co) - color pallette generator
* [Image resizer](https://www.reduceimages.com/) - resizing images for optimal storage
* [Canva](https://www.canva.com/) - creating artwork
* Google Fonts - consistent typography
* [Lucid Chart](https://lucid.app/) - creating a database schema
* [Favicon](https://favicon.io/favicon-converter/) - favicon generator
* [Responsive Image Generator](https://ui.dev/amiresponsive)
* [BrowserStack](https://live.browserstack.com/) browser compatability tests
* [Unsplash](https://unsplash.com/) - stock images
* [FontAwesome](https://fontawesome.com/) - icons
* [W3C HTML Validator](https://validator.w3.org/) - html code validation
* [W3C CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator/) - css code validation
* LightHouse - measures performance, accessibility, best practices and SEO
* Chrome Dev Tools - for development debugging
* [PycodeStyle](https://pypi.org/project/pycodestyle/) - code analysis tool conforming to pep8
* [CI Python Linter](https://pep8ci.herokuapp.com/) - code analysis tool conforming to pep8
* Black - code formatter for python
* Prettier - code formatter for html, css and javascript
* ESLint - code analysis tool for javascript
* APITestCase - DjangoRESTFramework test library
* Jest - frontend testing library
* MSW - Mock Service Worker for front-end testing
* Coverage - measures code coverage of Python programs
* Whitenoise - serving static files
* React Router - routing and navigation, url management
* React Infinite Scroll - continuous content loading

### React Components

React’s strengths come from reusable components.
The following components were built and reused in different parts of the application, contributing to improved user experience:
* < AllInvoicesPage />  - the main page that was used for viewing All Jobs, My Jobs, Assigned Jobs and Watched Jobs.
   - This reusable component ensures that all views are based on the same code and therefore familiar to the user.
* < Asset /> - used to display a spinner icon while loading data.
   - Signals to the user that there is more data or actions to follow.
* < BackToTop /> -  used to quickly navigate the user back to the top of the page.
   - Assists the user with site navigation, especially on pages with a lot of data to scroll through.
* < ConfirmationModal /> - used to add a confirmation layer for users before updating or deleting content.
   - Assists the user by adding a step in between the action to confirm they want to make the change.
* < FixedHeader /> - used to create a breadcrumb bar for viewing status
   - Improves the user experience by letting them know which page they are on, especially useful for pages that look very similar such as the AllJobs, MyJobs and WatchedJobs pages.
* < Footer /> - used on the Login and register screen.
* < NavBar /> - used above every page.
   - Improves the user experience by being fixed to the top of the page, the active page is highlighted very prominently in yellow, and if the user hovers over the icons on a desktop, they will see the menu label, or it will be identified by the aria-label for screen readers.
* < Page Not Found /> - used as a landing page for any redirects.
   - Ensures the user does not come across any broken links while navigating the site or entering non-existent urls.
* < TimedAlert > - used to control how long alert and success messages are displayed on the screen.
   - Improves the user experience by keeping them informed of actions and system updates.


### Refactoring Opportunities

Due to time constraints on completing this project, I was unable to refactor all of the code.  Two notable components could help streamline the app further:

1. Dashboard used in AllJobs Page and AllInvoices Page
2. Accordion used in JobCard and InvoiceCard
3. Confrimation Modal used in Editing Jobs, Editing Invoices, Editing Profiles, and Deleting Jobs and Deleting Invoices.
4. SuccessMessage Timeout function could benefit from being a resusable component.

* [Back to Contents](#contents)


## TESTING
FOR DETAILED TEST REPORTS AND RESULTS PLEASE [VIEW THEM HERE:](https://github.com/rstan-dev/GarageGuru-PP5/blob/main/TESTING.md).

  ### Tests performed
  The site was thoroughly tested during development with each feature tested before committing to GitHub.  The testing regime included the following:
  1. Incremental development and live testing.
  2. Django Models Automated Testing using Jest.
  3. Early user observation test.
  4. React Tests.
  5. Manual user story tests.
  6. Django APITest re-run and additional automated testing using jest.
  7. HTML, CSS, ESLINT, PYLINT, Lighthouse tests.
  8. Browser Compatibility tests.
  9. Final Production user tests

  ### User Story Tests
  Each user story was tested manually according to a structured test sheet [VIEW IT HERE:](https://docs.google.com/spreadsheets/d/1esaHTm738sbXP-JMxzEvQ63mgN3IazsXGUL8tRsX0ZI/edit#gid=165646488), with results being recorded and any failures rectified.

  * [Back to Contents](#contents)

  ### Bugs resolved:
  The following bugs were recorded and rectified [See test sheet](https://docs.google.com/spreadsheets/d/1esaHTm738sbXP-JMxzEvQ63mgN3IazsXGUL8tRsX0ZI/edit#gid=165646488)
  1. Initially, there was a console warning “Access to XMLHttpRequest…from origin…has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
     * This was resolved by replacing and setting up the CI template correctly which had a lot of necessary settings
  2. When refreshing the JobCard page the user was logged out.
     * This was resolved by adding a missing "/" in axiosRes.get('/dj-rest-auth/user'). Helpfully discovered by tutor support.
  3. Status Counts were not decrementing correctly.
     * This was resolved by overriding the list and creating a function to calculate status counts on a distinct list of jobs by id in Jobs Views.py.
  4. Watched Jobs icon was not toggling-on correctly on JobCard, AllJobs page and WatchedJobs page.
     * Due to the complexity of the architecture, several attempts were made to resolve this. Eventually, a Route prop was passed from App.js to AllJobs page, depending on if it was filtering for Watched Jobs or not. A handleWatchStatusChange function was passed to JobCard. A similar function was added to JobPage which passed a prop to JobCard. The behaviour of the watch icon could then be managed depending on which page was serving the JobCard.
  5. Deleting a reply was not working.
     * This was resolved by creating a custom permission and updating the handleDelete function in EditCommentForm to filter out deleted comments to ensure a state update.
  6. Comment Counter was not decrementing correctly when deleting comments and replies. This had been working previously but there were console warnings regarding updating state on unmounted components - caused by the confirmation modal. I addressed this warning by implementing an additional isMountedRef flag, however the counter was inadvertently affected, only when deleting a comment or reply.
     * This was resolved by moving the decrement function from inside the isMountedRef flag.


  * [Back to Contents](#contents)

  ### Unresolved bugs:

  There are no other known bugs at this time.


  ### Improvements and future developments:
  The app was initially built with enough basic fields and functionality to ensure I could deliver an MVP that would meet assessment criteria within the allocated time frame.

  There is scope to improve the app that would enhance the user experience and add more valuable functions, that could easily be developed on top of the existing structure:

  * Add consistent user feedback on the email and phone fields validation. Currently it is using the default browser message validation, and was left as is due to time constraints.

  * Create a Manager Profile who has access to all profiles, jobs and invoices on the front end, to allow moderation and site overrides.  Currently, this work can be undertaken in the Django Admin area which has not been configured for any UX.

  * Upgrade to Bootstrap 5 - will allow improved design and functionality for the Accordion and Modal components - negating the need for the deprecated findDOMNode method.

  * Consider using a modal to contain comments and replies as per the original concept.

  * Consider adding InfiniteScroll to the comment-replies section. This was left as it was deemed unlikely that there would be a vast number of replies to a single comment.  InfiniteScroll has been added to the parent comment list.

  * The app has scope to extend its usability.  Additional fields can be added to the JobCard to capture more vehicle details.

  * An Overdue status was originally added to the Job Status dropdown and is available as a choice in the model.  However, due to time constraints, this was omitted from the dashboard design.  It might be useful to filter and see Overdue Jobs

  * Reports would be useful to the business to summarize Jobs and Invoices by User, Customer, Vehicle Type, Month, Job Type, Amount etc

  * Additional functionality could be added to the Invoice module to be able to create and email the customer a PDF invoice.

  * Additional fields could be added to the Profile Model allowing the user to update their email address and other contact details.

  * A customer profile model and a resource availability model could be created allowing them to book a service for their own vehicle.

  * There is scope to adapt this for other service businesses that need to track job details with an invoice function.


  * [Back to Contents](#contents)

## DEPLOYMENT
  This project was built as a unified project, the benefits of this approach were:
   * CORS would not be an issue as requests and responses will come from a shared base URL, both in development and production environments.
   * Terminal logs for the API would be visible while interacting with the React side of the project during development, making debugging significantly easier.
   * Development of both the API and the React project could take place simultaneously.
   * With the front and back-end applications on the same domain, Cookies (containing the JSONWebToken) required for authentication would not be blocked from being set on browsers that currently have cross-site tracking protection enabled by default.

  Initially, Django was installed following this Code Institute [DRF Cheatsheet](https://docs.google.com/document/d/1LCLxWhmW_4VTE4GXsnHgmPUwSPKNT4KyMxSH8agbVqU/edit#heading=h.mpopj7v69qqn)

   1. Create a Cloudinary account and gather API key
   2. Create ElephantSQL database and gather API key
   3. Install Django
   4. Create project
   5. Install Cloudinary Storage
   6. Install Pillow (image processing)
   7. Update INSTALLED_APPs
   8. Create env.py file
       * Add CLOUDINARY_KEY (from Cloudinary API key)
       * Add SECRET_KEY - (a unique password)
       * ADD DATABASE_URL - (postgres ElephantSQL API key)
       * ADD CLIENT_ORIGIN - (set to the value of your development environment URL, wrapped in quotes, prepended with https://)
       * ADD ALLOWED_HOST - (set to the value of the development environment URL, wrapped in quotes)
       * Add os.environ['DEBUG'] = '1'
       * Add os.environ['DEV'] = '1'
   9. Update settings.py
       * CLOUDINARY_STORAGE
       * Define Media Storage URL
       * Set DEFAULT_FILE_STORAGE
       * Set DATABASES

  ### React was installed using the following steps

   1. Create a folder in the root directory named “frontend”
   2. Type “cd frontend” to change directory
   3. Run this command: npx create-react-app . --template git+https://github.com/Code-Institute-Org/cra-template-moments.git --use-npm.
   4. Remove redundant files from the frontend folder: rm -rf .git .gitignore README.md.
   5. Freeze requirements
   6. In settings.py remove all CORS code leaving only CORS_ALLOWED_ORIGINS
   7. Add key to package.json - "proxy": "http://localhost:8000/"
   8. Create “api” directory and axiosDefaults.js file in frontend/src/
       * Add the following comment:
       * // IMPORTANT!!
       * // Because this React app is running in the same workspace as the API, there is no need to set a separate baseURL until you reach deployment. Setting a baseURL before you reach deployment will cause errors
   9. Open the terminal and type python3 manage.py runserver - (the Django API will run on port 8000)
   10. Open another terminal, cd frontend, and type npm start (the React application will run on port 8080 or 3000)
   11. The React front-end logo should be visible.

  ### Working in both the front and backend
   1. Stop both servers
   2. Set DEV in env.py - either commented out for frontend development or uncommented for backend dev.
       * os.environ['DEV'] = '1'
   3. Start backend server: python3 manage.py runserver
   4. Start frontend server: npm start

  ### Deployment to Heroku involved the following steps and changes:
   1. Setup WhiteNoise for static files
      * pip3 install whitenoise==6.4.0
      * pip3 freeze > requirements.txt
   2. Create a new empty folder called staticfiles in the root directly
      * mkdir staticfiles
   3. In settings.py,
      * ensure ‘cloudinary_storage’ app name is below ‘django.contrib.staticfiles’.
      * Add WhiteNoise below SecurityMiddleware and above SessionMiddleware in MIDDLEWARE list 'whitenoise.middleware.WhiteNoiseMiddleware',
      * In TEMPLATES list set the DIRS key: os.path.join(BASE_DIR, 'staticfiles', 'build')
      * In the static files section, add the STATIC_ROOT and WHITENOISE_ROOT variables and values:
        * STATIC_ROOT = BASE_DIR / 'staticfiles'
        * WHITENOISE_ROOT = BASE_DIR / 'staticfiles' / 'build'
   4. In urls.py
        * remove root_route view from imports, replace with: from django.views.generic import TemplateView
        * In urlpatterns remove root_route and replace with: path('', TemplateView.as_view(template_name='index.html')),
        * Add 404 handler below urlpatterns: handler404 = TemplateView.as_view(template_name='index.html')
        * Update all urls except home and admin with: api/
   5. Update axiosDefaults with baseURL: axios.defaults.baseURL = “/api”;
   6. Collect the admin and DRF staticfiles to the empty staticfiles directory created earlier, with the following command in the terminal:
       * python3 manage.py collectstatic
       * cd frontend
       * npm run build && mv build ../staticfiles/.
   7. NOTE:  Anytime that static files are updated, including the react code:
       * npm run build && rm -rf ../staticfiles/build && mv build ../staticfiles/.
   8. Create a runtime.txt file and add the following: Python-3.9.16
   9. Create a Procfile in the root directory and add: web: gunicorn drf_api.wsgi
   10. Terminate all servers.
       * Ensure DEBUG and DEV in env.py are commented out
       * python3 manage.py runserver
   11. Check project is displaying in the preview on port 8000
   12. Log into your Heroku account, create a new app, and access the dashboard for your application
   13. Go to Settings and open the Config Vars
       * Add CLOUDINARY_KEY (the Cloudinary API key)
       * Add SECRET_KEY - (the unique password)
       * Add DATABASE_URL - (postgres ElephantSQL API key)
       * Add CLIENT_ORIGIN - (set to the URL of the combined project, keeping the https:// at the beginning but removing the trailing slash at the end)
       * Add ALLOWED_HOST - (set to the URL of your combined project, remove the https:// at the beginning and remove the trailing slash at the end)
   14. Ensure your application has an ALLOWED_HOST key, set to the URL of your combined project, remove the https:// at the beginning and remove the trailing slash at the end
   15. Ensure your application has a CLIENT_ORIGIN key and set it to the URL of your combined project. This time keep the https:// at the beginning but remove the trailing slash at the end
   16. Go to the Deploy tab, connect the project to GitHub, and choose main branch to deploy
       * Click Deploy Branch (manually)
       * (Optional) Select Enable Automatic Deploys


* [Back to Contents](#contents)

## FORKING AND CLONING INSTRUCTIONS
You can create a copy of a GitHub Repository without affecting the original by forking or cloning it.

### Here's a step-by-step guide to forking:
Forking is often used for proposing changes or using the project as a starting point for your own idea. Forking will apear on your GitHub profile.
1. Log into GitHub or sign up for an account.
2. Go to the [GarageGuru Repository](https://github.com/rstan-dev/GarageGuru-PP5)
3. Click "Fork" on the right side of the repository's page to create a copy in your own repository.

### Here's a step-by-step guide to cloning:
Cloning is often used for experimenting locally.  It will not show up on your GitHub profile.
1. Go to the [GarageGuru Repository](https://github.com/rstan-dev/GarageGuru-PP5)
2. Click the green code button, then the arrow, and select the "clone by https" option to copy the URL.
3. Open your preferred code editor and navigate to the directory where you want to clone the repository.
4. Type 'git clone', paste the copied URL, and press enter. The repository will then be cloned to your machine.

* [Back to Contents](#contents)

## SECURITY SETTINGS
The following precautions were taken regarding the security of the site:
1. An env.py was created at the start of the project, and added to .gitignore, to contain the following settings:
   - CLOUDINARY_URL
   - SECRET_KEY
   - DATABASE_URL
   - CLIENT_ORIGIN
   - ALLOWED_HOST
2. These values were added to the Config Vars section of Heroku's Settings page.
3. Heroku is configured with 2FA


* [Back to Contents](#contents)

## CREDITS:
The entire concept was created specifically for this assessment and is not a copy of any walkthrough project.

Initially, parts of the project were based on the Moments walkthrough project:
  * CI Template for setting up the repo - [View Here](https://github.com/Code-Institute-Org/cra-template-moments)
  * The Profile Model - similar to the Moments Profile model
  * The Comments model - similar to the Moments Comments model but customised further for replies
  * The Watch model - similar to the Moments Like model - with enhanced UX
  * image_filter and validate_image - used from the Moments walkthrough
  * APITestCase - Jobs tests initially written based on Moments PostList tests

In React, certain components from the Moments walkthrough project were used or closely adapted:
  * CurrentUserProvider - for current user context
  * useToggleMenu -  similar to useClickOutsideToggle hook from Moments, to close the mobile nav menu
  * InfintityScroll setup for Jobs, Invoices and Comments
  * fetchMoredata - utility function to get more API data for use with Infinity Scroll
  * setTokenTimestamp - utility function to decode the JWT refresh token and store its expiration timestamp in local storage.
  * shouldRefreshToken - utility function to check if the refresh token's timestamp is stored in local storage.
  * removeTokenTimestamp - utility function to remove the stored refresh token's expiration timestamp from local storage.
  * React NavBar tests - adapted from Moments

  ### Code
  * All Python logic was written and developed specifically for this project, using the Moments walkthrough as a reference.
  * All frontend HTML, CSS, JavaScript and JSX were incrementally written specifically for this project.

  * [Back to Contents](#contents)

  ### Resources
  I used the following resources to help develop features and functionality:
  1. [DjangoREST Framework](https://www.django-rest-framework.org/)
  2. [Installing all-auth](https://dj-rest-auth.readthedocs.io/en/latest/installation.html)
  3. [QuerySet annotate](https://docs.djangoproject.com/en/3.2/ref/models/querysets/#django.db.models.query.QuerySet.annotate)
  4. [Django Filtering](https://www.django-rest-framework.org/api-guide/filtering/)
  5. [Form Control elements](https://react-bootstrap.netlify.app/docs/forms/form-control/)
  6. [Passing State through Link](https://medium.com/frontendweb/how-to-pass-state-or-data-in-react-router-v6-c366db9ee2f4)
  7. [Use the describe test feature in React tests](https://jestjs.io/docs/api#describename-fn)
  8. ChatGPT was used to help troubleshoot and explain code functions
  9. Google and StackOverflow were also used for more context and understanding
  10. I reached out to Code Institute team members and tutor support from time to time

  I referred to several alumni student’s projects for further ideas and guidance:
  * [MikeR94 - LeagueHub](https://github.com/MikeR94/ci-project-portfolio-5)
  * [Mathew Hurrel - GearAddict](https://github.com/Matthew-Hurrell/gear-addict)
  * [Jamie King - Tickit](https://github.com/jkingportfolio/ci_pp5_tick_it_react)

  * [Back to Contents](#contents)

  ### Content
  * All profile names, content, jobs, invoices and comments are fictional and written specifically for this project.

  * [Back to Contents](#contents)

  ### Media
  * The GarageGuru logo was custom-designed for this project.
  * 24/7 icon created in Canva Pro.
  * Vehicle pics - Royalty free from Canva Pro and Unsplash
  * Profile pics - Royalty free from Unsplash
  * Van pics - Royalty free from Canva Pro and Unsplash
  * Icons - font awesome.

  * [Back to Contents](#contents)

  ### Acknowledgements
  * Thanks to my mentor Mitko for your guidance through our project meetings
  * I would like to thank several of the Code Institute staff for their help and support:
    - Sean Murphy - for our weekly cohort slot where you gave me some invaluable help and advice on tricky issues.
    - Oisin, Gemma, Martin and Joanne in Tutor Support for helping me solve a few issues throughout the times I needed help.
  * And a special thanks to Jeffrey Frankfort for all your patience and support when I was spinning my wheels and doubting myself - You never stopped believing in me!

  * [Back to Contents](#contents)
