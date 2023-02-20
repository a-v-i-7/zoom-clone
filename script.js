// GET ROOT STYLES
const root = document.querySelector(":root");
const rootStyle = getComputedStyle(root);

const showSearchBox = () => {
  const searchButton = document.getElementById("search-button");
  const searchBox = document.getElementById("search-box");
  searchButton.style.display = "none";
  searchBox.style.display = "block";
  searchBox.style.marginLeft = "auto";
};

const hideSearchBox = () => {
  const searchButton = document.getElementById("search-button");
  const searchBox = document.getElementById("search-box");
  searchButton.style.display = "flex";
  searchBox.style.display = "none";
};

//Add Event Listener to SEARCH INPUT
const searchInput = document.getElementById("search-input");
const onChangeSearch = (e) => {
  const searchButton = document.getElementById("search-glass");
  console.log("i ran");
  if (searchInput.value.length > 0) {
    searchButton.style.backgroundColor =
      rootStyle.getPropertyValue("--primary");
    searchButton.style.fill = rootStyle.getPropertyValue("--text-light");
  } else {
    searchButton.style.backgroundColor =
      rootStyle.getPropertyValue("transparent");
    searchButton.style.fill = rootStyle.getPropertyValue("--text-dark");
  }
};
searchInput.addEventListener("input", onChangeSearch);

// change keyword and image on timebar of motto section
const slideObject = [
  {
    varKey: "connect",
    img1: "/img/slide1-1.jpg",
    img2: "img/slide1-2.png",
    img2Width: "25",
    img2Height: "6",
    img3: "img/slide1-3.png",
    img3Width: "8.5",
    img3Height: "9.5",
    img4: "/img/slide1-4.jpg",
  },
  {
    varKey: "create",
    img1: "/img/slide2-1.jpg",
    img2: "img/slide2-2.png",
    img2Width: "25",
    img2Height: "8",
    img3: "img/slide2-3.png",
    img3Width: "25.5",
    img3Height: "8",
    img4: "/img/slide2-4.jpg",
  },
  {
    varKey: "innovate",
    img1: "/img/slide3-1.jpg",
    img2: "img/slide3-2.png",
    img2Width: "25",
    img2Height: "10",
    img3: "img/slide3-3.png",
    img3Width: "15",
    img3Height: "10.5",
    img4: "/img/slide3-4.jpg",
  },
];

const animateMottoState = () => {
  let count = 1;
  return () => {
    const inner = document.getElementById("var-key");
    const img1 = document.querySelector(".slide1-1");
    const img2 = document.querySelector(".slide1-2");
    const img3 = document.querySelector(".slide1-3");
    const img4 = document.querySelector(".slide1-4");
    // Set Variables of motto line and images.
    inner.textContent = slideObject[count % 3].varKey;
    img1.src = slideObject[count % 3].img1;
    img2.src = slideObject[count % 3].img2;
    img2.style.width = slideObject[count % 3].img2Width + "rem";
    img2.style.height = slideObject[count % 3].img2Height + "rem";
    img3.src = slideObject[count % 3].img3;
    img3.style.width = slideObject[count % 3].img3Width + "rem";
    img3.style.height = slideObject[count % 3].img3Height + "rem";
    img4.src = slideObject[count % 3].img4;

    img2.style.animationPlayState = "running";
    img3.style.animationPlayState = "running";
    count++;
  };
};

//start the time bar caount and keep reapeating it
const timeBarStart = () => {
  const timeBar = document.getElementById("time-bar");
  const animationDuration = "6s";
  const timebarInner = document.createElement("div");
  timebarInner.className = "time-bar--inner";
  timebarInner.style.animationDuration = animationDuration;
  //uncomment next line to start Motto Section animation
  timebarInner.addEventListener("animationiteration", animateMottoState());

  timeBar.appendChild(timebarInner);
};
window.addEventListener("load", timeBarStart);

