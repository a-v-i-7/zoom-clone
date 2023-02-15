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

// change keyword and image on timebar

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
    img3Height: "6",
    img4: "/img/slide2-4.jpg",
  },
  {
    varKey: "innovate",
    img1: "/img/slide3-1.jpg",
    img2: "img/slide3-2.png",
    img2Width: "25",
    img2Height: "9",
    img3: "img/slide3-3.png",
    img3Width: "15",
    img3Height: "10.5",
    img4: "/img/slide3-4.jpg",
  },
];

const funcToCall = () => {
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
  // timebarInner.addEventListener("animationstart", funcToCall());
  timebarInner.addEventListener("animationiteration", funcToCall());

  timeBar.appendChild(timebarInner);
};
window.addEventListener("load", timeBarStart);
