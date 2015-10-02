# mithril-meteor
meteor package for mithril /w reactive

## example
```javascript
if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  Meteor.startup(function() {
    m.module(document.body, {
      controller: reactive(function() {
        this.counter = Session.get('counter');
      }),
      view: function(ctrl) {
        return [
          m('h1', 'Welcome to Mithril-Meteor'),
          m('button', {
            onclick: function() {
              Session.set('counter', 1+Session.get('counter'));
            }
          }, 'click me'),
          m('p', "You've pressed the button "+ctrl.counter+"times.")
        ]
      }
    });
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
```