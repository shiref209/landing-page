// define global variables
const x=performance.now()
let navBar=document.getElementById("navbar__list");
let navBarP=document.getElementsByTagName("nav");
let navBarList=document.getElementById("navbar__list");
let sections=document.querySelectorAll("section");
let topButton=document.getElementById("top_button");
// creating navigation-bar items corresponding to sections
sections.forEach(function(item,index,array){
    let button=document.createElement("button");
    let indices=index+1; 
    button.className="navDef"
    button.insertAdjacentText("beforeend","Section "+indices);  
    navBar.appendChild(button);
    // calling intersection observer API through the loop
    scrollActive(item)
    });
let navBarItems=[...document.getElementsByClassName("navDef")];
// navbar-item on-click

// Function to remove active-class and active-nav
function clearActive(item){
    sections.forEach(function(item){
        if (item.classList.contains("your-active-class")){
            item.classList.remove("your-active-class")
        };
    navBarItems.forEach(function(item){
        if (item.classList.contains("active-nav")){
            item.classList.remove("active-nav")
        };

    })
    });
};

navBarItems.forEach(function(y,index){
    clearActive(y)
    // click on nav-item to navigate to related section
    y.addEventListener("click",function(){
        // adding active-class and active-nav
    y.classList.add("active-nav");
    sections[index].scrollIntoView({behavior:"smooth"});
    sections[index].classList.add("your-active-class");
    })
});

// api for scroll to add active-class and active-nav
function scrollActive(target){
    let int=new IntersectionObserver(function(sections,observer){

        sections.forEach(function(section,x){
            let sectionInTarget=section.target;
            let dataNav=sectionInTarget.getAttribute("data-nav");
            
            if (section.isIntersecting==true ){
                
                navBarItems.forEach(function(item){
                    if (item.innerText==dataNav){
                        item.classList.add("active-nav");
                        
                    }else{item.classList.remove("active-nav")}
                })
            sectionInTarget.classList.add("your-active-class");
 }
        })
     },{threshold:[0.4]});
    int.observe(target);
    
};
//Extra 1: scroll to top button
topButton.addEventListener("click",function(){
    window.scrollTo({top:0})
    clearActive(navBarItems);
})
// Extra 2:make the to top button visible only after scrolling
function fixedBut(){
    if (window.scrollY>=800){
        topButton.style.visibility="visible";
        
    }else{
        topButton.style.visibility="hidden";
    }
}
// Extra 3:make navigation Bar fixed on scroll
function fixedNav(){
    let offSet=navBar.offsetHeight;
    if (window.pageYOffset=offSet){
        navBar.classList.add("fixed");   
    }
    else{navBar.classList.remove("fixed");
    }
};
// Extra 4: aligning sections to not interfer with fixed nav
function constPad(){
    for(let section of sections){
        section.classList.add("cont")
    }
}
window.onscroll=function (){fixedNav(),constPad(),fixedBut()};
