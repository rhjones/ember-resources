import ApplicationSerializer from 'ga-wdi-boston.ember-resources/application/serializer';

import DS from 'ember-data';

export default ApplicationSerializer.extend({
  normalize(model, response) {
    response.text = response.content;
    delete response.content;
    return this._super(model, response);
  },
});
