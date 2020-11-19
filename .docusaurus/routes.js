
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','7fd'),
  exact: true,
},
{
  path: '/docs/__docusaurus/debug',
  component: ComponentCreator('/docs/__docusaurus/debug','33d'),
  exact: true,
},
{
  path: '/docs/blog',
  component: ComponentCreator('/docs/blog','d2d'),
  exact: true,
},
{
  path: '/docs/blog/tags',
  component: ComponentCreator('/docs/blog/tags','13a'),
  exact: true,
},
{
  path: '/docs/blog/tags/rick-roll',
  component: ComponentCreator('/docs/blog/tags/rick-roll','bb0'),
  exact: true,
},
{
  path: '/docs/blog/Welcome',
  component: ComponentCreator('/docs/blog/Welcome','9a2'),
  exact: true,
},
{
  path: '/docs/curious',
  component: ComponentCreator('/docs/curious','453'),
  exact: true,
},
{
  path: '/docs/docs',
  component: ComponentCreator('/docs/docs','f2d'),
  
  routes: [
{
  path: '/docs/docs/',
  component: ComponentCreator('/docs/docs/','fcf'),
  exact: true,
},
{
  path: '/docs/docs/authentication',
  component: ComponentCreator('/docs/docs/authentication','54a'),
  exact: true,
},
{
  path: '/docs/docs/converters_endpoints',
  component: ComponentCreator('/docs/docs/converters_endpoints','61c'),
  exact: true,
},
{
  path: '/docs/docs/converters_overview',
  component: ComponentCreator('/docs/docs/converters_overview','26f'),
  exact: true,
},
{
  path: '/docs/docs/crops',
  component: ComponentCreator('/docs/docs/crops','7de'),
  exact: true,
},
{
  path: '/docs/docs/field_boundaries_endpoints',
  component: ComponentCreator('/docs/docs/field_boundaries_endpoints','cb9'),
  exact: true,
},
{
  path: '/docs/docs/field_boundaries_overview',
  component: ComponentCreator('/docs/docs/field_boundaries_overview','216'),
  exact: true,
},
{
  path: '/docs/docs/glossary(unused)',
  component: ComponentCreator('/docs/docs/glossary(unused)','a13'),
  exact: true,
},
{
  path: '/docs/docs/introduction',
  component: ComponentCreator('/docs/docs/introduction','88f'),
  exact: true,
},
{
  path: '/docs/docs/operations_endpoints',
  component: ComponentCreator('/docs/docs/operations_endpoints','570'),
  exact: true,
},
{
  path: '/docs/docs/operations_overview',
  component: ComponentCreator('/docs/docs/operations_overview','2cd'),
  exact: true,
},
{
  path: '/docs/docs/operations_postman',
  component: ComponentCreator('/docs/docs/operations_postman','6dd'),
  exact: true,
},
{
  path: '/docs/docs/operations_sample_output',
  component: ComponentCreator('/docs/docs/operations_sample_output','381'),
  exact: true,
},
{
  path: '/docs/docs/quickstart',
  component: ComponentCreator('/docs/docs/quickstart','562'),
  exact: true,
},
{
  path: '/docs/docs/samplefiles',
  component: ComponentCreator('/docs/docs/samplefiles','7b2'),
  exact: true,
},
{
  path: '/docs/docs/satellite_endpoints',
  component: ComponentCreator('/docs/docs/satellite_endpoints','cce'),
  exact: true,
},
{
  path: '/docs/docs/satellite_overview',
  component: ComponentCreator('/docs/docs/satellite_overview','58e'),
  exact: true,
},
{
  path: '/docs/docs/user_management_endpoints',
  component: ComponentCreator('/docs/docs/user_management_endpoints','c2a'),
  exact: true,
},
{
  path: '/docs/docs/user_management_overview',
  component: ComponentCreator('/docs/docs/user_management_overview','b64'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
