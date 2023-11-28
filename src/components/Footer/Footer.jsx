

import React from 'react'

export default function Footer() {
    return (
        <div
            style={{
                height: '10rem', padding: '5rem',

                backgroundColor: '#111502', color: 'white'
            }}
        >
            <div
                style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>
                    <h5
                        style={{ lineHeight: '1.75rem',fontSize:'1.5rem', paddingBottom: '2rem' }}
                    >Company</h5>
                 
                </span>
                <span>
                    <h5
                        style={{ lineHeight: '1.75rem',fontSize:'1.5rem', paddingBottom: '2rem' }}>Help</h5>
                  
                </span>
                <span>
                    <h5
                        style={{ lineHeight: '1.75rem',fontSize:'1.5rem', paddingBottom: '2rem' }}>Resources</h5>
                    
                </span>
                <span>
                    <h5
                        style={{ lineHeight: '1.75rem',fontSize:'1.5rem', paddingBottom: '2rem' }}>Links</h5>
                </span>
            </div>

        </div>
    );
};
