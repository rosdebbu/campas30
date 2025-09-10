
import React from 'react';
import type { NewsArticle } from '../types';

const mainArticle: NewsArticle = {
    id: 1,
    category: 'ACADEMICS',
    categoryColor: 'bg-blue-500',
    title: 'SRMIST Unveils New AI & Data Science Research Center',
    author: 'By SRM Communications',
    date: 'October 26, 2024',
    imageUrl: 'https://picsum.photos/seed/newsmain/800/500'
};

const recentStories: NewsArticle[] = [
    { id: 2, category: 'CAMPUS LIFE', categoryColor: 'bg-teal-500', title: 'Annual Cultural Fest "Milan" Dates Announced for October', date: 'October 24, 2024' },
    { id: 3, category: 'SPORTS', categoryColor: 'bg-orange-500', title: 'Inter-University Cricket Tournament Heats Up', date: 'October 22, 2024' },
    { id: 4, category: 'ACHIEVEMENTS', categoryColor: 'bg-indigo-500', title: 'SRM Rover Team Wins International Competition', date: 'October 20, 2024' },
];

const CampusNews: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="flex justify-center items-center mb-4">
                        <svg className="h-8 w-8 text-gray-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3h2m-4 3H5" />
                        </svg>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Campus News & Updates</h2>
                    </div>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">Stay informed about the latest happenings and announcements.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Article */}
                    <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden group">
                        <div className="relative">
                            <img src={mainArticle.imageUrl} alt={mainArticle.title} className="w-full h-80 object-cover" />
                            <div className="absolute top-4 left-4">
                                <span className={`px-3 py-1 text-xs font-bold text-white rounded-full ${mainArticle.categoryColor}`}>{mainArticle.category}</span>
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors duration-300">{mainArticle.title}</h3>
                            <p className="text-sm text-gray-500 mb-4">{mainArticle.author} • {mainArticle.date}</p>
                            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-800 transition-colors duration-300 group">
                                Read More <span className="group-hover:ml-1 transition-all duration-300">&rarr;</span>
                            </a>
                        </div>
                    </div>

                    {/* Recent Stories */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Recent Stories</h3>
                        <div className="space-y-6">
                            {recentStories.map(story => (
                                <div key={story.id} className="group flex items-start space-x-4">
                                     <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${story.categoryColor}`}></div>
                                    <div>
                                        <span className="text-xs font-bold text-gray-500">{story.category}</span>
                                        <h4 className="font-bold text-gray-800 leading-tight group-hover:text-indigo-600 transition-colors duration-300">{story.title}</h4>
                                        <p className="text-xs text-gray-400 mt-1">{story.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CampusNews;
