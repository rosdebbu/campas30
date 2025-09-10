
import React from 'react';

const CompassIcon: React.FC = () => (
    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg mb-6">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-indigo-600">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.24 7.76L14.12 14.12L7.76 16.24L9.88 9.88L16.24 7.76Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </div>
);

const Hero: React.FC = () => {
    return (
        <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-20 sm:py-28 text-center">
            <div className="container mx-auto px-4 flex flex-col items-center">
                <CompassIcon />
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                    Your <span className="text-yellow-300">Campus</span> Compass
                </h1>
                <p className="mt-4 text-lg sm:text-xl max-w-2xl text-indigo-100">
                    Navigate SRMIST Potheri with AI-powered assistance and real-time updates
                </p>
                <div className="mt-8 w-full max-w-xl relative">
                    <input
                        type="text"
                        placeholder="Search campus facilities..."
                        className="w-full py-4 pl-6 pr-16 rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition duration-300"
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-teal-400 hover:bg-teal-500 text-white w-12 h-12 rounded-full flex items-center justify-center transition duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
