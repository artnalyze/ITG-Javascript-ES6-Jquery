// import ex.1
import { sayHi, sayBye } from "./say.js";

// import ex.2
import * as say from "./say.js";

// import ex.3
import { sayHi as sh, sayBye as sb } from "./say.js";

sayHi("John");
sayBye("John");

say.sayHi("Art");
say.sayBye("dvp");

sh("Art");
sb("dvp");

import User from "./user.js";

let aa = new User("Art");
aa.sayHi();
