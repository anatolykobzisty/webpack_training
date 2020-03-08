import Post from './Post';
import './styles/styles.css';
import json from './assets/json';

const post = new Post({ title: 'Hello Webpack !' });

console.log(post.toString());

console.log(json);
