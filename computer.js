/**
 * Created by ASUS1314 on 2018/8/7.
 */
var caltext=[];
var calreplace=[];
var c=["","+","*","("];
var c1=[")","-","/"];
var stack1=[];
var stack2=[];
var stack3=[];
var stack4=[];
var flag=true;
window.onload=function () {
    var content = document.getElementById("coontent");
    var openhistory = document.getElementById("histiory");
    var closehistory = document.getElementById("closehistory");
    openhistory.onclick=function () {
        if(flag){
            var elementById = document.getElementById("writehis");
            elementById.style.display="block";
            flag=false;
        }else {
            var elementById = document.getElementById("writehis");
            elementById.style.display="none";
            flag=true;
        }
    }
    closehistory.onclick=function () {
        var elementById2 = document.getElementById("writehishow");
        var children = elementById2.children;
        console.log(children.length)
        while (children.length>1){
            elementById2.removeChild(children[children.length-1]);
        }
    }
    var oDiv = document.getElementById("writehishow");
    oDiv.onmousedown=function(ev)
    {
        var oEvent = ev;
        var disX = oEvent.clientX - oDiv.offsetLeft;
        var disY = oEvent.clientY - oDiv.offsetTop;
        document.onmousemove=function (ev)
        {
            oEvent = ev;
            oDiv.style.left = oEvent.clientX -disX+"px";
            oDiv.style.top = oEvent.clientY -disY+"px";
        }
        document.onmouseup=function()
        {
            document.onmousemove=null;
            document.onmouseup=null;
        }
    }
    content.addEventListener("click",function (Event) {
        var target = Event.target;
        switch (target.id){
            case "ac":
                changeac();
                break;
            case "fm":
                subtext();
                break;
            case "left":
                addtext(target.innerHTML);
                break;
            case "right":
                addtext(target.innerHTML);
                break;
            case "divied":
                addtext(target.innerHTML);
                break;
            case "seq":
                addtext(target.innerHTML);
                break;
            case "sub":
                addtext(target.innerHTML);
                break;
            case "add":
                addtext(target.innerHTML);
                break;
            case "sum":
                addtext(target.innerHTML);
                caltext.pop();
                changecaltext();
                istrue();
                playcal();
                writehistory();
                break;
            case "point":
                addtext(target.innerHTML);
                break;
            case "one":
                addtext(target.innerHTML);
                break;
            case "two":
                addtext(target.innerHTML);
                break;
            case "three":
                addtext(target.innerHTML);
                break;
            case "four":
                addtext(target.innerHTML);
                break;
            case "five":
                addtext(target.innerHTML);
                break;
            case "six":
                addtext(target.innerHTML);
                break;
            case "seven":
                addtext(target.innerHTML);
                break;
            case "eight":
                addtext(target.innerHTML);
                break;
            case "nine":
                addtext(target.innerHTML);
                break;
            case "zero":
                addtext(target.innerHTML);
                break;
        }
    })
}

function addtext(string) {
    if(caltext.length<=12){
        var elementById3 = document.getElementById("caltexttwo");
        elementById3.innerHTML="";
    }
    var elementById = document.getElementById("relt");
    elementById.innerHTML="";
    if(string=="/"||string=="*"||string=="-"||string=="+"){
        if(caltext[caltext.length-1]=="/"||caltext[caltext.length-1]=="*"||caltext[caltext.length-1]=="+"||caltext[caltext.length-1]=="-"){
            alert("非法输入.....");
            string=caltext[caltext.length-1];
            caltext.pop();
        }
    }
    caltext[caltext.length]=string;
    var length = caltext.length;
    if(length<=12){
        var elementById = document.getElementById("caltextone");
        var s="";
        for(var i=0; i<length; i++){
            s+=caltext[i];
        }
        elementById.innerText=s;
    }else {
        var s1="";
        var s2="";
        var elementById = document.getElementById("caltextone");
        var elementById2 = document.getElementById("caltexttwo");
        for(var l=length-12;l<length;l++){
            s1+=caltext[l];
        }
        for(var j=0;j<length-12;j++){
            s2+=caltext[j];
        }
        elementById2.innerText=s2;
        elementById.innerText=s1;

    }
}
function subtext() {
    var elementById = document.getElementById("relt");
    elementById.innerHTML="";
    caltext.pop();
    var length = caltext.length;
    if(length<=12){
        var elementById = document.getElementById("caltextone");
        var s="";
        for(var i=0; i<length; i++){
            s+=caltext[i];
        }
        elementById.innerText=s;
    }else {
        var s1="";
        var s2="";
        var elementById = document.getElementById("caltextone");
        var elementById2 = document.getElementById("caltexttwo");
        for(var l=length-12;l<length;l++){
            s1+=caltext[l];
        }
        for(var j=0;j<length-12;j++){
            s2+=caltext[j];
        }
        elementById2.innerText=s2;
        elementById.innerText=s1;

    }

}
function changeac() {
    caltext.splice(0,caltext.length);
    var elementById = document.getElementById("relt");
    elementById.innerHTML="";
    var elementById = document.getElementById("caltextone");
    var elementById2 = document.getElementById("caltexttwo");
    elementById2.innerText="";
    elementById.innerText="";
}

