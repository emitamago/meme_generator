
   
// create element to add event
    var gene = document.querySelector("#generator")

    // adding event lisner to create meme
     gene.addEventListener('click', function(){
        // createing container to hold 3 element
        var container = document.createElement('div')
        container.classList.add("col-md-12")
        container.classList.add("out-box")
       
        // capture user's input and setting to variable.
        var text = document.querySelector("#image-url");
        var topText = document.getElementById("top-meme");
        var bottomText = document.getElementById("bottom-meme");
        
        
        // creating new HTML element on fly
        var ele = getImage(text.value)
        var ele1 = TextMeme(topText.value)
        var deleteBtn = deletButton();
        var ele2 = TextMeme(bottomText.value)
        
        // adding unique style to each newly created element
        ele1.classList.add("text-top")
        ele2.classList.add("text-bottom")

        // createing arrays to modify
        var arr1 = [text, topText, bottomText];
        var arr2 = [ele, ele1, ele2, deleteBtn]
        
        // append all elements into container
        for(let k of arr2){
            container.appendChild(k);
        }
        
        // clearing data in user's input field
        for(let k of arr1){
            k.value = '';
        }

        // append pre-defined parent div
        var holder = document.getElementById("holder")
        holder.appendChild(container)

        // adding event to delete elements on fly
        deleteBtn.addEventListener("click", function(){
            holder.removeChild(container);
        })
     })
      
    // helper function for generate new element with user's input for text
     function TextMeme (text1){
         var elem2 = document.createElement("span")
         elem2.innerHTML = text1
        return elem2;
    }

    // helper functions for generate element with image
    function getImage(url){
         var elem = document.createElement("img")
         elem.id = 'child1';
         elem.setAttribute('src', url);
         elem.classList.add("innner-image")
         return elem
    }

    function deletButton(){
        var btn = document.createElement("button")
        btn.innerHTML = "X"
        btn.classList.add("delete-button");
        return btn;
    }