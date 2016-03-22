import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return [
      {title: 'Favorite things',
      items: [
        {content: 'Keith Hulu' },
        {content: 'Cats'},
        {content: 'Naps'}
      ]
    },
      {title: 'Todos',
        items: [
          {content:'Recommend Mike'},
          {content: 'learn Ember'}
      ]
    },
    ];
  }
});
