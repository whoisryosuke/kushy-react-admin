import React from 'react'
import { fetchUtils, Admin, Resource } from 'react-admin'
import kushyProvider from './providers/kushyProvider'

import { ShopsList } from './resources/ShopsList';
import { PhotosList } from './resources/PhotosList';
import { StrainsList } from './resources/StrainsList';
import { BrandsList } from './resources/BrandsList';
import { ProductsList } from './resources/ProductsList';

import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
  overrides: {
    MuiAppBar: { // Name of the component ⚛️ / style sheet
      colorPrimary: {
        backgroundColor: '#CC2029', // Some CSS
      },
      colorSecondary: {
        backgroundColor: '#CC2029', // Some CSS
      },
    },
  },
});

// const httpClient = (url, options = {}) => {
//   if (!options.headers) {
//       options.headers = new Headers({ Accept: 'application/json' });
//   }
//   // add your own headers here
//   options.headers.set('Access-Control-Expose-Headers', 'Content-Range');
//   return fetchUtils.fetchJson(url, options);
// }

const dataProvider = kushyProvider('http://localhost/api/v1')
const App = () => ( 
    <Admin 
      title="Kushy Admin"
      theme={theme}
      dataProvider={dataProvider} 
    >
      <Resource name="brands" list={BrandsList} />
      <Resource name="shops" list={ShopsList} />
      <Resource name="strains" list={StrainsList} />
      <Resource name="products" list={ProductsList} />
      <Resource name="photos" list={PhotosList} />
    </Admin>
);

export default App