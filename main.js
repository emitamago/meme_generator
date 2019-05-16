
   
   
    var gene = document.querySelector(".generator")
     gene.addEventListener('click', function(){
        var text = document.querySelector("#image-url").value;
        var elem1 = document.createElement('div');
        var elem2 = document.createElement("img")
        elem2.id = 'child';
        elem2.setAttribute('src', text);
        elem2.classList.add('col-md-6')
        elem1.appendChild(elem2);
        var parent = document.getElementById('result')
        parent.appendChild(elem1);
    })

