
var bio = {
    "name" : "Rachel Gura",
    "role" : "Front End Web Developer",
    "contacts" : {
        "mobile" : "903-272-4648",
        "email" : "sparrowdetour@gmail.com",
        "Github" : "rachelgura", 
        "location" : "Dallas, TX",
        "Twitter" :"@rgura"
        
    }, 
    "welcomeMessage" : "I'm an ambitious professional who takes pleasure in developing innovative and empathetic design.", 
    "skills" : [
            "Motivated","Creative Thinker","HTML", "CSS Frameworks", "Bootstrap", "Github"
    ],
    "biopic" : "images/profile.jpg"
};


var work = {
    "jobs" : [
    {
        "employer" : "LPG", 
        "title" : "Agent Support",
        "dates" : "2015 - Current",
        "location" : "Irving, TX",
        "description" : "Provided online support for annuity agents nationwide."
    },
    {
        "employer" : "Animal Hospital of Valley Ranch", 
        "title" : "Veterinary Assistant",
        "dates" : "2014 - 2015",
        "location" : "Irving, TX",
        "description" : "Acted as assistant to the doctor, assisted in procedures and surgury, maintained boarding facility."    
    },
    {
        "employer" : "Cinemark USA", 
        "title" : "Manager of Human Resources",
        "dates" : "2010 - 2014",
        "location" : "Denton, TX",
        "description" : "Responsible for inventory of facility, performed hiring, training and evaluation of all employees."    
    }]
    
};

var projects = {
    "project" : [{
        "title" : "Interactive Resume",
        "dates" : "2016", 
        "description" : "An interactive resume detailing my experience.", 
        "images" : ["http://lorempixel.com/300/200","http://lorempixel.com/300/200"]
    },
    {
        "title" : "Mock Portfolio",
        "dates" : "2016", 
        "description" : "A mock-up porfolio detailing CSS Frameworks.", 
        "images" : ["http://lorempixel.com/300/200","http://lorempixel.com/300/200"]
    }]
};

var education = {
    "schools" : [
    {
        "name" : "Texas Women's University",
        "location" : "Denton, TX",
        "degree" : "Bachelor", 
        "majors" : "Psychology",
        "dates" : "2011-2013",
        "url" : "http://www.twu.edu/"
    },
    {
        "name" : "Paris Junior College",
        "location" : "Paris, TX",
        "degree" : "Associate", 
        "majors" : "Psychology",
        "dates" : "2008-2010",
        "url" : "http://www.parisjc.edu/"
    }],
    "onlineCourses" : [{
        "title" : "Front-End Web Developer Nanodegree",
        "school" : "Udacity",
        "dates" : "2016",
        "url" : "https://www.udacity.com/course/nd001"
    
    
    }]
};

education.display = function() {
        
    for(school in education.schools) {
        $("#education").append(HTMLschoolStart);
        
        var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
        $(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
    }

 $("#education").append(HTMLonlineClasses);
          for (var course in education.onlineCourses) {
             
              $("#education").append(HTMLschoolStart);
                  var formattedonlineTitle =HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
                  var formattedonlineSchool =HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
                  var formattedonlineDate =
                  HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
                  var formattedURL =HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
                 $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool,formattedonlineDate,formattedURL);
                }
};

bio.display = function() {
  
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    var formattedImage = HTMLbioPic.replace("%data%",bio.biopic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    
    $("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage,formattedMessage);
    $("#header").append(HTMLskillsStart);

    for(skill in bio.skills) {
        var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
        $("#skills").append(formattedSkills);
    };

    

    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%contact%","Github").replace("%data%",bio.contacts.Github);
    var formattedLocation =HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedTwitter =HTMLtwitter.replace("%data%", bio.contacts.Twitter);

    $("#topContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedTwitter,formattedLocation);

   
};



work.display = function() {
    for(job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        
        var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
        var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

        $(".work-entry:last").append(formattedEmployer + formattedTitle,formattedDates,formattedDescription);
    }
};

projects.display = function(){
    for(item in projects.project){
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[item].title);
        var formattedDates = HTMLprojectDates.replace("%data%",projects.project[item].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[item].description);
        
        $(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);
        for (image in projects.project[item].images) {
            var formattedImage = HTMLprojectImage.replace("%data%",projects.project[item].images[image]);
            $(".project-entry:last").append(formattedImage);
        };
        

        
    }
};

function inName() {
    var name=bio.name.split(" ");
    document.getElementById("name").innerHTML=name;
    console.log(name);
}


work.display();
projects.display();
education.display();
bio.display();



$("#mapDiv").append(googleMap);



// display blocks //

      if(document.getElementsByClassName('flex-item').length === 0) {
        document.getElementById('topContacts').style.backgroundColor = '#000000'    ;
      }
      if(document.getElementsByTagName('h1').length === 0) {
        document.getElementById('header').style.backgroundColor = '#000000';
      }
      if(document.getElementsByClassName('work-entry').length === 0) {
        document.getElementById('workExperience').style.backgroundColor = '#000000';
      }
      if(document.getElementsByClassName('project-entry').length === 0) {
        document.getElementById('projects').style.backgroundColor = '#000000';
      }
      if(document.getElementsByClassName('education-entry').length === 0) {
        document.getElementById('education').style.backgroundColor = '#000000';
      }
      if(document.getElementsByClassName('flex-item').length === 0) {
        document.getElementById('letsConnect').style.backgroundColor = '#000000';
      }
      if(document.getElementById('map') === null) {
        document.getElementById('mapDiv').style.backgroundColor = '#000000';
      }