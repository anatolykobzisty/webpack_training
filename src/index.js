import Post from './Post';
import './styles/styles.css';
import WebpackLogo from './assets/webpack-logo.png';
import json from './assets/json';
import xml from './assets/data.xml';
import csv from './assets/data.csv';

const post = new Post('Webpack', WebpackLogo);

console.log(post.toString());

console.log(json);
console.log(xml);
console.log(csv);
