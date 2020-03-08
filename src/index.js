import * as $ from 'jquery';

import Post from '@models/Post';
import '@/styles/styles.css';
import './styles/less.less';
import './styles/scss.scss';

import WebpackLogo from './assets/webpack-logo';
import './babel';
import json from './assets/json';
import xml from './assets/data.xml';
import csv from './assets/data.csv';

const post = new Post('Webpack', WebpackLogo);

$('pre')
  .addClass('code')
  .html(post.toString());

// console.log(json);
// console.log(xml);
// console.log(csv);
