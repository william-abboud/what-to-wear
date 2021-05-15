import './styles/style.css';
import './scripts/components/message-card/message-card.css';
import './assets/images/web.jpg';
import './assets/images/web.webp';
import './assets/images/web.avif';

import 'react';
import 'react-dom';

const sayHello = (name: string) => {
  console.log('Hello World', name);
};

(async function () {
  const name = await Promise.resolve('J Jonah Jameson');

  sayHello(name);
}());
