module.exports = function() {
  Magellan.Views.ErrorBanner = Backbone.View.extend({
    template: _.template(require('./ErrorBanner.template.html')),
    initialize: function(config) {
      this.primaryText = config.primaryText || '';
      this.secondaryText = config.secondaryText || '';
      this.container = config.container || '#error-banner-wrapper';
      this.hideCloseButton = config.hideCloseButton || false;

      this.$container = $(this.container);
    },

    events: {
      'click .error-banner-close-btn': 'hide',
    },

    show: function(primary, secondary) {
      this.primaryText = primary || this.primaryText;
      this.secondaryText = secondary || this.secondaryText;
      this.setElement(this.$container).render();
      this.$container.css('display', 'flex');
    },

    hide: function(e) {
      this.$container.hide();
      this.remove();
      return this;
    },

    render: function() {
      var content = this.template({
        primaryText: this.primaryText,
        secondaryText: this.secondaryText,
        hideCloseButton: this.hideCloseButton,
      });
      this.$el.html(content);

      return this;
    }
  });
}