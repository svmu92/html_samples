/*Name this external file gallery.js*/

function upDate(previewPic){
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image*/
    console.log(previewPic.src);
    console.log(previewPic.alt);

    place = document.getElementById("image");
    place.style.backgroundImage = "url('" + previewPic.src + "')";   
       
    /*   2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
      place.innerHTML = previewPic.alt;
      console.log(place.style.backgroundImage);
      console.log(place.innerHTML);
       }
   
       function unDo(){
        /* In this function you should 
       1) Update the url for the background image of the div with the id = "image" 
       back to the orginal-image.  You can use the css code to see what that original URL was
       */
       place = document.getElementById("image");
       place.style.backgroundImage = "url('')";      
       /*
       2) Change the text  of the div with the id = "image" 
       back to the original text.  You can use the html code to see what that original text was
       */
       place.innerHTML = "Hover over an image below to display here.";
       console.log(place.style.backgroundImage);
       console.log(place.innerHTML);           
       }