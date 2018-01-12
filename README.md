# Doctor Lookup
January 12, 2018. Amy Churchwell.

:hospital: A website where users may enter a medical issue (ie: “sore throat”, "rash", etc.) into a form, submit it, and receive a list of doctors in your city (Portland or Seattle depending on where you are) who can treat their medical issue.

## Requirements

A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.

A user should be able to to enter a name to receive a _list_ of doctors in the Portland area that fit the search query.

If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).

If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.

If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)

## Setup Instructions

[x] Place your token in an .env file at the top level of your directory. (For grading purposes, name your API key variable exports.apiKey in .env. Keep spelling and capitalization identical, as it considerably speeds up the grading process.)

[x] Include .env in .gitignore.

[x] Use at least two JavaScript files: One to receive form input and another to make an API request and display results.

[x] This example assumes your API Key is stored in an apiKey variable, as described in this lesson. In order to make your applications quick to grade, please follow the example exactly and do not rename your apiKey variable to something different.
