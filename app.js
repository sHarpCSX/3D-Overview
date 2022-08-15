const overviewBtn = document.querySelector("#overview_button");
const wrapper = document.querySelector("#wrapper");

const triggerClass = "active";
let navigationState = false;

overviewBtn.addEventListener("click", () => {
  if (navigationState) {
    closeOverview();
  } else {
    openOverview();
  }
});

const openOverview = () => {
  navigationState = true;
  wrapper.classList.add(triggerClass);
};
const closeOverview = () => {
  navigationState = false;
  wrapper.classList.remove(triggerClass);
};
