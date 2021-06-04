# quick-extension-boilerplate

### Add Babel ployfill


### Development Wiki

> This Project template can quick create pages by commands.

> let's try create a new view page module 

** Example I will create a user management module**  

this module maybe has a user list and user detail, we can do following this commands.




```bash
# this will create files [index.js,users-comp.jsx,users.scss,users-container.js]
yarn mod:view --mod-path users --noPage 
yarn mod:view -m users/list # user list, -m is --mod-path alias
# this will creat files in <subEntry: default p3>/users/user-detail. 
# when  both  use cross-env MOD_PATH=... and -m <...> ,will MOD_PATH avalible.
cross-env MOD_PATH='users/user-detail' yarn mod:view   
```

> module path rules : only contains letter characters: [abcd...z,0..9,-,/] and last split by '/' is module name;
