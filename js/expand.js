document.addEventListener("DOMContentLoaded", ()=>{
    const expandableDiv = document.getElementsByClassName("expandable")[0]
    ,expandableTextarea = document.getElementsByClassName("expandableArea")[0];
    expandableTextarea.addEventListener("input", expand);
    function expand(){
        expandableTextarea.style.height = "";
        expandableTextarea.style.height = expandableTextarea.scrollHeight + "px";
        if(expandableTextarea.style.height.slice(0, -2) > 90){
            expandableDiv.style.height = "fit-content";
        }else{
            expandableDiv.style.height = "100px";
        }
    }
});

