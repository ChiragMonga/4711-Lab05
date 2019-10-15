function openForm(){
    var form = document.getElementById("form");

    if(form.style.display == "none"){
        form.style.display = "block";
    }
    else{
        form.style.display = "none";
    }
    
}


function search(){
    var searchStr = document.getElementById("searchBar");
    var artistList = document.getElementsByClassName("heading");
    

    for (let i = 0; i < artistList.length; i++) {
        var str = artistList[i].innerHTML;

         if(!str.includes(searchStr.value)){
             artistList[i].parentElement.parentElement.style.display = "none";
             console.log(artistList[i].innerHTML);
         }   
    }
}