//----------------------------------------------------------------------------
function mobileAdjust() {
    // Get width and height of the window excluding scrollbars
    let w = Number(document.documentElement.clientWidth);
    // console.log(`w = ${w}`);

    if (w > 700) {
        document.getElementById("image-src").innerHTML = `<img src="./images/photo_cliff_374_480.png" 
                                             alt="Cliff Cummings photograph" height="480" align="left">`;
        // console.log("Large size!");
    } else {
        document.getElementById("image-src").innerHTML = `<img src="./images/photo_cliff_374_480.png" 
        alt="Cliff Cummings photograph" height="240" align="left">`;
        // document.getElementById("image-src").innerHTML = `<img src="./images/photo_cliff_187_240.png" 
        //                                      alt="Cliff Cummings photograph" height="240" align="left">`;
        // console.log("Small size!");
    };
}
 
// Attaching the event listener function to window's resize event
window.addEventListener("resize", mobileAdjust);

// Calling the function for the first time
mobileAdjust();
//----------------------------------------------------------------------------