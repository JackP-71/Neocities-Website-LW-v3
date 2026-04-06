
//this program seems to work when placed at the top of the program, there needs to be a way to check if the function returns null or determing which footer to use - using an if statement perhaps?
//because after this, the two querySelectors will not run, so check to see which one to run or wrap them in functions or something and call the function needed on the different pages? - this could be the way to do it, it depends if neocities allowes for the functions, in addition to the querySelectors... there's a small chance this may not work... but it's worth a try!!
//if (document = "storyOne.html" || document == "storyTwo.html") something like this??


//scripts for auto writing footer and heading
document.querySelector(".writeHeader").innerHTML = `
        <div class="titleBox">
            <a href="../../../main/index.html" style="text-decoration:none;"><h1>the void...</h1></a>
        </div>
`;

document.querySelector(".writeFooter").innerHTML = `
        <footer id="footer" style="margin-top: 10px; height: 145px;">
            <p>lost? use the <a href="../../sitemap.html">map of the void</a> to help you out! or... <button id="toTop" onclick="window.scrollTo(0,0);">click to scroll to the top</button></p>
            <p><small>the void was first discovered on the 25th June 2025 - <a href="https://neocities.org/site/lonewriter" target="_blank">Neocities profile...</a></small></p>
            <p>© LoneWriter - from the present 'til the end. </p>
        </footer>
        <p></p>
        <center>
        <div class="box" style="max-width:fit-content; background-color: var(--bg-color);">
            <div class="theme-switch-wrapper">
                <em>theme toggle:⠀</em>
                <label class="theme-switch" for="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <div class="slider round"></div>
                </label>
            </div>
        </div>
        </center>
`;

// will need another version of the footer without the theme toggle at some point 
// document.querySelector(".writeOCfooter").innerHTML = `
//         <footer id="footer" style="margin-top: 10px; height: 145px;">
//             <p>lost? use the <a href="../sitemap.html">map of the void</a> to help you out! or... <button id="toTop" onclick="window.scrollTo(0,0);">click to scroll to the top</button></p>
//             <p><small>the void was first discovered on the 25th June 2025 - <a href="https://neocities.org/site/lonewriter" target="_blank">Neocities profile...</a></small></p>
//             <p>© LoneWriter - 2026 'til the end. </p>
//         </footer>
//         <p></p>
//         <center>
//         <div class="box" style="max-width:fit-content; max-height: fit-content; background-color: var(--bg-color);">
//             <p>this page has a fixed theme and therefore cannot be changed.</p>
//         </div>
//         </center>
// `;



//script for dark / light toggle
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

// checking for user last chosen
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); //add this
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); //add this
    }    
}

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

// Modal elements
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Select ALL images with the class "modal-img"
var images = document.querySelectorAll(".modal-img");

// Add click event to each image
images.forEach(function(img) {
  img.addEventListener("click", function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  });
});

// Close button
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
};
