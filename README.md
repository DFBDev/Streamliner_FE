# Front-end/View for Streamliner web application. 
This is the front-end for Streamliner; a web application created to simplify the once-manual coordination process of daily tutoring records among administrative officials by storing records locally and leveraging the Simple Mail Transfer Protocol (or SMTP). 

Backend repository can be found [here](https://github.com/DFBDev/Streamliner_BE).

## Student Information Form
Contains fields for student first name, last name, subject, time-in, time-out and password for locally hosted database. Uses the fetch method in JavaScript for performing POST request to the "/" endpoint. Submits the form data into appropriate rows and columns in local postgreSQL database.

## SMTP Service Form
Contains fields for email origin, email destination, SMTP password and local database password. Also uses fetch method in JavaScript to perform POST requests to the "/smtp" endpoint to queue an SMTP request via google's SMTP service. Effectively allows for the extraction and delivery of current student records within local database to desired email destination.

## Project Structure
* `/Index.html`: Contains HTML boilerplate, forms, font links and script links. As of v1.0.0, it is the only HTML file.
* `/styles.css`: Contains stylings for `Index.html`. As of v1.0.0, it is the only CSS file.
* `/handlers/submissionHandler.js`: Contains fetch function for executing post request and sending Student Information Form data as payload to the "/" endpoint. 
* `/handlers/smtpHandler`: Responsible for executing POST request to "/smtp" endpoint using fetch function. Pulls form data from SMTP Service Form and sends it as payload to said endpoint.

## Releases
* v1.0.0 - First release. Contains all necessary code for UI and sending data.
* v1.0.1 - Changed status-code handlers from 200 to 204. Organized CSS alphabetically.

## Changing/Modifying
**COMING SOON**

### Made in pure HTML, CSS and JavaScript.
