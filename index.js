const EventEmitter = require('events').EventEmitter;
const { launchServer, launchWatcher } = require('./lib'),
  { debug } = require('./lib/display'),
  launchCommand = require('./commands'),
  _config = require('./config');

module.exports = cfg => {
  const emitter = new EventEmitter();
  cfg.emitter = emitter;

  const config = { ..._config, ...cfg };
  debug(config.debug, config);
  const server = launchServer(config);
  launchWatcher(server, config);
  return emitter;
};
