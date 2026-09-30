const name = "Shihab Arman";

const subjects = ["Math6", "CN", "Webtech", "Software", "ML"];
const marks = [95, 75, 90, 80, 85];

function calculateTotal(markList) {
  let total = 0;

  for (let i = 0; i < markList.length; i++) {
    total = total + markList[i];
  }

  return total;
}

function calculateAverage(markList) {
  let total = calculateTotal(markList);

  return total / markList.length;
}

function getGrade(avg) {
  if (avg >= 90) {
    return "A+";
  }
  else if (avg >= 85) {
    return "A";
  }
  else if (avg >= 80) {
    return "B+";
  }
  else if (avg >= 75) {
    return "B";
  }
  else if (avg >= 70) {
    return "B-";
  }
  else if (avg >= 60) {
    return "C";
  }
  else if (avg >= 50) {
    return "D";
  }
  else {
    return "F";
  }
}

function checkPassFail(avg) {
  if (avg >= 50) {
    return "Passed";
  }
  else {
    return "Failed";
  }
}

function findHighestMark(markList) {
  let highest = markList[0];

  for (let i = 0; i < markList.length; i++) {
    if (markList[i] > highest) {
      highest = markList[i];
    }
  }

  return highest;
}

function countPassedSubjects(markList) {
  let count = 0;

  for (let i = 0; i < markList.length; i++) {
    if (markList[i] >= 50) {
      count = count + 1;
    }
  }

  return count;
}

let totalMarks = calculateTotal(marks);
let avgMarks = calculateAverage(marks);
let studentGrade = getGrade(avgMarks);
let result = checkPassFail(avgMarks);
let highestMark = findHighestMark(marks);
let passedSubjects = countPassedSubjects(marks);

console.log("Student Name: " + name);

console.log("Subject Marks:");

for (let i = 0; i < subjects.length; i++) {
  console.log(subjects[i] + ": " + marks[i]);
}

console.log("Total Marks: " + totalMarks);
console.log("Average: " + avgMarks);
console.log("Grade: " + studentGrade);
console.log("Pass/Fail: " + result);
console.log("Highest Mark: " + highestMark);
console.log("Passed Subjects: " + passedSubjects);