var IonicSiteModule = angular.module('IonicSite', ['ngAnimate'])
.controller('DocsNavCtrl', ['$scope', '$timeout', function($scope, $timeout) {
  var navItemPos = $('#side-nav > ul > .active').length ?
                    $('#side-nav > ul > .active').offset().top : null;
  $sideNav = $('#side-nav');
  if ($sideNav[0].offsetHeight < navItemPos + 100) {
    $sideNav[0].scrollTop =  navItemPos - 300;
  }
}])
.controller('SassToggleCtrl', ['$scope', function ($scope) {
  $scope.setSassPlatform = function (platform) {
    $scope.active = platform;
  };
}])
.controller('ComponentsCtrl', ['$scope', '$timeout',
                       function($scope, $timeout) {
  var $androidIframe = $('iframe#demo-android');
  var $iosIframe = $('iframe#demo-ios');
  var $windowsIframe = $('iframe#demo-windows');

  //add the IDs of any sections with child nav in component list
  var sectionsWithChildrenSimple = [];
  var sectionsWithChildren = {};
  for (i in sectionsWithChildrenSimple) {
    var section = sectionsWithChildrenSimple[i];
    sectionsWithChildren[section] = $('#components-' + section);
  }

  var updateIframe =  debounce(function() {
    $iosIframe[0].contentWindow.postMessage(JSON.stringify({
      hash: $hash
    }), '*');
    $androidIframe[0].contentWindow.postMessage(JSON.stringify({
      hash: $hash
    }), '*');
    $windowsIframe[0].contentWindow.postMessage(JSON.stringify({
      hash: $hash
    }), '*');
  }, 500);

  $scope.setPlatform = function(platform) {
    $scope.previewPlatform = platform;
    if (platform == 'ios') {
      $scope.androidActive = false;
      $scope.windowsActive = false;
      $timeout(function() {
        $scope.iosActive = true;
      },30);
      badChromeFix($('iframe#demo-ios'));
    } else if (platform == 'windows') {
      $scope.iosActive = false;
      $scope.androidActive = false;
      $timeout(function() {
        $scope.windowsActive = true;
      },30);
      badChromeFix($('iframe#demo-windows'));
    } else {
      $scope.iosActive = false;
      $scope.windowsActive = false;
      $timeout(function() {
        $scope.androidActive = true;
      },30);
      badChromeFix($('iframe#demo-android'));
    }

    function badChromeFix(iframe) {
      var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
      var version =  raw ? parseInt(raw[2], 10) : false;
      if (version === 49) {
        $('ion-content', iframe.contents()).hide();
        $timeout(function() {
          $('ion-content', iframe.contents()).show();
        }, 200);
      }
    }
  };

  $scope.setPlatform('ios');

  var $scrollspy = $('body').scrollspy({
    target: '#components-index'
  });

  $scrollspy.on('activate.bs.scrollspy', onScrollSpyChange);

  (function setSubSections() {
    var sections = {};
    for (s in sectionsWithChildren) {
      // skip loop if the property is from prototype
      if (!sectionsWithChildren.hasOwnProperty(s)) {
        continue;
      }
      var subSections = sectionsWithChildren[s][0].nextElementSibling.children;
      for (var i = subSections.length - 1; i >= 0; i--) {
        var subSectionName = subSections[i].children[0].href.split('#')[1];
        sections[subSectionName] = s;
      };
    };
    $scope.subSections = sections;
  }());

  var $hash;
  var $node;

  function onScrollSpyChange(e) {
    if (e.target.id === 'components-index') {
      return;
    }
    $hash = $('a[href^="#"]', e.target).attr('href').replace(/^#/, '');
    $node = $('#' + $hash);

    setActive($hash);

    if ($node.length) {
      $node.attr('id', '');
    }
    document.location.hash = $hash;
    updateIframe();
    if ($node.length) {
      return $node.attr('id', $hash);
    }
  }

  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this;
      var args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) {
          func.apply(context, args);
        }
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) {
        func.apply(context, args);
      }
    };
  };

  function setActive(hash) {
    // given a url hash, set the correct section to 'active'
    if (hash in $scope.subSections &&
        $scope.subSections[hash] in sectionsWithChildren) {
      $timeout(function() {
        sectionsWithChildren[$scope.subSections[hash]].addClass('active');
      });
    }
  }

  (function setUpListeners() {
    var evMethod = window.addEventListener ? 'addEventListener' : 'attachEvent';
    var eventer = window[evMethod];
    var messageEvent = evMethod == 'attachEvent' ? 'onmessage' : 'message';
    // Listen to message from child window
    eventer(messageEvent, function(e) {
      sendCurrentHash(e.data);
    }, false);
    // Listen for scroll events on iframe - don't allow them to bubble to parent
    $('iframe').on('mousewheel DOMMouseScroll', function(ev) {
      ev.preventDefault();
    });
  })();

  function sendCurrentHash(platform) {
    // send the initial hash if possible
    if (platform === 'ios') {
      $iosIframe[0].contentWindow.postMessage(JSON.stringify({
        hash: window.location.hash
      }), '*');
      return;
    } else if (platform === 'windows') {
      $windowsIframe[0].contentWindow.postMessage(JSON.stringify({
        hash: window.location.hash
      }), '*');
      return;
    }
    $androidIframe[0].contentWindow.postMessage(JSON.stringify({
      hash: window.location.hash
    }), '*');
  };

  // positioning the platform preview appropriately on scroll
  var $platformPreview = $('#platform-preview');
  var $window = $(window);
  $window.scroll(fixyCheck);
  function fixyCheck(a, b, c) {
    if ($window.scrollTop() > 78) {
      $platformPreview.addClass('fixey');
    } else {
      $platformPreview.removeClass('fixey');
    }
  }
}])
.controller('APIDemoCtrl', ['$scope', '$timeout', function($scope, $timeout) {
  var $platformPreview = $('#platform-preview');
  var $window = $(window);
  var $iframes = $('iframe');
  var activeDemoIndex = 0;

  $scope.setPlatform = function(platform) {
    $scope.previewPlatform = platform;
    if (platform == 'ios') {
      $scope.androidActive = false;
      $scope.windowsActive = false;
      $timeout(function() { $scope.iosActive = true; }, 30);
      return;
    } else if (platform == 'windows') {
      $scope.iosActive = false;
      $scope.androidActive = false;
      $timeout(function() { $scope.windowsActive = true; }, 30);
      return;
    }
    $scope.iosActive = false;
    $scope.windowsActive = false;
    $timeout(function() { $scope.androidActive = true; }, 30);
  };
  $scope.setPlatform('ios');
  // Listen for scroll events on iframe - don't allow them to bubble to parent
  $('iframe').on('mousewheel DOMMouseScroll', function(ev) {
    ev.preventDefault();
  });
  $window.scroll(fixyAndDemoCheck);
  $window.scroll();
  function fixyAndDemoCheck() {
    var scrollTop = $window.scrollTop();

    if (scrollTop > 78) {
      $platformPreview.addClass('fixey');
    } else {
      $platformPreview.removeClass('fixey');
    }

    if (typeof $scope.additionalPreviewUrls === 'undefined') {
      return;
    }

    var activeKey = null;
    for (var i = 0; i < $scope.additionalPreviewUrls.length; i++) {
      if (scrollTop > $scope.additionalPreviewUrls[i].offset) {
        activeKey = i;
      }
    };

    if (activeKey == activeDemoIndex) {
      // demo is already active
      return;
    }

    $iframes.each(function() {
      activeDemoIndex = activeKey;
      var queryString = $(this).attr('src').split('?')[1];
      var newURL = $scope.additionalPreviewUrls[activeKey].url + queryString;
      $(this).attr('src', $scope.additionalPreviewUrls[activeKey].url);
    });
  }

  $scope.initAdditionalPreviewUrls = function() {
    if (typeof window.additionalPreviewUrls === 'undefined') {
      return;
    }

    $scope.additionalPreviewUrls = [{
      id: 'default',
      url: $($iframes[0]).attr('src').split('?')[0],
      offset: -1
    }];

    Object.keys(window.additionalPreviewUrls).forEach(function(key) {
      $scope.additionalPreviewUrls.push({
        id: key,
        url: window.additionalPreviewUrls[key].url,
        offset: $('#' + key).offset().top
      });
    });

    $scope.additionalPreviewUrls.sort(function(a, b) {
      if (a.offset < b.offset) {
        return -1;
      }
      return a.offset > b.offset ? 1 : 0;
    });
    $scope.$evalAsync($window.scroll());
  };
}])
.controller('IoniconDocsCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.icons = {};
  var $modal;

  $http.get('site_data.json').then(function(response) {
    $scope.icons = response.data;
  });

  $scope.$watch('icons', filterIcons);
  $scope.$watch('searchTerm', filterIcons);

  function filterIcons() {
    var filteredIcons = {};
    if (typeof $scope.searchTerm === 'undefined' || $scope.searchTerm == '') {
      $scope.filteredIcons = $scope.icons;
      return;
    }
    var filteredIcons = {};
    angular.forEach($scope.icons, function(value, key) {
      for (var i = 0; i < value.tags.length; i++) {
        if (value.tags[i].indexOf($scope.searchTerm) != -1) {
          this[key] = value;
          break;
        }
      }
    }, filteredIcons);
    $scope.filteredIcons = filteredIcons;
  }

  $scope.open = function(key) {
    $scope.selected = $scope.filteredIcons[key];
    $scope.selected.key = key;
    if ($modal === undefined) {
      $modal = $('#ionicons-modal').modal();
    } else {
      $modal.modal('show');
    }
  };

  $scope.getIcon = function(iconObj, platform) {
    //console.log(iconObj);
    if (iconObj === undefined) {
      //console.log('undefined');
      return;
    }
    if (iconObj.icons.length === 1 || platform === 'ios') {
      return iconObj.icons[0].name;
    }
    if (iconObj.icons.length === 2) {
      return iconObj.icons[1].name;
    }
    return iconObj.icons[2].name;
  };

}]);
