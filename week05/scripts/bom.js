const input = document.querySelector('#favchap');
const button = document.querySelector('button');
// You need to fill in the blank to reference the
// HTML element that is an unordered list element
const list = document.querySelector('#list'); 

let chaptersArray = getChaptersList() || [];


// Defines the start of a getChapterList function
// functionName = () => {
// (function definition follows { )
function getChaptersList () {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function setChapterList () {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function deleteChapter (chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}

displayList = (item) => {
    let li = document.createElement('li');
    li.textContent = item; // item from displayList input parameter

    let deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';

    // References the CSS rule .delete{width:fit-content;} to size the delete button
    deleteButton.classList.add('delete'); 

    li.append(deleteButton);
    list.append(li);
    
    // li.appendChild(deleteButton);
    // list.appendChild(li);
    
    deleteButton.addEventListener('click', function() {
        list.removeChild(li);
        // The new deleteChapter function is needed to remove
        // the chapter from the array and localStorage.
        deleteChapter(li.textContent); 
        input.focus();
    });
}

button.addEventListener('click', () => {  //----------------------------------------------
    if (input.value.trim() !== '') {      // test input.value to make sure it is not empty
        displayList(input.value);         // display the chapters list
        chaptersArray.push(input.value);  // add the chapter to the array
        setChapterList();                 // set localStorage with updated array
        input.value = '';                 // clear the input
        input.focus();                    // set the focus back to the input
    };                                    //----------------------------------------------
});

chaptersArray.forEach(chapter => {
    displayList(chapter);    
});

// Week02 version
// button.addEventListener('click', function() {
//     if (input.value.trim() !== '') {
//         const li = document.createElement('li');
//         li.textContent = input.value;

//         const deleteButton = document.createElement('button');
//         deleteButton.textContent = '❌';

//         li.appendChild(deleteButton);
//         list.appendChild(li);
        
//         deleteButton.addEventListener('click', function() {
//             list.removeChild(li);
//             input.focus();
//         });

//         input.value = '';
//     }
//     input.focus();
// });

// UNUSED
// const li = document.createElement('li');
// const deleteButton = document.createElement('button');

// li.textContent = input.value;
// deleteButton.textContent = 'X';
// li.append(deleteButton);
// list.append(li);
