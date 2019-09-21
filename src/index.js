import app from './app';
import '@babel/polyfill';

app.set('port', process.env.PORT ||  4000);

async function main () {
    // Start the server
    await app.listen(app.get('port'))
    console.log('server on port', app.get('port'));

}

main();
