const submissionId = 209789149; // Replace with the desired submission ID

// Construct the API endpoint URL
// const apiUrl = `https://codeforces.com/api/contest.status?submissionId=${submissionId}`;
const apiUrl = "https://codeforces.com/api/contest.status?contestId=1840"

// Fetch the submission data
fetch(apiUrl)
    .then(response => response.json())
    .then(data => console.log(data.result.length));
    // .then(data => {
    //     if (data.status === "OK") {
    //         const submission = data.result[0]; // Assuming only one submission is returned
    //         // Process the submission object as desired
    //         console.log(submission);
    //     } else {
    //         // Handle the API error
    //         console.error("API request failed:", data.comment);
    //     }
    // })
    // .catch(error => {
    //     // Handle any network or fetch errors
    //     console.error("Error:", error);
    // });
