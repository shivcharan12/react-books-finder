import IRoute from '../interfaces/route';
import BooksPage from '../pages/Books';

const routes: IRoute[] = [
    {
        path: '/books',
        name: 'Manage books',
        component: BooksPage,
        exact: true
    }
];

export default routes;