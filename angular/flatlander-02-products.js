(function(){
  var app = angular.module('store-products', []);
  //----------------
  app.directive('productGallery', function() {
    return { restrict: 'E', templateUrl: 'flatlander-02/templates/product-gallery.html',
      controller: function() { this.current = 0; 
        this.setCurrent = function(newGallery){ this.current = newGallery || 0; };
      },
      controllerAs: 'gallery'
    };
  });
  //----------------
  app.directive('productTitle', function() {
    return { restrict: 'E', templateUrl: 'flatlander-02/templates/product-title.html' };
  });
  //----------------
  app.directive("productSpecs", function() {
    return { restrict: 'A', templateUrl: 'flatlander-02/templates/product-specs.html' };
  });
  //----------------
  app.directive("productPanels", function() {
    return { restrict: 'E', templateUrl: 'flatlander-02/templates/product-panels.html',
      controller: function() { this.tab = 1; 
        this.selectTab = function(setTab) { this.tab = setTab; }; 
        this.isSelected = function(checkTab) { return this.tab === checkTab; };
      },
      controllerAs: 'panel'
    };
  });
  //----------------
})();