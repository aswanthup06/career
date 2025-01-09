import React from 'react';

export default function Skill() {

    const leftProgressData = [
        { label: 'Product Design & Development', percentage: 67 },
        { label: 'Web Development', percentage: 89 },
        { label: 'Mobile App Development', percentage: 76 },
        { label: 'UI Design', percentage: 80 },
    ];

    const rightProgressData = [
        { label: 'UX Research', percentage: 70 },
        { label: 'React Development', percentage: 90 },
        { label: 'Backend Integration', percentage: 60 },
        { label: 'Prototyping', percentage: 85 },
    ];

    return (
        <div className='container px-4 md:px-28 overflow-hidden mx-auto'>

<div className='text-center p-10'>
            <h1 className='font-bold text-3xl text-zinc-800'>Skills</h1>
            <h1 className='text-zinc-800'>A UI (User Interface) Developer plays a pivotal</h1>
    </div>    
            
            
            <div className='grid grid-cols-2 gap-12'>

                <div className="space-y-6">
                    {leftProgressData.map((progress, index) => (
                        <div key={index}>
                            <div className="text-lg font-medium mb-2 text-zinc-800">{progress.label}</div>
                            <div className="relative w-full h-5 bg-gray-300 overflow-hidden">
                                <div
                                    className="h-full bg-blue-500 transition-all duration-500"
                                    style={{ width: `${progress.percentage}%` }}
                                ></div>
                               
                            </div>
                        </div>
                    ))}
                </div>

                <div className="space-y-6">
                    {rightProgressData.map((progress, index) => (
                        <div key={index}>
                            <div className="text-lg font-medium mb-2 text-zinc-800">{progress.label}</div>
                            <div className="relative w-full h-5 bg-gray-300 overflow-hidden">
                                <div
                                    className="h-full bg-blue-500 transition-all duration-500"
                                    style={{ width: `${progress.percentage}%` }}
                                ></div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
}

