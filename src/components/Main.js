import { Suspense } from 'react';
import { css } from '@emotion/react';
import Loader from 'react-spinners/PropagateLoader';
import '../styles/Main.scss';

const Main = () => {
    return (
        <Suspense fallback={<Loader color='#1ab6b9' />}>
            <main>
                <div className='main'>
                    <div className='menu'>
                        <h1>Matias Alarcón</h1>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Works</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className='picture'></div>
                </div>
            </main>
        </Suspense>
    );
};

export default Main;
