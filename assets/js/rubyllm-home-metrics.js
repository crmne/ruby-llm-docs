(function () {
  'use strict';

  var cacheMaxAge = 6 * 60 * 60 * 1000;
  var pendingStars = {};
  var pendingDownloads = {};

  function formatExactCount(value) {
    try {
      return new Intl.NumberFormat('en-US').format(value);
    } catch (error) {
      return String(value);
    }
  }

  function formatCompactCount(value) {
    try {
      return new Intl.NumberFormat('en-US', {
        notation: 'compact',
        maximumFractionDigits: value < 10000000 ? 1 : 0
      }).format(value);
    } catch (error) {
      if (value >= 1000000) return (value / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
      if (value >= 1000) return (value / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
      return String(value);
    }
  }

  function setStarCount(button, stars) {
    var countElement = button.querySelector('.home-hero-star-count');
    if (!countElement) return;

    var exactCount = formatExactCount(stars);
    countElement.textContent = exactCount;
    countElement.hidden = false;
    button.title = exactCount + ' GitHub stars';
    button.setAttribute('aria-label', 'Star ' + button.getAttribute('data-github-star-repo') + ' on GitHub: ' + exactCount + ' stars');
  }

  function setDownloadCount(button, downloads) {
    var countElement = button.querySelector('.home-hero-downloads-count');
    if (!countElement) return;

    var exactCount = formatExactCount(downloads);
    var textElement = button.querySelector('.home-hero-downloads-text');
    countElement.textContent = formatCompactCount(downloads) + ' downloads';
    countElement.hidden = false;
    if (textElement) textElement.hidden = true;
    button.title = exactCount + ' downloads on RubyGems';

    var label = button.getAttribute('data-rubygems-downloads-label') || 'View gem downloads';
    button.setAttribute('aria-label', label + ': ' + exactCount + ' downloads');
  }

  function readCachedDownloads(gemName) {
    try {
      var valueKey = 'vp-rubygems-downloads:value:' + gemName;
      var tsKey = 'vp-rubygems-downloads:ts:' + gemName;
      var rawValue = localStorage.getItem(valueKey);
      var rawTimestamp = localStorage.getItem(tsKey);
      if (!rawValue || !rawTimestamp) return null;

      var downloads = Number(rawValue);
      var timestamp = Number(rawTimestamp);
      if (!Number.isFinite(downloads) || !Number.isFinite(timestamp)) return null;
      if (Date.now() - timestamp > cacheMaxAge) return null;

      return downloads;
    } catch (error) {
      return null;
    }
  }

  function readCachedStars(repository) {
    try {
      var valueKey = 'vp-github-stars:value:' + repository;
      var tsKey = 'vp-github-stars:ts:' + repository;
      var rawValue = localStorage.getItem(valueKey);
      var rawTimestamp = localStorage.getItem(tsKey);
      if (!rawValue || !rawTimestamp) return null;

      var stars = Number(rawValue);
      var timestamp = Number(rawTimestamp);
      if (!Number.isFinite(stars) || !Number.isFinite(timestamp)) return null;
      if (Date.now() - timestamp > cacheMaxAge) return null;

      return stars;
    } catch (error) {
      return null;
    }
  }

  function writeCachedDownloads(gemName, downloads) {
    try {
      localStorage.setItem('vp-rubygems-downloads:value:' + gemName, String(downloads));
      localStorage.setItem('vp-rubygems-downloads:ts:' + gemName, String(Date.now()));
    } catch (error) {
      // Ignore storage errors.
    }
  }

  function writeCachedStars(repository, stars) {
    try {
      localStorage.setItem('vp-github-stars:value:' + repository, String(stars));
      localStorage.setItem('vp-github-stars:ts:' + repository, String(Date.now()));
    } catch (error) {
      // Ignore storage errors.
    }
  }

  function fetchStars(repository) {
    if (!pendingStars[repository]) {
      var apiRepository = repository
        .split('/')
        .map(function (segment) {
          return encodeURIComponent(segment);
        })
        .join('/');

      pendingStars[repository] = fetch('https://api.github.com/repos/' + apiRepository, {
        headers: { Accept: 'application/vnd.github+json' }
      })
        .then(function (response) {
          if (!response.ok) throw new Error('GitHub request failed');
          return response.json();
        })
        .then(function (data) {
          var stars = Number(data && data.stargazers_count);
          if (!Number.isFinite(stars)) throw new Error('GitHub response missing stars');
          writeCachedStars(repository, stars);
          return stars;
        })
        .catch(function () {
          return null;
        });
    }

    return pendingStars[repository];
  }

  function fetchDownloads(gemName) {
    if (!pendingDownloads[gemName]) {
      pendingDownloads[gemName] = fetch('https://rubygems.org/api/v1/gems/' + encodeURIComponent(gemName) + '.json', {
        headers: { Accept: 'application/json' },
        credentials: 'omit'
      })
        .then(function (response) {
          if (!response.ok) throw new Error('RubyGems request failed');
          return response.json();
        })
        .then(function (data) {
          var downloads = Number(data && data.downloads);
          if (!Number.isFinite(downloads)) throw new Error('RubyGems response missing downloads');
          writeCachedDownloads(gemName, downloads);
          return downloads;
        })
        .catch(function () {
          return null;
        });
    }

    return pendingDownloads[gemName];
  }

  function loadDownloads(button) {
    var showCount = button.getAttribute('data-rubygems-downloads-show-count') !== 'false';
    if (!showCount) return;

    var gemName = button.getAttribute('data-rubygems-downloads-gem');
    if (!gemName) return;

    var cachedDownloads = readCachedDownloads(gemName);
    if (cachedDownloads !== null) {
      setDownloadCount(button, cachedDownloads);
      return;
    }

    fetchDownloads(gemName).then(function (downloads) {
      if (downloads !== null) setDownloadCount(button, downloads);
    });
  }

  function loadStars(button) {
    var showCount = button.getAttribute('data-github-star-show-count') !== 'false';
    if (!showCount) return;

    var repository = button.getAttribute('data-github-star-repo');
    if (!repository) return;

    var cachedStars = readCachedStars(repository);
    if (cachedStars !== null) {
      setStarCount(button, cachedStars);
      return;
    }

    fetchStars(repository).then(function (stars) {
      if (stars !== null) setStarCount(button, stars);
    });
  }

  document.querySelectorAll('.home-hero-star-link[data-github-star-repo]').forEach(function (button) {
    loadStars(button);
  });

  document.querySelectorAll('.home-hero-downloads-link[data-rubygems-downloads-gem]').forEach(function (button) {
    loadDownloads(button);
  });
})();
