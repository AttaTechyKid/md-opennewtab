// Extract the query parameter from the URL
function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Open the provided link in a new tab
function openLinkInNewTab(link) {
  const newTab = window.open(link, '_blank');
  newTab.focus();
}

// Get the link and current URL from query parameters
const linkParam = getQueryParam('link');
const currentParam = getQueryParam('current');

// Check if the link parameter is provided
if (linkParam) {
  openLinkInNewTab(linkParam);

  // Check if the current parameter is provided
  if (currentParam) {
    setTimeout(() => {
      window.location.href = currentParam;
    }, 1000);
  }
}
