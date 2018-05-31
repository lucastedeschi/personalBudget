import { App } from './app';

App.express.listen(3000, function(){
  console.log('Server started - http://localhost:3000');
});
