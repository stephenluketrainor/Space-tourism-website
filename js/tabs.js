// ------------------------------------
// Javascript for changing destination pages
// ------------------------------------

// Changing tabs using arrow keys
const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabList.addEventListener('keydown', changeTabFocus);

  let tabFocus = 0;
  function changeTabFocus (e){
    const keydownLeft = 37;
    const keydownRight = 39;

    // change the tabindex of the current tab to -1
    if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
        tabs[tabFocus].setAttribute("tabindex", -1);
        // if the right key is pushed, move to the next tab on the right
      if (e.keyCode === keydownRight) {
          tabFocus++;
          if (tabFocus >= tabs.length) {
            tabFocus = 0
        }
      }
      // if the left key is pushed, move to the next tab on the left
      else if ((e.keyCode === keydownLeft)) {
          tabFocus--;
          if (tabFocus < 0) {
            tabFocus = (tabs.length -1);
          }
      }
      tabs[tabFocus].setAttribute("tabindex", 0);
      tabs[tabFocus].focus();
    }

  }

  // -----dynamically change page content (article + picture)------

// Creating for loop to add event listener to each tab
  tabs.forEach((tab) => {
      tab.addEventListener('click', changeTabPanel);
  });

  function changeTabPanel(e) {
    // calling target of event which gets the element that fired the event
    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute("aria-controls");
    // Hiding the underlining for each tab
    tabs.forEach((tab) => {tab.setAttribute("aria-selected",false);
    });
    // Showing underlining for selected tab
    targetTab.setAttribute("aria-selected",true);

  // Getting parent of tab that was clicked
    const tabContainer = targetTab.parentNode;
// Getting parent of tab system, which is the main
    const mainContainer = tabContainer.parentNode.parentNode;


    hideContent(mainContainer, '[role="tab-panel"]');
    hideContent(mainContainer, '[role="tab-picture"]');
    showContent(mainContainer, `#${targetPanel}`);
    showContent(mainContainer, `[data-tag=${targetPanel}]`);

    // -----------functions-------------
    // Hide all articles and images in document
    function hideContent(parent, content) {
      parent
        .querySelectorAll(content)
        .forEach((item) => item.setAttribute("hidden", true));
    }
// query select for the associated id of the tab that was clicked on using template literals. Everything in ${} is javascript
// Show articles and image associated with clicked tab
    function showContent(parent, content) {
      parent.querySelector(content).removeAttribute('hidden');
    }
}
