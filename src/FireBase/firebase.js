import Firebase from 'firebase';

import config from './config.js';

let app = Firebase.initializeApp(config);

export default app;
