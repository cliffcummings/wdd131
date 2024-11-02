// // Used for debugging
// //----------------------------------------------------------------------------
// // Code to help detect window size and which css file is being used
// // https://www.tutorialrepublic.com/codelab.php?topic=faq&file=javascript-window-resize-event
// //----------------------------------------------------------------------------
// function displayWindowInfo(){
//     // Get width and height of the window excluding scrollbars
//     let w = Number(document.documentElement.clientWidth);

//     if (w > 700) {
//         document.getElementById("css-src").innerHTML = `<p id="css-src">Uses sunburst-large.css</p>`;
//         // console.log("Large size!");
//     } else {
//         document.getElementById("css-src").innerHTML = `<p id="css-src">Uses sunburst.css</p>`;
//         // console.log("Small size!");
//     };
        
//     // Display result inside a div element
//     document.getElementById("result").innerHTML = "Width: " + w;
// }
// //----------------------------------------------------------------------------

function createCoursesTable(filtered) {
    // console.log("Starting createCoursesTable function");
    // Clear out existing innerWidth-created table
    document.getElementById("coursestable").innerHTML = "";
    // Get the table once
    let table = document.getElementById("cliffpapers");
    // let table = [];

    // Now append rows and table-data to the table
    filtered.forEach(course => {
        // console.log(`${paper.conf} ${paper.year}`);

        let greeting = document.createElement("tr");
        let coursename = document.createElement("tr");
        let hourspenang = document.createElement("tr");
        let hoursUSwest = document.createElement("tr");
        let hoursUSeast = document.createElement("tr");
        let hoursEurope = document.createElement("tr");
        let hoursIndia  = document.createElement("tr");
        let date = document.createElement("tr");

    })
}
