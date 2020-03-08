import Post from './Post';
import './styles/styles.css';

const post = new Post({ title: 'Hello Webpack !' });

console.log(post.toString());
