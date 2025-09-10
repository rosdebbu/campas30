import React, { useState } from 'react';

// Icons for AR view
const ARIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>;
const CloseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>;
const NavArrowIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-cyan-400 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>;
const CameraOffIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" /></svg>;


// AR View Component
const ARNavigationView: React.FC<{ destination: string; onExit: () => void }> = ({ destination, onExit }) => {
    return (
        <div className="fixed inset-0 bg-black z-50 text-white flex flex-col items-center justify-center">
            {/* Camera Feed Placeholder */}
            <div className="absolute inset-0 bg-gray-900 flex flex-col items-center justify-center">
                <CameraOffIcon />
                <p className="text-gray-500 text-lg mt-4">Camera feed placeholder</p>
                <p className="text-gray-600 text-sm">AR navigation requires camera access</p>
            </div>

            {/* AR Overlay UI */}
            <div className="relative z-10 w-full h-full flex flex-col p-4">
                {/* Header */}
                <header className="flex justify-between items-center bg-black/50 p-3 rounded-lg">
                    <div>
                        <p className="text-sm text-gray-300">Navigating to</p>
                        <h2 className="text-xl font-bold">{destination}</h2>
                    </div>
                    <button onClick={onExit} className="bg-red-500/80 hover:bg-red-600 rounded-full p-2 transition-colors" aria-label="Exit AR Navigation">
                        <CloseIcon />
                    </button>
                </header>

                {/* Navigation Guidance */}
                <main className="flex-grow flex flex-col items-center justify-center">
                    <NavArrowIcon />
                    <p className="text-5xl font-bold mt-4 drop-shadow-md">250m</p>
                    <p className="text-xl text-gray-200 drop-shadow-md">Straight Ahead</p>
                </main>

                {/* Footer Info */}
                <footer className="text-center bg-black/50 p-3 rounded-lg">
                    <p>Follow the path to reach your destination</p>
                </footer>
            </div>
        </div>
    );
};


const mapFilters = [
    { id: 'transport', label: 'Transportation', sublabel: 'Buses & Autos' },
    { id: 'food', label: 'Food & Dining', sublabel: 'Mess & Cafes' },
    { id: 'shops', label: 'Shops & Services', sublabel: 'Xerox & Stationery' },
    { id: 'gym', label: 'Gyms & Fitness', sublabel: 'On & Off Campus' },
    { id: 'health', label: 'Health & Safety', sublabel: 'Hospital & Emergency' },
    { id: 'housing', label: 'Housing', sublabel: 'Hostels & PGs' },
];

const InteractiveMap: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('transport');
    const [arModeActive, setArModeActive] = useState(false);
    const [selectedDestination, setSelectedDestination] = useState<string | null>('Transportation');
    
    const handleFilterClick = (filterId: string, filterLabel: string) => {
        setActiveFilter(filterId);
        setSelectedDestination(filterLabel);
    };

    return (
        <section className="py-20 bg-white">
            {arModeActive && selectedDestination && (
                <ARNavigationView
                    destination={selectedDestination}
                    onExit={() => setArModeActive(false)}
                />
            )}

            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="flex justify-center items-center mb-4">
                        <svg className="h-8 w-8 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 16.382V5.618a1 1 0 00-1.447-.894L15 7m0 10V7m0 10L9 7" />
                        </svg>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Interactive 3D Campus Map</h2>
                    </div>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">Explore the campus, find key locations, and use AR to navigate with your camera.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="w-full lg:w-1/3">
                        <div className="space-y-4">
                            {mapFilters.map(filter => (
                                <button
                                    key={filter.id}
                                    onClick={() => handleFilterClick(filter.id, filter.label)}
                                    className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 flex items-center ${activeFilter === filter.id ? 'bg-indigo-50 border-indigo-500 shadow-md' : 'bg-white border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'}`}
                                >
                                    <div>
                                        <h4 className={`font-bold text-lg ${activeFilter === filter.id ? 'text-indigo-600' : 'text-gray-700'}`}>{filter.label}</h4>
                                        <p className="text-sm text-gray-500">{filter.sublabel}</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                         {selectedDestination && (
                            <button
                                onClick={() => setArModeActive(true)}
                                className="w-full mt-6 bg-teal-500 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                aria-label={`Start Augmented Reality Navigation to ${selectedDestination}`}
                            >
                                <ARIcon />
                                <span>Navigate to {selectedDestination}</span>
                            </button>
                        )}
                    </div>
                    <div className="w-full lg:w-2/3 h-[550px] rounded-2xl overflow-hidden shadow-lg">
                        <iframe
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://demo.f4map.com/#lat=12.8232&lon=80.0444&zoom=17&pitch=50"
                            title="Interactive 3D Campus Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InteractiveMap;