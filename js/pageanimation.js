function animateScreen(targetElement, currentElement, targetStep) {
  const targetNode = $(targetElement);
  const currentNode = $(currentElement);

  currentNode.fadeOut({
    complete: function () {
      targetNode.fadeIn();
      renderProgress(targetStep);
    },
  });
}

function renderProgress(step, total = 9) {
  const getQuoteProgress = $("#getQuoteProgress");
  const getQuoteProgressBar = $("#getQuoteProgressBar");
  const percentVal = ((step / total) * 100).toFixed(2);
  getQuoteProgressBar.css("width", `${percentVal}%`);
  getQuoteProgress.attr("aria-valuenow", percentVal);
}

$(document).ready(renderProgress(1));
