import Post from './Post';
import './styles/styles.css';
import WebpackLogo from './assets/webpack-logo.png';
import json from './assets/json';

const post = new Post('Webpack', WebpackLogo);

console.log(post.toString());

console.log(json);
