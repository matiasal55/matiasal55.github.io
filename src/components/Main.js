import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import Loader from 'react-spinners/PropagateLoader';
import '../styles/Main.scss';

const Main = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    if (loading)
        return (
            <div className='loading'>
                <Loader color='#1ab6b9' />
            </div>
        );

    return (
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
    );
};

export default Main;
