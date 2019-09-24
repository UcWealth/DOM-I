const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let headerImg = document.querySelector("#cta-img")
headerImg.setAttribute('src', siteContent["cta"]["img-src"]) 

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// Nav section
let nav1 = document.querySelector("nav a")
let nav2 = document.querySelector("nav a:nth-child(2)")
let nav3 = document.querySelector("nav a:nth-child(3)")
let nav4 = document.querySelector("nav a:nth-child(4)")
let nav5 = document.querySelector("nav a:nth-child(5)")
let nav6 = document.querySelector("nav a:last-child")
nav1.textContent = siteContent["nav"]["nav-item-1"]
nav2.textContent = siteContent["nav"]["nav-item-2"]
nav3.textContent = siteContent["nav"]["nav-item-3"]
nav4.textContent = siteContent["nav"]["nav-item-4"]
nav5.textContent = siteContent["nav"]["nav-item-5"]
nav6.textContent = siteContent["nav"]["nav-item-6"]

// Cta Section
let ctaHead = document.querySelector(".cta-text h1")
let ctaBtn = document.querySelector(".cta-text button")
ctaHead.textContent = siteContent["cta"]["h1"]
ctaBtn.textContent = siteContent["cta"]["button"]

// Main Content
let topContent1 = document.querySelector(".top-content .text-content h4")
let topContent1p = document.querySelector(".top-content .text-content p")
topContent1.textContent = siteContent["main-content"]["features-h4"]
topContent1p.textContent = siteContent["main-content"]["features-content"]

let topContent2 = document.querySelector(".top-content .text-content:nth-child(2) h4")
let topContent2p = document.querySelector(".top-content .text-content:nth-child(2) p")
topContent2.textContent = siteContent["main-content"]["about-h4"]
topContent2p.textContent = siteContent["main-content"]["about-content"]

let bottomContent1 = document.querySelector(".bottom-content .text-content h4")
let bottomContent1p = document.querySelector(".bottom-content .text-content p")
bottomContent1.textContent = siteContent["main-content"]["services-h4"]
bottomContent1p.textContent = siteContent["main-content"]["services-content"]

let bottomContent2 = document.querySelector(".bottom-content .text-content:nth-child(2) h4")
let bottomContent2p = document.querySelector(".bottom-content .text-content:nth-child(2) p")
bottomContent2.textContent = siteContent["main-content"]["product-h4"]
bottomContent2p.textContent = siteContent["main-content"]["product-content"]

let bottomContent3 = document.querySelector(".bottom-content .text-content:nth-child(3) h4")
let bottomContent3p = document.querySelector(".bottom-content .text-content:nth-child(3) p")
bottomContent3.textContent = siteContent["main-content"]["vision-h4"]
bottomContent3p.textContent = siteContent["main-content"]["vision-content"]

// Contact section
let contactSection = document.querySelector(".contact h4")
let contactSectionp1 = document.querySelector(".contact p") //check this line
let contactSectionp2 = document.querySelector(".contact p:nth-child(2)")
let contactSectionp3 = document.querySelector(".contact p:last-child")

contactSection.textContent = siteContent["contact"]["contact-h4"]
contactSectionp1.textContent = siteContent["contact"]["address"]
contactSectionp2.textContent = siteContent["contact"]["phone"]
contactSectionp3.textContent = siteContent["contact"]["email"]

// console.log(contactSection);

let footerp = document.querySelector("footer p")
footerp.textContent = siteContent["footer"]["copyright"]



