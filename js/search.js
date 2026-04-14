function makeTeaser(body, terms) {
  if (!body) return '';
  var TEASER_MAX_CHARS = 200;
  var lowerBody = body.toLowerCase();
  var firstTermIndex = -1;

  for (var i = 0; i < terms.length; i++) {
    var idx = lowerBody.indexOf(terms[i].toLowerCase());
    if (idx !== -1 && (firstTermIndex === -1 || idx < firstTermIndex)) {
      firstTermIndex = idx;
    }
  }

  var start = Math.max(0, firstTermIndex - 50);
  var end = Math.min(body.length, start + TEASER_MAX_CHARS);
  var teaser = (start > 0 ? '…' : '') + body.substring(start, end) + (end < body.length ? '…' : '');

  terms.forEach(function(term) {
    var regex = new RegExp('(' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
    teaser = teaser.replace(regex, '<b>$1</b>');
  });

  return teaser;
}

function formatSearchResultItem(item, terms, isLast) {
  var doc = item.item;
  return '<div class="search-results__item">'
    + '<h3>' + doc.title + '</h3>'
    + '<p>' + makeTeaser(doc.body, terms) + '</p>'
    + '<p class="s"><a href="' + doc.url + '">' + doc.url + '</a></p>'
    + '</div>' + (isLast ? '' : '<hr>');
}

function initSearch() {
  var $searchInput = document.getElementById("search-input");
  var $searchResults = document.querySelector(".search-results");
  var $searchResultsItems = document.querySelector(".search-results__items");
  var MAX_ITEMS = 20;
  var currentTerm = "";
  var debounceTimer;

  if (!$searchInput || !window.searchIndex) return;

  var fuse = new Fuse(window.searchIndex, {
    keys: [
      { name: 'title', weight: 2 },
      { name: 'body', weight: 1 }
    ],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.4
  });

  function doSearch() {
    var term = $searchInput.value.trim();
    if (term === currentTerm) return;

    $searchResults.style.display = term === "" ? "none" : "block";
    $searchResultsItems.innerHTML = "";
    currentTerm = term;

    if (term === "") return;

    var results = fuse.search(term);
    if (results.length === 0) {
      $searchResultsItems.innerHTML = '<p class="s">No results</p>';
      return;
    }

    var terms = term.split(" ").filter(function(t) { return t.length > 0; });
    var count = Math.min(results.length, MAX_ITEMS);
    for (var i = 0; i < count; i++) {
      $searchResultsItems.innerHTML += formatSearchResultItem(results[i], terms, i === count - 1);
    }
  }

  $searchInput.oninput = function() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(doSearch, 150);
  };
}

if (document.readyState === "complete" ||
  (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  initSearch();
} else {
  document.addEventListener("DOMContentLoaded", initSearch);
}
