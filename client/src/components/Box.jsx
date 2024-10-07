import React from 'react';

const Box = ({ overlays }) => {
    return (
        <>
            {overlays.map((item, index) => (
                <div
                    key={index}
                    style={{
                        top: `${item.top}px`,
                        left: `${item.left}px`,
                        height: `${item.height}vh`,
                        width: `${item.width}vw`,
                        backgroundColor: "blue", // You can customize colors as needed
                    }}
                    className="absolute"
                />
            ))}
        </>
    );
};

export default Box;
