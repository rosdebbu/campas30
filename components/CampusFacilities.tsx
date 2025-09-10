
import React from 'react';
import type { FacilityCategory, FacilityDetail } from '../types';

// Icons
const BusIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2a1 1 0 011 1v8a1 1 0 01-1 1h-2a1 1 0 01-1-1z" /></svg>;
const TrainIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>;
const RestaurantIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2a1 1 0 011 1v8a1 1 0 01-1 1h-2a1 1 0 01-1-1z" /></svg>;
const TimeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;


const facilitiesData: FacilityCategory[] = [
    { id: 'transport', title: 'Transportation', subtitle: 'Buses, Trains & Autos', color: 'blue', icon: BusIcon, items: [{ name: 'Bus 500', status: 'arriving', statusText: 'Arriving in 5 min', details: ['Next train: 4:15 PM', 'Autos available'] }] },
    { id: 'food', title: 'Food & Dining', subtitle: 'Mess, Canteens & More', color: 'green', icon: RestaurantIcon, items: [{ name: 'Main Mess', status: 'open', statusText: 'Open Now', details: ['Breakfast: 7:30-9:30 AM', 'CCD: Open', 'Food Court: Open'] }] },
    { id: 'shops', title: 'Shops & Services', subtitle: 'Xerox, Stationery & More', color: 'orange', icon: BusIcon, items: [{ name: 'Xerox Shops', status: 'custom', statusText: 'Open till 9 PM', details: ['Stationery: Open', 'Laundry: Open'] }] },
    { id: 'health', title: 'Health & Safety', subtitle: 'Hospital, Pharmacy & SOS', color: 'red', icon: BusIcon, items: [{ name: 'Emergency Contact', status: 'custom', statusText: '+91 98402 12345', details: ['24/7 Available', 'SRM Hospital: Open', 'Doctors: Available'] }] },
    { id: 'gym', title: 'Gym & Fitness', subtitle: 'On-campus & Nearby Gyms', color: 'yellow', icon: BusIcon, items: [{ name: 'SRM Fitness Center', status: 'open', statusText: 'Open Now', details: ['Timings: 6AM-10PM', 'Contact: 9876543210'] }] },
    { id: 'housing', title: 'Housing', subtitle: 'Hostels, PGs & Flats', color: 'purple', icon: BusIcon, items: [{ name: 'Hostel Applications', status: 'open', statusText: 'Open', details: ['2024-25 Academic Year', 'PGs Available: 12', 'Near Campus'] }] },
];

const StatusBadge: React.FC<{ status: 'open' | 'arriving' | 'closed' | 'custom'; text: string }> = ({ status, text }) => {
    const colorClasses = {
        open: 'bg-green-100 text-green-800',
        arriving: 'bg-blue-100 text-blue-800',
        closed: 'bg-red-100 text-red-800',
        custom: 'bg-gray-100 text-gray-800'
    };
    if (text.startsWith('+')) colorClasses.custom = 'bg-red-100 text-red-800';

    return (
        <span className={`px-3 py-1 text-sm font-semibold rounded-full ${colorClasses[status]}`}>{text}</span>
    );
};

const FacilityCard: React.FC<{ category: FacilityCategory }> = ({ category }) => {
    const headerBgClasses = {
        blue: 'bg-blue-500', green: 'bg-green-500', orange: 'bg-orange-500',
        red: 'bg-red-500', yellow: 'bg-yellow-500', purple: 'bg-purple-500',
    };
    const headerImage = `https://picsum.photos/seed/${category.id}/500/150`;

    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <div className={`relative ${headerBgClasses[category.color]} text-white p-5 h-32 flex flex-col justify-end`}>
                 <img src={headerImage} alt={category.title} className="absolute inset-0 w-full h-full object-cover opacity-20"/>
                 <div className="relative">
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                    <p className="text-sm opacity-90">{category.subtitle}</p>
                 </div>
            </div>
            <div className="p-6 flex-grow space-y-4">
                {category.items.map(item => (
                    <div key={item.name}>
                        <div className="flex justify-between items-center mb-2">
                            <h4 className="font-bold text-lg text-gray-800">{item.name}</h4>
                            <StatusBadge status={item.status} text={item.statusText} />
                        </div>
                        <ul className="text-gray-600 space-y-1 text-sm">
                            {item.details.map((detail, index) => (
                                <li key={index} className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    {detail}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

const CampusFacilities: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                     <div className="flex justify-center items-center mb-4">
                        <svg className="h-8 w-8 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                        </svg>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Campus Facilities</h2>
                    </div>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">Discover key facilities. Click a card to find them on the interactive map!</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {facilitiesData.map(category => (
                        <FacilityCard key={category.id} category={category} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CampusFacilities;
