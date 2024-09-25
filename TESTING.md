# PROJECT TEST DOC - The Win Manager

## CONTENTS
[TESTS PERFORMED](#tests-performed)
  * [Manual User Story Tests](#manual-user-story-tests)
  * [HTML](#html)
  * [CSS](#css)
  * [ESLINT](#eslint)
  * [PYLINT & PEP8](#pylint-and-pep8)
  * [Lighthouse](#lighthouse)
  * [Browser Compatability](#browser-compatability)
  * [Automated Tests](#automated-tests)
  * [Final Manual Checks](#final-manual-checks)


  [Return to README.md](https://github.com//README.md)


## TESTS PERFORMED
  The site was thoroughly tested during development with each feature tested before committing to GitHub. The testing regime included:
  1. Incremental preview testing
  2. Initial Django Automated Tests
  2. Early user observation test
  3. Manual user story tests on the dev app
  4. Final Django Automated Tests - checks and updates
  5. React Automated Tests
  5. HTML, CSS, ESLINT, PYLINT, Lighthouse
  6. Browser Compatability Tests
  7. Final manual user story tests on the production app

  ### Manual User Story Tests
  User story tests were conducted systematically, with any failing tests rectified.  A link to the Google Test Sheet [can be found here](https://docs.google.com/spreadsheets/d/1esaHTm738sbXP-JMxzEvQ63mgN3IazsXGUL8tRsX0ZI/edit#gid=165646488)

  <details>
    <summary><u>Click to View Manual User Story Test Evidence</u></summary>
      - <img src="https://github.com/rstan-dev/GarageGuru-PP5/blob/main/documentation/images/test_results/manual_test1.png"><br>
      - <img src="https://github.com/rstan-dev/GarageGuru-PP5/blob/main/documentation/images/test_results/manual_test2.png"><br>
      - <img src="https://github.com/rstan-dev/GarageGuru-PP5/blob/main/documentation/images/test_results/manual_test3.png"><br>
      - <img src="https://github.com/rstan-dev/GarageGuru-PP5/blob/main/documentation/images/test_results/manual_test4.png"><br>
      - <img src="https://github.com/rstan-dev/GarageGuru-PP5/blob/main/documentation/images/test_results/manual_test5.png"><br>
      - <img src="https://github.com/rstan-dev/GarageGuru-PP5/blob/main/documentation/images/test_results/manual_test6.png"><br>
      - <img src="https://github.com/rstan-dev/GarageGuru-PP5/blob/main/documentation/images/test_results/manual_test7.png"><br>
      - <img src="https://github.com/rstan-dev/GarageGuru-PP5/blob/main/documentation/images/test_results/manual_test8.png"><br>
      - <img src="https://github.com/rstan-dev/GarageGuru-PP5/blob/main/documentation/images/test_results/manual_test9.png"><br>

  </details>

  * [Back to Contents](#contents)

  ### HTML
  All HTML pages were checked with [NU HTML Checker](https://validator.w3.org/nu/)

  <details>
    <summary><u>Click to View HTML Test Evidence</u></summary>
      - <img src="https://github.com/"><br>
  </details>

  * [Back to Contents](#contents)

  ### CSS
  All CSS pages were checked with [JIGSAW W3 VALIDATION](https://jigsaw.w3.org/css-validator/)

  <details>
    <summary><u>Click to View CSS Test Evidence</u></summary>
       - <img src="https://github.com/rstan-dev/GarageGuru-PP5/blob/main/documentation/images/test_results/w3jigsaw_add_invoice.png"><br>
  </details>

   * [Back to Contents](#contents)

   ### ESLINT
  All JS pages were checked with [ESLINT](https://eslint.org/)

  <details>
    <summary><u>Click to View ESLINT Test Evidence</u></summary>
      - <img src="https://github.com/rstan-dev/GarageGuru-PP5/blob/main/documentation/images/test_results/eslint_results.png"><br>

  </details>

  * [Back to Contents](#contents)

  ### PYLINT AND PEP8
  All Python pages were checked with [CODE INSTITUTES PYTHON LINTER](https://pep8ci.herokuapp.com/)

  <details>
    <summary><u>Click to View PYLINT Test Evidence</u></summary>
      - <img src="https://github.com/rstan-dev/GarageGuru-PP5/blob/main/documentation/images/test_results/pep8_comments_admin.png"><br>
  </details>

  * [Back to Contents](#contents)

  ### LIGHTHOUSE
  A lighthouse report was run on the site on the following pages to ensure accessibility criteria was met
   * AllJobs
   * AllInvoices
   * EditInvoices
   * EditJob
   * Jobcard
   * ProfilePage

The performance issues are related to image sizes which are managed in the backend. A certain resolution is needed for good quality and as the app is fully responsive the images need to be flexible according to the container size - so this item has been left.

  <details>
    <summary><u>Click to View LightHouse Test Evidence</u></summary>
      - <img src="https://github.com/rstan-dev/GarageGuru-PP5/blob/main/documentation/images/test_results/lighthouse_all_jobs.png"><br>
  </details>

  * [Back to Contents](#contents)

  ### Browser Compatability
  - The production site was tested using [Browserstack](https://www.browserstack.com/) to ensure compatibility across various devices, and browsers including Mac, iPhone, Windows and Android, Chrome, Safari and Firefox on different pages chosen at random

  <details>
    <summary><u>Click to View Browser Test Evidence</u></summary>
      - <img src="https://github.com/rstan-dev/GarageGuru-PP5/blob/main/documentation/images/test_results/browserstack_googlepixel5_firefox.png"><br>
  </details>

  * [Back to Contents](#contents)

  ### Automated Tests
  * A total of 37 automated tests were written covering 95% of the code using the DjangoRESTFramework APITestCase library.
  * The tests were set up using a TEST database. These settings were changed to address certain deployment issues. The code can be seen below.
  * The tests can be run by entering "python3 manage.py test" into the terminal. Tests covered 95% of the code and included tests on:
     - Jobs
     - Invoices
     - Profiles
     - Comments
     - Watchers

  * A total of 10 tests were run on the react code using Jest. The tests can be run using npm test.


  <details>
    <summary><u>Click to View Automated Test Evidence & Coverage Report</u></summary>
    - <img src="https://github.com/rstan-dev/GarageGuru-PP5/blob/main/documentation/images/test_results/test_db_settings.png"><br>
    - <img src="https://github.com/rstan-dev/GarageGuru-PP5/blob/main/documentation/images/test_results/api_test_jobs.png"><br>
    - <img src="https://github.com/rstan-dev/GarageGuru-PP5/blob/main/documentation/images/test_results/api_test_invoices.png"><br>
    - <img src="https://github.com/rstan-dev/GarageGuru-PP5/blob/main/documentation/images/test_results/api_test_profiles.png"><br>
    - <img src="https://github.com/rstan-dev/GarageGuru-PP5/blob/main/documentation/images/test_results/api_test_comments.png"><br>
    - <img src="https://github.com/rstan-dev/GarageGuru-PP5/blob/main/documentation/images/test_results/api_test_watchers.png"><br>
    - <img src="https://github.com/rstan-dev/GarageGuru-PP5/blob/main/documentation/images/test_results/api_test_coverage1.png"><br>
    - <img src="https://github.com/rstan-dev/GarageGuru-PP5/blob/main/documentation/images/test_results/api_test_coverage2.png"><br>
    - <img src="https://github.com/rstan-dev/GarageGuru-PP5/blob/main/documentation/images/test_results/react_test_results.png"><br>

  </details>

  ### Final Manual Checks
  On deployment, a final check of all user stories was conducted on the production version, and any changes required were addressed and the project was redeployed.

  Every page of code was double checked to ensure there was no redundant or commented out code.

  There are some console.log(err) which were left commented out, for future debugging purposes.

  <details>
    <summary><u>Click to View Final User Story Tests</u></summary>
    - <img src="https://github.com/rstan-dev/GarageGuru-PP5/blob/main/documentation/images/test_results/final_manual1.png"><br>


  </details>

  <br>

  On the final manual pass, an anomoly was noticed on one specific page on the deployed version: https://garageguru2023-9cc8e49ac2b8.herokuapp.com/assigned

  * When navigating to the page via the menu the page loads as expected.
  * When refreshing the page, a "Dangerous Site" warning appeared. This only occurs on one URL, and it only occurs on my Google Chrome.
  * I could not replicate this issue in Incognito mode, on Firefox, or on Browserstack's Chrome browser on a Mac or a Windows terminal.
  * I contacted Tutor Support and spoke to John Rearden on 15th Dec 2023 and raised this issue and he was unable to replicate it.
  * Mitko Bachvarov, my mentor assured me this is a Heroku URL issue which causes some issues with certain browsers, and is not a bug in my project.
  * I have left this as is.

  Screen shots of the different browser tests have been included in the test results below.

  <details>
    <summary><u>Click to View Heroku URL issue </u></summary>
    - <img src="https://github.com/rstan-dev/GarageGuru-PP5/blob/main/documentation/images/test_results/dangerous_site_warning.png">
    <br>
    and other evidence from different browsers that did not display that warning:
    <br>
    - <img src="https://github.com/rstan-dev/GarageGuru-PP5/blob/main/documentation/images/test_results/dangerous_page_no_warning_firefox.png"><br>
    - <img src="https://github.com/rstan-dev/GarageGuru-PP5/blob/main/documentation/images/test_results/dangerous_page_browserstack_chrome_no_warning.png"><br>

  </details>


  * [Back to Contents](#contents)
