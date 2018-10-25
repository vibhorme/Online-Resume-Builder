// This file contains all the data that you want to be displayed
// on your online resume.
// You'll making changes to just this file in order to create
// your online resume.

// It contains all the details already filled out with some
// sample details, you just need to edit those and fill in your
// own details.

// Header object
// This holds your name, role and image url to be displayed in the header.
var header = {
    // Replace Walter White within quotes with your own name
    "name": "Vibhor Grover",
    // Replace Chemical Engineer within quotes with your own role/post.
    "role": "Engineer",
    // Copy and paste your image in the 'images' folder and then
    // replace 'biopic.img' with your image name.
    // for example if your image name is 'passport.jpg' then the line
    // would look like "biopic": "images/passport.jpg"
    // if you don't want your image to be displayed then replace
    // images/biopic.jpg within quotes with # symbol. So the line
    // would look like "biopic": "#"
    "biopic": "images/biopic.jpg"
};

// Personal object
// This holds your personal info like name, sex, dateofbirth, nationality
// and spokenlanguages to be displayed in the sidebar.
var personal = {
    // Replace Walter White within quotes with your own name
    "name": "Vibhor Grover",
    // Replace Male within quotes with your sex
    "sex": "Male",
    // Replace Jan 1, 1956 within quotes with your own date of birth
    "dateofbirth": "Dec 11, 1995",
    // Replace American within quotes with your own nationality
    "nationality": "Indian",
    // Replace English within quotes with the languages you speak
    // separated by commas. For example if you speak Arabic and Spanish
    // then the line would look like "languages": "Arabic, Spanish"
    "languages": "English"
};

// Contacts object
// This holds your contact details like mobile, email and address
// to be displayed in the sidebar.
var contacts = {
    // Replace 9213467816 within quotes with your own mobile no.
    "mobile": "12345667896",
    // Replace heisenberg@ww.com within quotes with your own email
    "email": "heisenberg@ww.com",
    // Replace 25th Street, Albuquerque within quotes with your address
    "address": "25th Street, Albuquerque"
};

// Links object
// This holds your links like github, linkedin, twitter and
// personal website to be displayed in the sidebar.
var links = {
    // Replace walterwhite within quotes with your github user name
    "github": "vibhorme",
    // Replace # within quotes with your github profile url.
    // For example if your github profile url is https://github.com/walterwhite
    // then the line would look like
    // "githubUrl": "https://github.com/walterwhite"
    // If you don't want to link then leave as it is.
    "githubUrl": "#",
    // Replace walterwhite within quotes with your linkedin user name
    "linkedin": "vibhor",
    // Replace # within quotes with your linkedin profile url.
    // Refer to github url example
    // If you don't want to link then leave as it is.
    "linkedinUrl": "#",
    // Replace heisenberg within quotes with your twitter user name
    "twitter": "vibhorme",
    // Replace # within quotes with your twitter account url.
    // Refer to github url example
    // If you don't want to link then leave as it is.
    "twitterUrl": "#",
    // Replace heisenberg.com within quotes with your own personal website link
    "website": "vibhorme.github.io",
    // Replace # within quotes with your website url.
    // Refer to github url example
    // If you don't want to link then leave as it is.
    "websiteUrl": "#"
};

// Profile object
// This holds profile description
var profile = {
    // Replace the content within quotes with your own description.
    "profile": "Lorem ipsum dolor sit amet, pro ut eirmod fabellas, has ea aliquam disputationi moderatius quaerendum per. No periculis democritum concludaturque pri, et sonet moderatius quaerendum per, eum ea mollis albucius mnesarchum. Cu splendide voluptatum sed. Cu duo persius assueverit, ut sit elit persius euismod."
};

// Skills object
// This holds your skills
var skills = {
    "skills": [
        
        "Html", "CSS", "Javascript", "React", "Redux", "MongoDb", "Expressjs", "nodejs"
    ]
};

