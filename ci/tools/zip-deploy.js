#!/usr/bin/env node

/**
 * Build zip & deploy script file
 */
const DEV_ENV_VALT = 'production';
process.env.BABEL_ENV = DEV_ENV_VALT;
process.env.NODE_ENV = DEV_ENV_VALT;

const fs = require('fs-extra');
const chalk = require('chalk');
const archiver = require('archiver');
const emoji = require('node-emoji');

const ZIP_NAME_REGEX = /^[a-z][a-z0-9\-\_]+(.zip)?$/;
const IPV4_REGEX = new RegExp(
  /^(?:(?:1[0-9][0-9]\.)|(?:2[0-4][0-9]\.)|(?:25[0-5]\.)|(?:[1-9][0-9]\.)|(?:[0-9]\.)){3}(?:(?:1[0-9][0-9])|(?:2[0-4][0-9])|(?:25[0-5])|(?:[1-9][0-9])|(?:[0-9]))$/
);
//^[1-9]$|(^[1-9][0-9]$)|(^[1-9][0-9][0-9]$)|(^[1-9][0-9][0-9][0-9]$)|(^[1-6][0-5][0-5][0-3][0-5]$) 0-65535
// 20 -65535
const PORT_REGEX = new RegExp(
  /(^[2-9][0-9]$)|(^[1-9][0-9][0-9]$)|(^[1-9][0-9][0-9][0-9]$)|(^[1-6][0-5][0-5][0-3][0-5]$)/
);

const { R, dist, distzip, join } = require('../paths');
const env = require('../../config');

const {
  APP_NAME,
  APP_VERSION,
  TARGET_BROWSER,
  REMOTE_USER,
  REMOTE_DIST,
  SSH_KEY,
} = env;

const DEST_DIR = R(dist, TARGET_BROWSER);
const DEST_ZIP_DIR = R(distzip, TARGET_BROWSER);

main()
  .then((text) => {})
  .catch((err) => {
    console.log(chalk.redBright('build-zip catch error:\n'));

    if (err && err.message) {
      console.log(err.message);
    }
  });

async function main() {
  showHelp();
  try {
  } catch (error) {
    throw error;
  }
}

/** ============================ Functions =========================== */
function getCommitTag(version) {
  let gitStatus = require('child_process').execSync('git status -s').toString();

  if (gitStatus || gitStatus !== '' || gitStatus.trim().length > 0) {
    let msg =
      chalk.hex('#cb8')(
        ' ❌ Please commit the following code before build-zip.\n'
      ) + gitStatus;
    throw new Error(msg);
  }

  let commitHash = require('child_process')
    .execSync('git rev-parse --short HEAD')
    .toString();
  const versionTag = `${version}-${
    commitHash.endsWith('\n')
      ? commitHash.substring(0, commitHash.length - 2)
      : commitHash
  }`;

  return versionTag;
}

function showHelp() {
  let originalArgvs = process.env.npm_config_argv
    ? JSON.parse(process.env.npm_config_argv).original
    : process.argv;
  let idx = originalArgvs.findIndex((argv) => argv === '--help');
  let cidx = originalArgvs.findIndex((argv) => argv === '-h');
  if (idx > 0 || cidx > 0) {
    console.log(cmdComments());
    process.exit(0);
  }
}

function cmdComments() {
  let c =
    '\n' +
    chalk.hex('#d39021')(`terminal arguments:\n`) +
    chalk.hex('#d39021')(`\t -h or --help : show commands help.\n`) +
    chalk.hex('#d39021')(`\t -p or --push-remote : open push zip to remote\n`) +
    chalk.hex('#d39021')(`\t --remote-host : remote serve host only ipv4\n`) +
    chalk.hex('#d39021')(`\t --remote-port : remote serve port\n`) +
    chalk.hex('#d39021')(`\t --remote-user or -u : remote serve user\n`) +
    chalk.hex('#d39021')(`\t -k or --ssh-key : your ssh-key path.\n`);

  return c;
}
