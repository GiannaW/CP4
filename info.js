(function(){
    window.addEventListener("load", init);



    function init (){


        id("btn").addEventListener("click", ajaxcall);

        id("important").addEventListener("click",ajaxcall);




    }










    function id(idName) {
        return document.getElementById(idName);
    }


    function ajaxcall() {

        fetch("./idk.json")
            .then(checkStatus)
        //.then(resp => resp.text()) // include if your data comes in text
        //.then(resp => resp.json()) // include if your data comes in JSON
            .then(processData)
            .catch(console.log);
    }

    function processData() {
    

        var ourRequest=new XMLHttpRequest();
        
          ourRequest.onload= function(){

            var ourData=JSON.parse(ourRequest.responseText);

            writeToscreen(ourData);

        }

    
        ourRequest.open("GET","./idk.json");
        
        
      
      


        ourRequest.send();




    }


    function checkStatus(response) {
        if (!response.ok) { // response.status >= 200 && response.status < 300
            throw Error("Error in request: " + response.statusText);
        }
        return response;
    }

    function writeToscreen(data){
        let animalinfo=document.getElementById('animal-info');
        let Selector = document.getElementById('important').value;
        let htmlString= "";



        if (Selector==="Dog"){
           

            htmlString += "<p>" + data[1].name + " is a  " + data[1].species + data[1].name+" who likes " + data[1].foods.likes + " .</p>";

            animalinfo.insertAdjacentHTML("beforeend",htmlString);
        }


        if (Selector==="Cat"){


            let img = document.createElement('img');    // Create an <img> element.
            img.src = data[0].Image; 
            htmlString += "<p>" + data[0].name + " is a " + data[0].name+" who  likes " + data[0].foods.likes +" .</p>";

            animalinfo.insertAdjacentHTML("beforeend",htmlString);
        }



        if (Selector==="Turtle"){
          

            htmlString += "<p>" + data[2].name + " is a " + data[2].species+" who  likes " + data[2].foods.likes+" .</p>";

            animalinfo.insertAdjacentHTML("beforeend",htmlString);
        }














    }





})






();





