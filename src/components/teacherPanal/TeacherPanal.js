import React from 'react';
import img1 from '../../images/panel/papul.jpg'
import img2 from '../../images/panel/mosiur.jpg'
import img3 from '../../images/panel/kamrul.jpg'
import img4 from '../../images/panel/lemon.jpg'
const TeacherPanal = () => {
    const panels = [
        {
            id: 1,
            teacherName: 'Imam Hossain Papul',
            roll: 'Directore',
            Phone: 'XXXXXXXXX',
            image: img1,
            mail: "mail@gmail.com"
        },
        {
            id: 2,
            teacherName: 'Moshiur Rahman',
            roll: 'Directore',
            Phone: 'XXXXXXXXX',
            image: img2,
            mail: "mail@gmail.com"
        },
        {
            id: 3,
            teacherName: 'Karuzzaman',
            roll: 'Head Teacher',
            Phone: 'XXXXXXXXX',
            image: img3,
            mail: "mail@gmail.com"
        },
        {
            id: 4,
            teacherName: 'Leon Mondol',
            roll: 'Assistant Head',
            Phone: 'XXXXXXXXX',
            image: img4,
            mail: "mail@gmail.com"
        },
    ]
    return (
        <div className='container mt-10 w-3/4 mx-auto'>
            <h1 className='mb-6 text-3xl'>This is Our Teacher Panel</h1>
            <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
                {
                    panels.map(panel => <div className="card w-96 bg-base-500 shadow-xl" key={panel.id}>
                        <figure><img style={{height:'256px',width:'100%'}} src={panel.image} alt= {panel.teacherName} /></figure>
                        <div className="card-body">
                            <h2 className="card-text text-xl">
                                {panel.teacherName}
                            </h2>
                            <p className='text-slate-400'>{panel.roll}</p>
                            <div className="card-actions justify-center">
                                <div className="badge badge-outline">{panel.Phone}</div>
                                <div className="badge badge-outline">{panel.mail}</div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TeacherPanal;