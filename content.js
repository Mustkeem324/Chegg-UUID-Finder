function findQuestionLink() {
  const link = document.querySelector('[data-test="breadcrumb-question"]');
  return link;
}

function createBanner(link) {
  const banner = document.createElement('div');
  let questionUUID = "";

  // Extracting question UUID from the page content
  if (document.documentElement.innerHTML.indexOf('uuid":"') >= 0) {
    questionUUID = document.documentElement.innerHTML.split('uuid":"')[1].split('"')[0];
  } else if (document.documentElement.innerHTML.indexOf('pageNameDetailed":"') >= 0) {
    questionUUID = document.documentElement.innerHTML.split('pageNameDetailed":"')[1].split('"')[0];
  }

  banner.id = 'question-banner';

  // Creating banner content based on the presence of the question link
  const htmlContent = `
    <p>Question Link: ${link.href}</p>
    <h2>Question UUID: ${questionUUID}</h2>
`;

  if (link) {
    banner.innerHTML = htmlContent;
  } else {
    banner.innerHTML = 'Error: Question link not found.';
    banner.style.color = 'red';
  }
  
  // Applying CSS styles
  const bannerStyle = banner.style;
  bannerStyle.position = "fixed";
  bannerStyle.top = "0";
  bannerStyle.left = "0";
  bannerStyle.width = "100%";
  bannerStyle.height = "100px"; // default height
  bannerStyle.background = "rgb(196,238,174)";
  bannerStyle.background = "radial-gradient(circle, rgba(196,238,174,1) 60%, rgba(148,187,233,1) 100%)"; // Gradient background
  bannerStyle.color = "black"; // corrected color
  bannerStyle.fontWeight = "bold"; // corrected font weight
  bannerStyle.fontSize = "20px";
  bannerStyle.border = "2px solid #FF7A00"; // Border color changed
  bannerStyle.padding = "10px";
  bannerStyle.boxShadow = "0px 2px 5px rgba(0, 0, 0, 0.1)"; // Box shadow
  bannerStyle.borderRadius = "10px"; // Border radius
  bannerStyle.transition = "background 0.3s, color 0.3s"; // Transition effect
  
  
  document.documentElement.appendChild(banner);

  return banner;
}

function applyStyles() {
  const banner = document.getElementById('question-banner');
  banner.classList.add('question-banner');
}

function init() {
  const link = findQuestionLink();
  const banner = createBanner(link);
  applyStyles();
}

if (window.location.href.startsWith('https://www.chegg.com')) {
  init();
}
