const btnEl = document.querySelector(".mobile-nav-icon");
const headerEl = document.querySelector(".navigation");

btnEl.addEventListener("click",function()
{
    headerEl.classList.toggle("mobile-nav");
});



const yearEl = document.querySelector(".year");
const currYear = new Date().getFullYear();
yearEl.textContent = currYear;

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function(link){
    link.addEventListener("click",function(e){
        e.preventDefault();
        const href = link.getAttribute("href");
        if(href === "#")
            window.scrollTo({
                top: 0,
                behaviour : "smooth",
            });

        if(href !== "#" && href.startsWith("#"))
        {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({
                behavior : "smooth"
            });
        }

        if(headerEl.classList.contains("mobile-nav"))
            headerEl.classList.toggle("mobile-nav");
        
    });
});


const sectionHeroEl = document.querySelector('.section-hero');

const obs = new IntersectionObserver
(
    function (en) {
        const ent = en[0];
        if(ent.isIntersecting === false)
        {
            document.body.classList.add("stiky");
        }

        if(ent.isIntersecting === true)
        {
            document.body.classList.remove("stiky");
        }
    },
    {
        root:null,
        threshold:0,
        rootMargin:'-80px'
    }
);
obs.observe(sectionHeroEl);


function chackFlexGap()
{
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);
    if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
chackFlexGap();