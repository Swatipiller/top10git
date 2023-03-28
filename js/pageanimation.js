function animateScreen(
  targetElement,
  currentElement,
  targetStep,
  totalSteps = 9
) {
  const targetNode = $(targetElement);
  const currentNode = $(currentElement);
  const progressEl = currentNode
    .closest(".modal")
    .find('[role = "progressbar"]')
    .attr("id");
  currentNode.fadeOut({
    complete: function () {
      targetNode.fadeIn();
      renderProgress(`#${progressEl}`, targetStep, totalSteps);
    },
  });
}

function renderProgress(el, step, total) {
  const getQuoteProgress = $(el);
  const getQuoteProgressBar = $(`${el}Bar`);
  const percentVal = ((step / total) * 100).toFixed(2);
  getQuoteProgressBar.css("width", `${percentVal}%`);
  getQuoteProgress.attr("aria-valuenow", percentVal);
}

$(document).ready(function () {
  renderProgress("#getQuoteProgress", 1, 9);
  renderProgress("#requestAvailabilityProgress", 1, 10);
});