// Experience object
// This holds your experience details
var experience = {
    "jobs": [
        // Each job details are enclosed within {} brackets separated by commas
        {
            // Replace Feb, 1979 - Jan, 1984 within quotes with your job dates
            "date": "Feb, 1979 - Jan, 1984",
            // Replace Co-Founder within quotes with your job title
            "title": "developer",
            // Replace California within quotes with your job location
            "location": "india",
            // Replace Gray Matter Technology within quotes with your job company
            "company": "sample",
            // Replace the content within the quotes with your job description
            "description": "Lorem ipsum dolor sit amet, pro ut eirmod fabellas, has ea aliquam disputationi moderatius quaerendum per. No periculis democritum concludaturque pri, et sonet moderatius quaerendum per, eum ea mollis albucius mnesarchum. Cu splendide voluptatum sed. Cu duo persius assueverit, ut sit elit persius euismod."
        },
        // If you only want one job experience to display then remove the comma at the
        // end of previous job experience's closing bracket '}' and remove the next job
        // details entered below within the curly brackets '{}' and also remove the
        // curly brackets.
        {
            // Replace Jun, 1990 - Dec, 2009 within quotes with your job dates
            "date": "Jun, 1990 - Dec, 2009",
            // Replace Chemistry Teacher within quotes with your job title
            "title": "entrepreneur",
            // Replace Albuquerque within quotes with your job location
            "location": "Albuquerque",
            // Replace JP Wynne High School within quotes with your job company
            "company": "sample",
            // Replace the content within the quotes with your job description
            "description": "Lorem ipsum dolor sit amet, pro ut eirmod fabellas, has ea aliquam disputationi moderatius quaerendum per. No periculis democritum concludaturque pri, et sonet moderatius quaerendum per, eum ea mollis albucius mnesarchum. Cu splendide voluptatum sed. Cu duo persius assueverit, ut sit elit persius euismod."
        }
        // If you want to add more job experiences simply add a comma ',' after the
        // ending curly brackets '}' of previous job details and copy the previous
        // job details enclosed within the curly brackets '{}' along with the curly brackets
        // and paste in the next line of previous job details closing bracket.
        // Now replace the details within the newly pasted job details with your own job details.
    ]
};

// Projects object
// This holds your projects details
var projects = {
    "projects": [
        // Each project details are enclosed within {} brackets separated by commas
        {
            // Replace November, 1981 within quotes with your project dates
            "date": "November, 1981",
            // Replace Proton Radiography within quotes with your project title
            "title": "apllications",
            // Replace the content within the quotes with your project description
            "description": "Lorem ipsum dolor sit amet, pro ut eirmod fabellas, has ea aliquam disputationi moderatius quaerendum per. No periculis democritum concludaturque pri, et sonet moderatius quaerendum per, eum ea mollis albucius mnesarchum. Cu splendide voluptatum sed. Cu duo persius assueverit, ut sit elit persius euismod."
        },
        // If you only want one project details to display then remove the comma at the
        // end of previous project details closing bracket '}' and remove the next project
        // details entered below within the curly brackets '{}' and also remove the
        // curly brackets.
        {
            // Replace June, 2007 within quotes with your project dates
            "date": "June, 2007",
            // Replace Methamphetamine Distillation within quotes with your project title
            "title": "projects",
            // Replace the content within the quotes with your project description
            "description": "Lorem ipsum dolor sit amet, pro ut eirmod fabellas, has ea aliquam disputationi moderatius quaerendum per. No periculis democritum concludaturque pri, et sonet moderatius quaerendum per, eum ea mollis albucius mnesarchum. Cu splendide voluptatum sed. Cu duo persius assueverit, ut sit elit persius euismod."
        }
        // If you want to add more project details simply add a comma ',' after the
        // ending curly brackets '}' of previous project details and copy the previous
        // project details enclosed within the curly brackets '{}' along with the curly brackets
        // and paste in the next line of previous project details closing bracket.
        // Now replace the details within the newly pasted project details with your own project details.
    ]
};

// Education object
// This holds your education details
var education = {
    "schools": [
        // Each school/college details are enclosed within {} brackets separated by commas
        {
            // Replace Aug, 1974 - Jun, 1978 within quotes with your school/college dates
            "date": "2014-2018",
            // Replace Chemical Engineering and Applied Sciences within quotes with your
            // degree/major/class/grade
            "degree": "Bachelors Of Technology",
            // Replace California Institute of Technology within quotes with your school/college
            "college": "Srm University"
        },
        // If you only want one school details to display then remove the comma at the
        // end of previous school details closing bracket '}' and remove the next school
        // details entered below within the curly brackets '{}' and also remove the
        // curly brackets.
        {
            // Replace Aug, 1974 - Jun, 1978 within quotes with your school/college dates
            "date": "2006-2014",
            // Replace Chemical Engineering and Applied Sciences within quotes with your
            // degree/major/class/grade
            "degree": "High School",
            // Replace California Institute of Technology within quotes with your school/college
            "college": "School"
        }
        // If you want to add more school details simply add a comma ',' after the
        // ending curly brackets '}' of previous school details and copy the previous
        // school details enclosed within the curly brackets '{}' along with the curly brackets
        // and paste in the next line of previous school details closing bracket.
        // Now replace the details within the newly pasted school details with your own school details.
    ]
};