// Product Animation
let productAnimated = false;
const animateProductSection = () => {
  productAnimated = true;

  const products = document.querySelector("#products");
  const pi = document.querySelector("#product-intro");
  const pl = document.querySelector("#product-list");
  const ic = document.querySelector("#icon-container");
  const pt = document.querySelector("#product-text");

  const pi1 = document.querySelector(".product-item1");
  const pi2 = document.querySelector(".product-item2");
  const pi3 = document.querySelector(".product-item3");
  const pi4 = document.querySelector(".product-item4");
  const pi5 = document.querySelector(".product-item5");

  products.classList.add("products--after");
  pl.classList.add("product-list--after");
  ic.classList.add("icon-container--after");
  pi.classList.add("product-intro--after");
  pt.classList.add("product-text--after");

  if (pi1.classList.contains("animateItemsBackward1")) {
    pi1.classList.replace("animateItemsBackward1", "animateItemsForward");
    pi2.classList.replace("animateItemsBackward2", "animateItemsForward");
    pi3.classList.replace("animateItemsBackward3", "animateItemsForward");
    pi4.classList.replace("animateItemsBackward4", "animateItemsForward");
    pi5.classList.replace("animateItemsBackward5", "animateItemsForward");
  } else {
    pi1.classList.add("animateItemsForward");
    pi2.classList.add("animateItemsForward");
    pi3.classList.add("animateItemsForward");
    pi4.classList.add("animateItemsForward");
    pi5.classList.add("animateItemsForward");
  }

  // set product animated global value.

  // Set product width on animation end.
  const onAnimationEnd = () => {
    pi1.removeEventListener("transitionend", onAnimationEnd);
    console.log("pi is over");
    productAnimated && (products.style.width = "50rem");
  };
  pi5.addEventListener("transitionend", onAnimationEnd);
};

// Revert to original Product Section.
const cancelProductSectionAnimation = () => {
  productAnimated = false;

  const products = document.querySelector("#products");
  products.style.width = "100%";

  const pi = document.querySelector("#product-intro");
  const pl = document.querySelector("#product-list");
  const ic = document.querySelector("#icon-container");
  const pt = document.querySelector("#product-text");

  const pi1 = document.querySelector(".product-item1");
  const pi2 = document.querySelector(".product-item2");
  const pi3 = document.querySelector(".product-item3");
  const pi4 = document.querySelector(".product-item4");
  const pi5 = document.querySelector(".product-item5");

  pi1.classList.replace("animateItemsForward", "animateItemsBackward1");
  pi2.classList.replace("animateItemsForward", "animateItemsBackward2");
  pi3.classList.replace("animateItemsForward", "animateItemsBackward3");
  pi4.classList.replace("animateItemsForward", "animateItemsBackward4");
  pi5.classList.replace("animateItemsForward", "animateItemsBackward5");

  products.classList.remove("products--after");
  pl.classList.remove("product-list--after");
  ic.classList.remove("icon-container--after");
  pi.classList.remove("product-intro--after");
  pt.classList.remove("product-text--after");
};

// Scroll Position --- 95
document.addEventListener("scroll", (scroll) => {
  console.log(this.scrollY);
  if (this.scrollY > 170 && window.innerWidth > 1100) {
    !productAnimated && animateProductSection();
  } else if (this.scrollY < 150 || window.innerWidth > 1100) {
    productAnimated && cancelProductSectionAnimation();
  }
});

// Slide control

// Set initial slide position on loading.

const slides = document.querySelectorAll(".product-detail");

slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
});

function showSlides(slideCount) {
  const buttons = document.querySelectorAll(".product-btn");
  const zoomSpans = document.querySelectorAll(".zoom-span");
  // Set Button Style
  buttons.forEach((button, index) => {
    // No Change in style od first button
    if (index == 0) return;
    //Check cond from 2nd button
    if (index == parseInt(slideCount)) {
      button.classList.add(`active${parseInt(slideCount)}`);
      zoomSpans[slideCount - 1].style.display = "inline";
      return;
    }
    // Revert buttons to original form if other buttons are clicked.
    button.classList.remove(`active${parseInt(index)}`);
    zoomSpans[index - 1].style.display = "none";
  });
  // If animation hapened i.e. screen is bigger than 1000px
  productAnimated && window.scrollTo(0, 740);

  // No margin while translation.
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(calc(${
      (index - slideCount) * 100
    }% ))`;
  });
}

const showSlide2 = () => {
  window.scrollTo(0, 740);
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(calc(${(index - 1) * 100}% + 40px))`;
  });
};

