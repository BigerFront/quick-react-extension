import * as InfuraOpts from './infura';
import * as tokenOpts from './token';

const envOpts = {
  ...InfuraOpts,
  ...tokenOpts,
};

export default envOpts;