function playcal() {
    for(var p=0; p<calreplace.length; p++){

        if(calreplace[p]=="/"||calreplace[p]=="*"||calreplace[p]=="+"||calreplace[p]=="-"||calreplace[p]=="("||calreplace[p]==")"){
            if(stack1.length==0){
                stack1[stack1.length]=calreplace[p];
            }else {
                if(getnum(calreplace[p])-getnum(stack1[stack1.length-1])>0){
                    stack1[stack1.length]=calreplace[p];
                }else {
                    while(true){
                        if(getnum(calreplace[p])-getnum(stack1[stack1.length-1])<=0){
                            if(getnum(stack1[stack1.length-1])-getnum(calreplace[p])==3){
                                stack1.pop();
                                break;
                            }else if(stack1[stack1.length-1]=="("){
                                stack1[stack1.length]=calreplace[p];
                                break;
                            }else {
                                stack2[stack2.length]=stack1.pop();
                            }

                        }
                        if(stack1.length==0){
                            stack1[stack1.length]=calreplace[p];
                            break;
                        }

                        if(getnum(calreplace[p])-getnum(stack1[stack1.length-1])>0){
                            stack1[stack1.length]=calreplace[p];
                            break;
                        }
                    }
                }
            }
        }else {
            stack2[stack2.length]=calreplace[p];
        }
    }
    if(stack1.length>0){
        while (stack1.length>0){
            stack2[stack2.length]=stack1.pop();
        }
    }
    while (stack2.length>0){
        var c = stack2.shift();
        if(c=="+"||c=="*"||c=="-"||c=="/"){
            var a = stack3.pop();
            var b = stack3.pop();
            stack3[stack3.length]=calcu(b,a,c);
        }else if(c=="(" || c==")"){

        }
        else {
            stack3[stack3.length]=c;
        }
    }
    var elementById = document.getElementById("relt");
    elementById.innerHTML=stack3.pop();

    caltext.splice(0,caltext.length);
    stack1.splice(0,caltext.length);
    stack2.splice(0,caltext.length);
    stack3.splice(0,caltext.length);
    calreplace.splice(0,calreplace.length);
}
function changecaltext() {
    var ss="";
    for (var i = 0,k=0; i < caltext.length;) {
        if (caltext[i] == "+" || caltext[i] == "-" || caltext[i] == "*" || caltext[i] == "/"|| caltext[i] == "("|| caltext[i] == ")") {
            calreplace[k] = caltext[i];
            k++;
            i++;
        } else {
            while (!(caltext[i] == "+" || caltext[i] == "-" || caltext[i] == "*" || caltext[i] == "/"|| caltext[i] == "("|| caltext[i] == ")")) {
                ss += caltext[i];
                i++;
                if (i == caltext.length)
                    break;
            }
            calreplace[k] = ss;
            ss = "";
            k++;
        }
    }
}

function getnum(string) {
    for(var a=0; a<c.length; a++){
        if(string==c[a]){
            return a;
        }
    }
    for(var a=0; a<c1.length; a++){
        if(string==c1[a]){
            return a;
        }
    }
}
function calcu(a,b,c) {
    var sum = 0.0;
    switch (c) {
        case "+":
            sum = a*1 + b*1;
            break;
        case "-":
            sum = a - b;
            break;
        case "/":
            sum = a / b;
            break;
        case "*":
            sum = a * b;
            break;
    }
    return sum;
}
function istrue() {
    var left=0;
    var right=0;
    for(var i=0; i<calreplace.length;i++){
        if(calreplace[i]=="("){
            left++;
        }
        if(calreplace[i]==")"){
            right++;
        }
    }
    if(!(right==left)){
        alert("输入格式错误");
    }
}
function writehistory() {
    var element = document.createElement("li");
    var elementById = document.getElementById("writehishow");
    var elementById1 = document.getElementById("caltexttwo");
    var elementById2 = document.getElementById("caltextone");
    var elementById3 = document.getElementById("relt");
    var s=elementById1.innerHTML+elementById2.innerHTML+elementById3.innerHTML;
    element.innerHTML=s;
    elementById.appendChild(element);
}