const serviceData = [
  {
    img: "",
    heading: "Because learning happens everywhere",
    desc: "Design remote and hybrid learning environments, empower teachers and students, and create more equitable educational opportunities.",
    title: "Zoom for Education",
    data: "89- of the top 100 global universities choose Zoom",
  },
  {
    img: "",
    heading: "Trusted solutions for the finance sector",
    desc: "Secure communications and collaboration technology designed for a complex regulatory landscape.",
    title: "Zoom for Financial Services",
    data: "8- Of the 10 largest U.S. Banks choose Zoom",
  },
  {
    img: "",
    heading: "Communications for the people",
    desc: "Improve access and information sharing, build stronger relationships, and better serve your constituents.",
    title: "Zoom for Government",
    data: "87%- of government workers felt favorable toward Zoom for video communications",
    dataType: "percent",
  },
  {
    img: "",
    heading: "Connect everyone in your health organization",
    desc: "Communicate across the continuum of care, meet patients where they are, and enable an agile, connected workforce.",
    title: "Zoom for Healthcare",
    data: "9- of the Top 10 U.S. Hospitals Choose Zoom",
  },
  {
    img: "",
    heading: "Real-time communication, anywhere in the world",
    desc: "Reliably connect global staff, designers, factories, supply chains, and more to keep production moving.",
    title: "Zoom for Manufacturing",
    data: "7- of the 10 top global pharmaceutical companies choose Zoom",
  },
  {
    img: "",
    heading: "Bridging the in-store and online experiences",
    desc: "Use video to reimagine e-commerce and unlock new revenue opportunities.",
    title: "Zoom for Retail",
    data: "8- of the top 10 largest U.S. retailers choose Zoom",
  },
];

const openServiceCard = (cardNumber) => {
  const productRightSection = document.querySelector(".right-section");
  const serviceDetail = document.querySelector(".service-detail");
  const hideDetailsButton = document.querySelector(".hide-details-button");
  const serviceList = document.querySelectorAll(".service-card");

  if (window.innerWidth > 900) {
    productRightSection.style.flexBasis = "25%";
  }
  serviceDetail.style.display = "flex";

  if (window.innerWidth < 900){
    hideDetailsButton.style.display = "block";
  }

  // change color and bg on click
  serviceList.forEach((service, index) => {
    if (index == cardNumber) {
      service.style.backgroundColor = rootStyle.getPropertyValue("--primary");
      service.style.color = rootStyle.getPropertyValue("--text-light");
      return;
    }
    service.style.backgroundColor =
      rootStyle.getPropertyValue("--background-light");
    service.style.color = rootStyle.getPropertyValue("--text-dark");
  });

  const serviceImage = document.querySelector("#service-image");
  const serviceTitle = document.querySelector("#service-title");
  const serviceDesc = document.querySelector("#service-desc");
  const serviceStat = document.querySelector("#service-stat");
  const servicePara = document.querySelector("#service-para");
  const serviceBtn = document.querySelector("#service-btn");

  // serviceImage.src = serviceData[cardNumber].img;
  serviceTitle.innerText = serviceData[cardNumber].heading;
  serviceDesc.innerText = serviceData[cardNumber].desc;
  serviceBtn.innerText = serviceData[cardNumber].title;
  serviceStat.innerText = serviceData[cardNumber].data.split("-")[0];
  servicePara.innerText = serviceData[cardNumber].data.split("-")[1];
};

const hideServiceDetail = () => {
  const serviceDetail = document.querySelector(".service-detail");
  const hideDetailsButton = document.querySelector(".hide-details-button");
  serviceDetail.style.display = "none";
  hideDetailsButton.style.display = "none";
}

const showNavMenu = () => {
  const navMenu = document.querySelector(".nav-menu");
  if (navMenu.style.display == "flex") {
    navMenu.style.display ="none";
    return
  }
  navMenu.style.display = "flex"
}