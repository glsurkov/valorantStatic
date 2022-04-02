import React from 'react';

const TrailerPage = () => {
    return (
        <main className='trailer-main'>
            <h1 className='hero-title trailer-main__hero-title'>Immerse yourself in an incredible world</h1>
            <h2 className='hero-title trailer-main__hero-title trailer-main__hero-title--subtitle'>Play Now!</h2>
            <iframe className='trailer-main__video' src="https://www.youtube.com/embed/e_E9W2vsRbQ"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
        </main>
    );
};

export default TrailerPage;