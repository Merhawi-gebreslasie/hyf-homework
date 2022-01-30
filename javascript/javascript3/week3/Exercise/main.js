//1. Create a user class



//The class should have 2 properties: firstName and lastName. Hint: Use this and constructor
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
const user1 = new User("Merhawi", "Gebreslassie");
const user2 = new User("Goytom", "Gebreslassie");

//Create a class method

class UserInfo {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

const userInfo = new UserInfo("Merhawi", "Gebreslassie");
console.log(userInfo.getFullName());

class Job {
  constructor(id, title, description, startDate, endDate) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

class Education {
  constructor(id, title, school, address, startDate, endDate) {
    this.id = id;
    this.title = title;
    this.school = school;
    this.address = address;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

class CV {
  constructor(email) {
    this.jobs = [];
    this.educations = [];
    this.email = email;
  }

  addJob(job) {
    // add functionality here
    this.jobs.push(job);
  }

  removeJob(job) {
    // add functionality here
  // this.jobs=this.jobs.filter(j=>j.id!==job.id);
  for (let i = 0; i < this.jobs.length; i++) {
    const j = this.jobs[i];
    if (j.id===job.id) {
      this.jobs.splice(i, 1);
      return;
    }
  }
  }

  addEducation(education) {
    // add functionality here
   this.educations.push(education);  
    
  }

  removeEducation(education) {
    // add functionality here
    for (let i = 0; i < this.educations.length; i++) {
      const j = this.educations[i];
      if (j.id===education.id) {
        this.educations.splice(i, 1);
        return;
      }
    }
  }
}
const myCv = new CV("mmmm@gmail.com");
const job = myCv.addJob(
  new Job(
    "1",
    "Junior developer",
    "resposnible and creative",
    "jan 2022",
    "-2022"
  )
);
const education1=myCv.addEducation(
  new Education("1", "Bs Mathematics", "EIT", "Maj nefhi", "2006", "2011")
);

const education2=myCv.addEducation(
    new Education("2", "web developer", "HackYourFuture", "Copenhagen", "2021", "2022")
  );
  
const job2 = myCv.addJob(
    new Job(
        "2",
        "Junior developer",
        "resposnible and creative",
        "jan 2022",
        "-2022"
        )
        );

        console.log(myCv);
      myCv.removeEducation(  new Education("1", "Bs Mathematics", "EIT", "Maj nefhi", "2006", "2011")
      )
       myCv.removeJob(new Job(
        "1",
        "Junior developer",
        "resposnible and creative",
        "jan 2022",
        "-2022"
      ))
       console.log(myCv);