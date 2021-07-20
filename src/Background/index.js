import logger from '~Lib/log';

initialize().catch((err) => {
  logger.error('err>>>>>>>>', err);
});
/* ------------------- Functions  ------------------------ */
async function initialize() {
  console.log('>>>>>>>>>>>>>>>>>>');
  logger.debug('>>>>>>>>BACK entry js>>>>>>>>>>', 'ok');
}
