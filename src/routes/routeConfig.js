/**
 * Route Configuration
 * 
 * Define all application routes here
 */

import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

export const routes = [
  {
    path: '/',
    element: Home,
    name: 'Home',
    chapter: 'The Complete Journey',
  },
  {
    path: '*',
    element: NotFound,
    name: 'Not Found',
    chapter: 'Lost Page',
  },
]