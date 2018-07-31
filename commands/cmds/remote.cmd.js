exports.command = 'remote [source] [url] [destination]';
exports.desc = 'Start watching';
exports.builder = yargs => {
  yargs
    .option('verbose', {
      alias: 'v',
      type: 'boolean'
    })
    .option('debug', {
      alias: 'd',
      type: 'boolean'
    })
    .option('events', {
      alias: 'e',
      describe: 'An array of event used as liteners.',
      type: 'array'
    })
    .option('concurrency', {
      alias: 'c',
      describe: 'Number of task that can be done in parallel.',
      type: 'number'
    })
    .option('username', {
      alias: 'u',
      describe: 'A username to connect for ssh.',
      type: 'string'
    })
    .option('password', {
      alias: 'pwd',
      describe: 'A password to connect for ssh.',
      type: 'string'
    })
    .option('privateKey', {
      alias: 'ppk',
      describe: 'Use your pka file under ~/.ssh.',
      type: 'boolean'
    })
    .option('ncUrl', {
      alias: 'nc',
      describe: 'A netcat url for ssh.',
      type: 'string'
    })
    .option('remove', {
      alias: 'rm',
      describe: 'Enable delete file from destination server.',
      type: 'boolean'
    })
    .option('ignored', {
      alias: 'i',
      describe: 'A glob, regex, function, or array of any combination.',
      type: 'array'
    });
};
exports.handler = function(argv) {
  if (!argv.source && typeof argv.source !== 'string') {
    throw new Error('source argumment is missing or invalid');
  }
  if (!argv.destination && typeof argv.destination !== 'string') {
    throw new Error('destination argumment is missing or invalid');
  }

  return argv;
};
