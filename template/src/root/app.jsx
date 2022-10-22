import { Outlet } from 'react-router-dom';
import '@stylesheets/main.scss';

const App = ({}) => {
    return (
        <>
            Example App
            <Outlet/>
        </>
    )
};

export default App;