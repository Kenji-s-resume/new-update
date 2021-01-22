//just telling you if you're looking at my code, this is not my A-game in JS. This website barely uses any JS, so it doesn't really show my full potential.
var rotationindex = 0;
var rotationindex1 = 0;
function goSomewhere(x){
    location = x;
}
setInterval(function(){
    function labelappearlogic(a){
        if((document.getElementById(a) != document.activeElement) && document.getElementById(a).checkValidity()){
            document.querySelector("."+a).style["display"] = "none";
        }else{
            document.querySelector("."+a).style["display"] = "block";
        }
    }
    labelappearlogic("emailsubject")
},1)
function submitmail(){
    document.getElementById("mailsubmit").innerHTML = `<center><img src="loading.svg" style="display:block;height:22px;"></center>`
    if(document.getElementById("emailsubject").checkValidity() && document.getElementById("message").checkValidity()){
        document.getElementById("valuetotext").textContent = document.getElementById("message").value;
        var ree = document.getElementById("valuetotext").textContent.replaceAll(`
`,"%0D%0A");
        window.open("mailto:kenjiw360@gmail.com?subject="+document.getElementById("emailsubject").value+"&body="+ree);
    }else{
        document.getElementById("warningtext").textContent = "You didn't fill all of the inputs.";
    }
    document.getElementById("mailsubmit").innerHTML = `SUBMIT`
}
//rgb(27,167,241)
var focused = "";
function cards(id){
    document.getElementById(id).onfocus = function (){
        setTimeout(function (){
            if(document.getElementById(id+"img").style["display"] == "block"){
                document.getElementById(id+"img").style["display"] = "none";
                document.getElementById(id+"hidden").style["display"] = "block";
            }
        },300)
    }
}
function cardsout(id){
    setTimeout(function (){
        if(document.getElementById(id+"img").style["display"] == "none"){
            document.getElementById(id+"img").style["display"] = "block";
            document.getElementById(id+"hidden").style["display"] = "none";
        }
    },300)
}
cards("bigben")
cards("storiology")
cards("landslide")
cards("aurora")
function makeslicegrow(name){
    document.getElementById(name).onfocus = function(){
        var array = name.split("");
        document.getElementById("ree"+array[0]).innerText = "ree";
    }
}
function shrinkslice(name){
    var array = name.split("");
    document.getElementById("ree"+array[0]).innerText = "";
}
makeslicegrow("grapeland");
makeslicegrow("homeschool");
makeslicegrow("cambria");
makeslicegrow("novahome");
function rotation(name,number){
    document.getElementById(name).onfocus = function (){
        document.getElementById(name).blur();
        rotationindex += number
        console.log(number)
        console.log(rotationindex)
        document.getElementById("rotationdiv").style.setProperty('--rotationindex',  rotationindex+"%");
    }
}
rotation("increase",-100)
rotation("decrease",-100)
rotation("increase1",100)
rotation("decrease1",100)



function rotation1(name,number){
    document.getElementById(name).onfocus = function (){
        document.getElementById(name).blur();
        rotationindex1 += number
        console.log(number)
        console.log(rotationindex1)
        document.getElementById("rotationdiv1").style.setProperty('--rotationindex1',  rotationindex1+"%");
    }
}
rotation1("increase2",-100)
rotation1("decrease2",-100)
rotation1("increase3",100)
rotation1("decrease3",100)