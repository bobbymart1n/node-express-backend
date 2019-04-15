const express = require( "express" );
const app = express();
const port = 4000;

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
