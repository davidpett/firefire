import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  brand: attr('string'),
  sodaName: attr('string'),
  imageUrl: attr('string')
});
