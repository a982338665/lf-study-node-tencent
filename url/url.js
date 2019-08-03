
//旧版
const url = require('url');

let uri = "https://ke.qq.com/webcourse/index.html#cid=315597&term_id=100374543&taid=2329598851600589&type=1024&vid=g14276bve49";

// Url {
//     protocol: 'https:',
//         slashes: true,
//         auth: null,
//         host: 'ke.qq.com',
//         port: null,
//         hostname: 'ke.qq.com',
//         hash:
//     '#cid=315597&term_id=100374543&taid=2329598851600589&type=1024&vid=g14276bve49',
//         search: null,
//         query: null,
//         pathname: '/webcourse/index.html',
//         path: '/webcourse/index.html',
//         href:
//     'https://ke.qq.com/webcourse/index.html#cid=315597&term_id=100374543&taid=2329598851600589&type=1024&vid=g14276bve49' }
// 旧的
console.log(url.parse(uri));

//URL {
//   href:
//    'https://ke.qq.com/webcourse/index.html#cid=315597&term_id=100374543&taid=2329598851600589&type=1024&vid=g14276bve49',
//   origin: 'https://ke.qq.com',
//   protocol: 'https:',
//   username: '',
//   password: '',
//   host: 'ke.qq.com',
//   hostname: 'ke.qq.com',
//   port: '',
//   pathname: '/webcourse/index.html',
//   search: '',
//   searchParams: URLSearchParams {},
//   hash:
//    '#cid=315597&term_id=100374543&taid=2329598851600589&type=1024&vid=g14276bve49' }
//新的
let obj = new url.URL(uri);
console.log(obj);