import chalk from 'chalk';

export default function log(...msg) {

  // maps message into green messages
  msg = msg.map(function(m) {
    return chalk.green(m);
  });

  // Prepends minidrone message
  msg.unshift(chalk.bold.green('[mini-drone]'));

  // Call console.log with all arguments
  console.log.apply(null, msg);
};
