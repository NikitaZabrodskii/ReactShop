  
import { useEffect } from 'react';

function Alert(props) {
    const { name = '', handleAlert = Function.prototype } = props;

    useEffect(() => {
        const timerId = setTimeout(handleAlert, 3000);

        return () => {
            clearTimeout(timerId);
        };
        // eslint-disable-next-line
    }, [name]);

    return (
        <div id='toast-container'>
            <div className='toast'>{name} добавлен в корзину</div>
        </div>
    );
}

export default Alert ;