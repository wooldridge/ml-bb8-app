const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
console.log('tooltipTriggerList', tooltipTriggerList);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

function handlePriorityClick(event) {
  const allButtons = Array.from(
    document.getElementsByClassName('btn-priority')
  );
  allButtons.forEach((btn) => {
    btn.classList.remove('active');
  });
  const clickedButton = document.getElementById(event.target.id);
  clickedButton.classList.add('active');
}

function handleTabClick(event) {
  // Handle tabs
  const allTabs = Array.from(document.getElementsByClassName('nav-link'));
  allTabs.forEach((tab) => {
    tab.classList.remove('active');
  });
  const clickedTab = document.getElementById(event.target.id);
  clickedTab.classList.add('active');

  // Handle tab content
  const allContent = Array.from(document.getElementsByClassName('tab-content'));
  allContent.forEach((section) => {
    section.classList.remove('selected');
  });
  const contentToShow = document.getElementById(event.target.id + '-content');
  contentToShow.classList.add('selected');
}
