import { IonRouterOutlet } from '@ionic/react';
import {
    Route,
} from 'react-router-dom';
import App from '@root/app';
import Home from '@views/home';

export default (
    <IonRouterOutlet>
        <Route path="/" element={<App/>}>
            <Route index element={<Home/>}/>
        </Route>
    </IonRouterOutlet>
);
