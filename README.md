# Front-end/View for Streamliner web application. 
This is the front-end for Streamliner; a web application created to simplify the once-manual coordination process of daily tutoring records among administrative officials by storing records locally and leveraging the Simple Mail Transfer Protocol (or SMTP). 

Backend repository can be found [here](https://github.com/DFBDev/Streamliner_BE).

## Student Information Form
Contains fields for student first name, last name, subject, time-in, time-out and password for locally hosted database. Uses the fetch method in JavaScript for performing POST request to the "/" endpoint. Submits the form data into appropriate rows and columns in local postgreSQL database.

## SMTP Service Form
Contains fields for email origin, email destination, SMTP password and local database password. Also uses fetch method in JavaScript to perform POST requests to the "/smtp" endpoint to queue an SMTP request via google's SMTP service. Effectively allows for the extraction and delivery of current student records within local database to desired email destination.

### Made in pure HTML, CSS and JavaScript.
