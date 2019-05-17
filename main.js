
   
   
    var gene = document.querySelector("#generator")
     gene.addEventListener('click', function(){
         var container = document.createElement('div')
        container.classList.add("col-md-8")
         container.classList.add("out-box")
        
        var text = document.querySelector("#image-url");
        var topText = document.getElementById("top-meme");
        var bottomText = document.getElementById("bottom-meme");
        var arr = [text, topText, bottomText];
        
        
        var ele = getImage(text.value)
        ele.classList.add("innner-image")
        
        
        var ele1 = TextMeme(topText.value)
        ele1.classList.add("text-top")
        
        
        var ele2 = TextMeme(bottomText.value)
        ele2.classList.add("text-bottom")
       
        
        
        for(let k of arr){
            k.value = '';
        }

        var deleteBtn = document.createElement("button")
        deleteBtn.innerHTML = "delete"
        deleteBtn.classList.add("delete-button");
    

        container.appendChild(deleteBtn);
        container.appendChild(ele);
        container.appendChild(ele1);
        container.appendChild(ele2)
        var holder = document.getElementById("holder")
        holder.appendChild(container)
        deleteBtn.addEventListener("click", function(){
            holder.removeChild(container);
        })
     })
      
    function TextMeme (text1){
         var elem2 = document.createElement("span")
         elem2.innerHTML = text1
        // elem2.classList.add('col-md-6')
        return elem2;
    }

function getImage(url){
         var elem = document.createElement("img")
        // elem.classList.add('col-md-8')
         elem.id = 'child1';
         elem.setAttribute('src', url);
         return elem
}