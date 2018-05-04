# react-here
> React.js Mere Maps integration component

### Install 
    npm install react-here
    
    
## Use
``` JS
import { Here } from 'react-here';

<Here
  ref={'normal'}
  platform={{
    appId: 'app_id',
    appCode: 'app_Code'
  }}
/>
```


### Props

Property                             | type      | Default Value
-------------------------------------|-----------|------------------|-----------------------------------------------------------------
platform                             | Object    | platform: { appId: '', appCode: '', useCIT: true, useHTTPS: true },
center                               | Object    | center: { lat: 41.03115, lng: 29.00214 },
styles                               | Object    | center: { lat: 41.03115, lng: 29.00214 },
zoom                                 | Number    | 13
mapUi                                | Boolean   | true
traffic                              | Boolean   | false
incidents                            | Boolean   | false
