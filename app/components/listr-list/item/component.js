import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['listItemCompleted'],
  listItemCompleted: Ember.computed.alias('item.done'),
  actions: {
    toggleDone () {
      return this.sendAction('toggleItemDone', this.get('item'));
    },

    delete() {
      return this.sendAction('deleteItem', this.get('item'));
    }
  },
});
