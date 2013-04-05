// Backbone.Syphon.ElementExtractors
// --------------

// This function is used to extract DOM elements.
(function () {
  // Override this method to use a custom element extractor.
  Backbone.Syphon.ElementExtractor = function ($view) {
    if ($view.is('form')) {
      return $view.get(0).elements;
    } else {
      return $view.find('form')[0];
    }
  };
}());
