// src/app.ts
import Prism from 'prism-react-renderer/prism';

(typeof global !== 'undefined' ? global : window).Prism = Prism;

require('prismjs/components/prism-kotlin');
require('prismjs/components/prism-csharp');
require('prismjs/components/prism-java');
require('prismjs/components/prism-python');
require('prismjs/components/prism-go');
