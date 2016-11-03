import ApplicationSerializer from 'ga-wdi-boston.ember-resources/application/serializer';

import DS from 'ember-data';

export default ApplicationSerializer.extend({
  serialize(snapshot, options) {
    // switch from text to content on way out
    let json = this._super(...arguments);
    console.log('json is', json);
    json.content = json.text;
    delete json.text;
    return json;
  },
  normalize(model, response) {
    // switch from content to text on way in
    response.text = response.content;
    delete response.content;
    return this._super(model, response);
  },
});
