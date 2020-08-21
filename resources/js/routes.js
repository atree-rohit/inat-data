import Home from './components/Home';
import Temporal from './components/Temporal';
import Spatial from './components/Spatial';
import Taxonomic from './components/Taxonomic';
import NotFound from './components/NotFound';
import Upload from './components/Upload';

export default {
	mode:'hash',
	linkActiveClass: 'font-bold',
	routes: [
		{
			path: '*',
			component: NotFound
		}, {
			path: '/',
			component: Home
		}, {
			path: '/upload',
			component: Upload
		}, {
			path: '/temporal',
			component: Temporal
		}, {
			path: '/spatial',
			component: Spatial
		}, {
			path: '/taxonomic',
			component: Taxonomic
		}
	]
};
