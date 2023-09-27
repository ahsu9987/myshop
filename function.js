//---------------------------------------------------------------------------------------------------------------------//
// javascript help to change html and css code :- click button paragraph and image change:-

var change = document.getElementById('changeAll');
console.log(change);

function doaction(){
    // alert(value);
    document.getElementsByClassName('changeAll').innerText = "Thank You";
    change.style.backgroundColor = 'black';
    document.getElementById("warsitext").style.color = " #F1E5AC";
    document.getElementById("textchanged1").style.color = " #F1E5AC";
    document.getElementById('textchanged2').style.color = " #F1E5AC";
    document.getElementById("photochange").src = "images/Warsi-logo.jpeg";
    document.getElementById("photochange").style.height = "370px";
    document.getElementById("photochange").style.width = "400px";
    document.getElementById("photochange").style.marginLeft = "150px";

}