import React, { Fragment } from 'react'
import { HomePage } from '.';

export const routes = [
  {
    "name": "Home Page",
    "path": "/home",
    "component": <HomePage />
  },
];

const Routes = () => (
  routes.map((pages, index) => (
    <Fragment key={index} >
      {pages.component}
    </Fragment>
  ))
)

export default Routes