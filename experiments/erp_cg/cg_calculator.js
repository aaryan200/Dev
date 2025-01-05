// Select all the elements with id = "txt_*_SG_Grade" and get the list of the text values of these elements

const sgGradeElements = document.querySelectorAll('[id^="txt_"][id$="_SG_Grade"]');
const sgGradeValues = Array.from(sgGradeElements).map(element => element.value);

const sgCreditsElements = document.querySelectorAll('[id^="txt_"][id$="_SG_CourseCredit"]');
// Float values
const sgCreditsValues = Array.from(sgCreditsElements).map(element => parseFloat(element.value));

const sgSemElements = document.querySelectorAll('[id^="txt_"][id$="_SG_Semester"]');
const sgSemValues = Array.from(sgSemElements).map(element => parseInt(element.value));

// Print the list of text values
console.log(sgGradeValues);
console.log(sgCreditsValues);
console.log(sgSemValues);

// Convert text grades into numerical grades
/*
A+ -> 10.0
A -> 10.0
A- -> 9.0
B -> 8.0
B- -> 7.0
C -> 6.0
C- -> 5.0
D -> 4.0
*/

const gradeToNumber = {
    "A+": 10.0,
    "A": 10.0,
    "A-": 9.0,
    "B": 8.0,
    "B-": 7.0,
    "C": 6.0,
    "C-": 5.0,
    "D": 4.0
};

let semToGrade = {};
let semToCredits = {};

// If grade text is not '' then convert it to number, otherwise return 0
let cg = 0.0;
let totalCredits = 0.0;

for (let i = 0; i < sgGradeValues.length; i++) {
    const grade = sgGradeValues[i];
    const credit = sgCreditsValues[i];
    const sem = sgSemValues[i];

    if (grade !== '') {
        // If grade not in dictionary, print it
        if (gradeToNumber.hasOwnProperty(grade)) {
            const numericalGrade = gradeToNumber[grade];
            cg += numericalGrade * credit;
            totalCredits += credit;

            // Initialize semester values if not already present
            if (!semToGrade.hasOwnProperty(sem)) {
                semToGrade[sem] = 0.0;
                semToCredits[sem] = 0.0;
            }

            semToGrade[sem] += numericalGrade * credit;
            semToCredits[sem] += credit;
        }
    }
}

console.log(`CGPA: ${cg / totalCredits}`);
console.log(`Total Credits: ${totalCredits}`)

// Calculate and print semester GPAs
for (const sem in semToGrade) {
    const semesterGPA = semToGrade[sem] / semToCredits[sem];
    console.log(`Semester ${sem} GPA: ${semesterGPA}`);
}
