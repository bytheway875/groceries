import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  relationships: ['sale', 'bogo'],
  include: ['sale', 'bogo']
});
