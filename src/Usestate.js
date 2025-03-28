import React, { useState } from 'react';

const Study = () => {
    const [Open, setOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setOpen((prev) => !prev)}>
                {Open ? '닫기' : '열기'}
            </button>
        </div>
    );
};

export default Study;
