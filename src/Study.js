import React, { useRef, useEffect } from 'react';

const Study = () => {
    const buttonRef = useRef(null);

    useEffect(() => {
        const handleClick = () => {
            if (buttonRef.current) {
                buttonRef.current.textContent =
                    buttonRef.current.textContent === '열기' ? '닫기' : '열기';
            }
        };

        if (buttonRef.current) {
            buttonRef.current.addEventListener('click', handleClick);
        }

        return () => {
            if (buttonRef.current) {
                buttonRef.current.removeEventListener('click', handleClick);
            }
        };
    }, []); 

    return (
        <div>
            <button ref={buttonRef}>열기</button>
        </div>
    );
};

export default Study;
