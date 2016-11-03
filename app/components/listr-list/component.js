import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['listr'],
  classNameBindings: ['listDetailHidden'],
  listDetailHidden: false,
  newItem: {
    content: null,
    done: false,
  },
  actions: {
    toggleListDetail () {
      return this.toggleProperty('listDetailHidden');
    },
    toggleItemDone (item) {
      return this.sendAction('toggleItemDone', item);
    },
    deleteItem (item) {
      return this.sendAction('deleteItem', item);
    },
    createItem() {
      return this.sendAction('createItem', this.get('newItem'));
    },
  },
});
