// let rectangles = [
//   [3, 4],
//   [6, 6],
//   [1, 8],
//   [9, 9],
//   [2, 2],
// ];

// function totalArea(rectangles) {
//   let calcArea = (arr) => arr[0] * arr[1];
//   let sumArea = (areaSum, rec) => areaSum + calcArea(rec);
//   return rectangles.reduce(sumArea, 0);
// }

// console.log(totalArea(rectangles)); // 141

// let newReleases = [
//   {
//     id: 70111470,
//     title: "Die Hard",
//     boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//     uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//     rating: [4.0],
//     bookmark: [],
//   },
//   {
//     id: 654356453,
//     boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//     uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//     rating: [5.0],
//     bookmark: [{ id: 432534, time: 65876586 }],
//   },
//   {
//     title: "The Chamber",
//     boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
//     uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//     rating: [4.0],
//     bookmark: [],
//   },
//   {
//     id: 675465,
//     title: "Fracture",
//     boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
//     uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//     rating: [5.0],
//     bookmark: [{ id: 432534, time: 65876586 }],
//   },
// ];

// function processReleaseData(data) {
//   const isValidRelease = (release) => release.id && release.title;
//   const extractInfo = (resultArr, release) => {
//     if (isValidRelease(release)) {
//       return resultArr.concat({ id: release.id, title: release.title });
//     }
//     return resultArr;
//   };
//   return data.reduce(extractInfo, []);
// }

// console.log(processReleaseData(newReleases));

// // should return:
// [
//   { id: 70111470, title: "Die Hard" },
//   { id: 675465, title: "Fracture" },
// ];

// function octalToDecimal(numberString) {
//   const calcSingleDigit = (num, pos) => parseInt(num) * 8 ** pos;
//   let numberArr = numberString.split("").reverse();
//   const addNumber = (sum, curNum, curIdx) =>
//     sum + calcSingleDigit(curNum, curIdx);
//   console.log(numberArr.reduce(addNumber, 0));
// }

// octalToDecimal("1"); // 1
// octalToDecimal("10"); // 8
// octalToDecimal("130"); // 88
// octalToDecimal("17"); // 15
// octalToDecimal("2047"); // 1063
// octalToDecimal("011"); //9

// function anagram(word, list) {
//   const isAnagram = (word1, word2) => {
//     if (word1.length !== word2.length) {
//       return false;
//     } else {
//       let word1Arr = word1.split("").sort();
//       let word2Arr = word2.split("").sort();
//       for (i = 0; i < word1Arr.length; i++) {
//         if (word1Arr[i] !== word2Arr[i]) {
//           return false;
//         }
//       }
//       return true;
//     }
//   };
//   console.log(list.filter((curword) => isAnagram(word, curword)));
// }

// anagram("listen", ["enlists", "google", "inlets", "banana"]); // [ "inlets" ]
// anagram("listen", ["enlist", "google", "inlets", "banana"]); // [ "enlist", "inlets" ]

// let bands = [
//   { name: "sunset rubdown", country: "UK", active: false },
//   { name: "women", country: "Germany", active: false },
//   { name: "a silver mt. zion", country: "Spain", active: true },
// ];

// function processBands(data) {
//   const changeCountry = (obj) => {
//     obj["country"] = "Canada";
//   };
//   const removeDot = (str) => str.replace(/\./g, "");

//   const capitalizeWord = (word) =>
//     word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();

//   const changeBandName = (name) =>
//     removeDot(name).split(" ").map(capitalizeWord).join(" ");

//   const processBand = (band) => {
//     changeCountry(band);
//     band.name = changeBandName(band.name);
//     return band;
//   };

//   console.log(data.map(processBand));
// }

// processBands(bands);

// should return:
// [
//   { name: "Sunset Rubdown", country: "Canada", active: false },
//   { name: "Women", country: "Canada", active: false },
//   { name: "A Silver Mt Zion", country: "Canada", active: true },
// ];

// let studentScores = {
//   student1: {
//     id: 123456789,
//     scores: {
//       exams: [90, 95, 100, 80],
//       exercises: [20, 15, 10, 19, 15],
//     },
//   },
//   student2: {
//     id: 123456799,
//     scores: {
//       exams: [50, 70, 90, 100],
//       exercises: [0, 15, 20, 15, 15],
//     },
//   },
//   student3: {
//     id: 123457789,
//     scores: {
//       exams: [88, 87, 88, 89],
//       exercises: [10, 20, 10, 19, 18],
//     },
//   },
//   student4: {
//     id: 112233445,
//     scores: {
//       exams: [100, 100, 100, 100],
//       exercises: [10, 15, 10, 10, 15],
//     },
//   },
//   student5: {
//     id: 112233446,
//     scores: {
//       exams: [50, 80, 60, 90],
//       exercises: [10, 0, 10, 10, 0],
//     },
//   },
// };

// const sumScores = (scores) => scores.reduce((total, score) => total + score);

// function generateClassRecordSummary(scores) {
//   // ...

//   const examScoreCalc = (exams) => sumScores(exams) / exams.length;
//   const excersisesScoreCalc = (exercises) => sumScores(exercises);
//   const finalScoreCalc = (exams, exercises) =>
//     Math.round(
//       examScoreCalc(exams) * 0.65 + excersisesScoreCalc(exercises) * 0.35
//     );

//   const gradeCalc = (score) => {
//     if (score >= 93) {
//       return "A";
//     } else if (score >= 85) {
//       return "B";
//     } else if (score >= 77) {
//       return "C";
//     } else if (score >= 69) {
//       return "D";
//     } else if (score >= 60) {
//       return "E";
//     } else {
//       return "F";
//     }
//   };
//   let result = { studentGrades: [], exams: [[], [], [], []] };
//   const studentProcessor = (student) => {
//     let score = finalScoreCalc(student.scores.exams, student.scores.exercises);
//     let grade = gradeCalc(score);
//     result.studentGrades.push(`${score.toString()} (${grade})`);
//     student.scores.exams.forEach((score, idx) => result.exams[idx].push(score));
//   };
//   const summariseExam = (examArr) => ({
//     average: (sumScores(examArr) / examArr.length).toFixed(1),
//     minimum: Math.min(...examArr),
//     maximum: Math.max(...examArr),
//   });
//   Object.values(scores).forEach(studentProcessor);
//   result.exams = result.exams.map(summariseExam);
//   console.log(result);
// }

// generateClassRecordSummary(studentScores);

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }
