import createMeteorMetrics, {
  createObserverMetrics,
  createSessionMetrics,
  createSocketMetrics
} from './metrics/meteor';

function measured(Meteor, registry, customDimensions, reportingIntervalInSeconds) {
  Meteor.startup(() => {
    createMeteorMetrics(Meteor, registry, customDimensions, reportingIntervalInSeconds);
  });
}

export { createObserverMetrics, createSessionMetrics, createSocketMetrics };
export default measured;
