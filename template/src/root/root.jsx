import {
    IonApp,
    IonPage,
    IonRouterOutlet,
    setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router';
import Home from '@views/home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

setupIonicReact();

const Root = ({}) => {
    return (
        <IonApp>
            <IonReactRouter>
                <IonPage>
                    <h1>Example App</h1>
                    <IonRouterOutlet>
                        <Route index element={<Home/>}/>
                    </IonRouterOutlet>
                </IonPage>
            </IonReactRouter>
        </IonApp>
    );
};

export default Root;