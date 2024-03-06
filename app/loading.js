import React from 'react';

const Loading = () => {
    const loadingSectionStyle = {
        width: '100%',
        height: '80vh',
        display: 'grid',
        placeItems: 'center',
    };

    const loadingStyle = {
        display: 'inline-block',
        position: 'relative',
        width: '80px',
        height: '80px',
    };

    const loadingAfterStyle = {
        content: ' ',
        display: 'block',
        borderRadius: '50%',
        width: 0,
        height: 0,
        margin: '8px',
        boxSizing: 'border-box',
        border: '32px solid #e50914',
        borderColor: '#e50914 transparent #e50914 transparent',
        animation: 'loading 1.2s infinite',
    };

    const keyframes = `
    @keyframes loading {
      0% {
        transform: rotate(0);
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }
      50% {
        transform: rotate(900deg);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      }
      100% {
        transform: rotate(1800deg);
      }
    }
  `;

    return (
        <div>
            <style>{keyframes}</style>
            <div style={loadingSectionStyle}>
                <div style={loadingStyle}>
                    <div style={loadingAfterStyle}></div>
                </div>
            </div>
        </div>
    );
};

export default Loading;
