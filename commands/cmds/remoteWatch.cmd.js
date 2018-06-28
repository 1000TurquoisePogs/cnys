exports.command = 'remoteWatch [source] [url] [destination]';
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
    .option('copy', {
      alias: 'cp',
      describe: 'Enable to copy source to destination at start.',
      type: 'boolean'
    })
    .option('remove', {
      alias: 'rm',
      describe: 'Enable delete file from destination server.',
      type: 'boolean'
    })
    .option('glob', {
      alias: 'g',
      describe: 'A single string glob pattern or an array of them.',
      type: 'array'
    })
    .option('ignored', {
      alias: 'i',
      describe: 'A glob, regex, function, or array of any combination.',
      type: 'array'
    })
    .option('retry', {
      alias: 'r',
      describe: 'Number of retry when an error occur durring copy.',
      type: 'number'
    });
};
exports.handler = function(argv) {
  if (!argv.source && typeof argv.source !== 'string') {
    throw new Error('source argumment is missing or invalid');
  }
  if (!argv.destination && typeof argv.destination !== 'string') {
    throw new Error('destination argumment is missing or invalid');
  }

  if (argv.verbose)
    console.log(
      `Start watching ${argv.source} on ${argv.url} at ${argv.destination}`
    );
  return argv;
};