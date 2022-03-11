// Add nav items according to sections

let navBar=document.getElementById("navbar__list");
let navBarList=document.getElementById("navbar__list");

let sections=document.querySelectorAll("section");
let navBarItem=[];
let list=document.createElement("li");
let navBarItems=document.querySelectorAll("li");

sections.forEach(function(item,index,array){
    navBarItem+=sections[index];
    
    let list=document.createElement("li");
    let anchor=document.createElement("a");
    let indices=index+1;
    list.appendChild(anchor);
    
    
    list.className="navDef nav"+indices;
    
    list.insertAdjacentText("beforeend","section "+[index+1]);
        navBar.appendChild(list);
        
    });
navBarItem=document.getElementsByTagName("li");
function clearActive(item){
    sections.forEach(function(item){
        if (item.classList.contains("your-active-class")){
            item.classList.remove("your-active-class")
        };
    });
};
navBarItems.forEach(function(y,index){
    y.addEventListener("click",function(){
        clearActive();
        sections.forEach(function(){
            sections[index].scrollIntoView();
            sections[index].classList.add("your-active-class");
        })
    


    })
});

// best solution
function clearActive(item){
    sections.forEach(function(item){
        if (item.classList.contains("your-active-class")){
            item.classList.remove("your-active-class");
        }
    })
};
navBarItems.forEach(function(y,index){
    y.addEventListener("click",function(){
        clearActive();
        sections.forEach(function(){
            sections[index].scrollIntoView();
            sections[index].classList.add("your-active-class");
        })
    


    })
});

// api trial for scroll

// function scrollActive(section){
//     let int=new IntersectionObserver(function(entries,observer){
//         entries.forEach(function(entry){
//             if (entry.isIntersecting){
//                 let sectionInTarget=entry.section;
//                 sectionInTarget.classList.add("your-active-class");
//                 observer.disconnect();
//             }
//         })
//     },{threshold:[0.5]});
//     int.observe(section);
// };
// sections.forEach(scrollActive)



