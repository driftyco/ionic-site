var IonicSiteModule = angular.module('IonicSite', ['ngAnimate', 'ngSanitize'])
.controller('DocsNavCtrl', ['$scope', '$timeout', function($scope, $timeout) {
  var navItemPos = $('#side-nav > ul > .active').length ?
                    $('#side-nav > ul > .active').offset().top : null;
  $sideNav = $('#side-nav');
  if ($sideNav[0].offsetHeight < navItemPos + 100) {
    $sideNav[0].scrollTop =  navItemPos - 300;
  }
}])
.controller('SassToggleCtrl', ['$scope', function($scope) {
  $scope.setSassPlatform = function(platform) {
    $scope.active = platform;
  };
}])
.controller('ComponentsCtrl', ['$scope', '$timeout',
                       function($scope, $timeout) {
  var $androidIframe = $('iframe#demo-android');
  var $iosIframe = $('iframe#demo-ios');
  var $windowsIframe = $('iframe#demo-windows');

  var sectionsWithChildrenSimple = ['buttons', 'cards', 'alerts', 'forms',
                                    'lists', 'tabs', 'toolbar'];
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
      }, 30);
    } else if (platform == 'windows') {
      $scope.iosActive = false;
      $scope.androidActive = false;
      $timeout(function() {
        $scope.windowsActive = true;
      }, 30);
    } else {
      $scope.iosActive = false;
      $scope.windowsActive = false;
      $timeout(function() {
        $scope.androidActive = true;
      }, 30);
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
  // check scroll position on load
  fixyCheck();
}])
.controller('APIDemoCtrl', ['$scope', '$timeout', function($scope, $timeout) {
  var $platformPreview = $('#platform-preview');
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

}])
.controller('ResourcesCtrl', ['$scope', '$location', function($scope, $location) {
  $scope.$on('$locationChangeSuccess', function(event, newUrl, oldUrl) {
    $scope.$evalAsync(function() {
      $scope.hash = window.location.hash.substr(2).split('?')[0];
    });
  });
.controller('PricingReserveCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.launched = false;
  $scope.showSurvey = false;
  $scope.submitting = false;
  $scope.thanks = false;

  $scope.form = {};

  $scope.submit = function() {
    $scope.submitting = true;
    $http.post('http://survey.apis.ionicjs.com/reservespot/v1pricing', {
      email: $scope.form.email
    }).then(function(res) {
      $scope.thanks = true;
      $scope.submitting = false;
      $scope.showSurvey = true;
    }, function(err) {
      $scope.submitting = false;
      var msg = 'Unable to reserve spot. Please contact help@ionic.io (see ' +
        'console for more info)';
      alert(msg);
      console.error(err);
      $scope.showSurvey = true;
    });
  };

  $scope.surveyQuestions = {
    questions: [
      {
        title: 'What kind of developer are you?',
        tag: 'aboutyourself',
        options: [
          {title: 'Novice Developer', tag: 'novice', value: 'novice-dev'},
          {title: 'Expert Developer', tag: 'expert', value: 'expert-dev'},
          {title: 'Designer', tag: 'designer', value: 'designer'},
          {title: 'Product Manager', tag: 'pm', value: 'pm'},
          {title: 'Student', tag: 'student', value: 'student'},
        ],
        type: 'checkbox',
        allowOther: true
      },
      {
        title: 'What are you building?',
        tag: 'whatyoucreate',
        options: [
          {
            title: 'An app for my company',
            tag: 'appforcompany',
            value: 'for-company'
          },
          {
            title: 'A personal project',
            tag: 'appforpersonal',
            value: 'for-personal'
          },
          {
            title: 'An app for a client',
            tag: 'appforclient',
            value: 'for-client'
          },
          {
            title: 'An app for school',
            tag: 'appforschool',
            value: 'for-school'
          },
          {
            title: 'I\'m just evaluating',
            tag: 'appfornothing',
            value: 'for-nothing'
          },
        ],
        type: 'checkbox',
        allowOther: true
      },
      {
        title: 'How large is your Employer?',
        tag: 'howlargeco',
        options: [
          {title: 'Self-employed', tag: '1', value: '1'},
          {title: '2-10', tag: '2-10', value: '2-10'},
          {title: '11-50', tag: '11-50', value: '11-50'},
          {title: '51-500', tag: '51-500', value: '51-500'},
          {title: '500+', tag: '500-', value: '500-'}
        ],
        type: 'checkbox',
        limit: 1
      }
    ],
    done: {
      title: 'Thanks!',
      text: 'Keep building awesome apps 🎉'
    },
    contact: {
      ifHasValue: ['howlargeco.51-500', 'howlargeco.500-'],
      message: 'We are collecting feedback on Ionic. Would you be willing to ' +
        'speak with us briefly? If so, please choose a time <a ' +
        'href="https://calendly.com/ionic-research/ionic-wiz-research" ' +
        'target="_blank">here</a>.'
    }
  };

  $scope.finishedSurvey = function(results) {
    $http.post('http://survey.apis.ionicjs.com/survey/', {
      campaign: 'pricing_v1',
      results: results,
    }).then(function(resp) {
    }).catch(function(err) {
      console.error('Unable to save survey', err);
    });
  };

  $scope.closedSurvey = function() {
    $scope.showSurvey = false;
  };
}]);
