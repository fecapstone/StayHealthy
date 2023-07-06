import React from 'react'

import "./Services.css";
import { Link } from 'react-router-dom';

const demoData = [
    {
        imageSrc: 'https://img.freepik.com/free-vector/online-doctor-consultation-illustration_88138-414.jpg?size=626&ext=jpg',
        title: 'Instant Consultation',
    },
    {
        imageSrc: 'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=626&ext=jpg',
        title: 'Book an appointment',
    },
    {
        imageSrc: 'https://img.freepik.com/free-vector/doctor-examining-patient-clinic-illustrated_23-2148856559.jpg?size=626&ext=jpg',
        title: 'Find a doctor',
    },
    {
        imageSrc: 'https://img.freepik.com/free-vector/hospital-service-concept-flat-illustration_1150-50287.jpg?size=626&ext=jpg',
        title: 'Health tips & guidence',
    },
]

const Services = () => {
    return (
        <div>
            <section class="services" id="services">
                <div class="section__container services__container">
                    <h2 class="section__title">Best Services</h2>
                    <p class="section__subtitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe adipisci cumque fuga a autem rerum atque quisquam volu
                    </p>
                    <div class="services__grid">
                        {demoData.map((data, index) => (
                            <div className="services__card" key={index}>
                                <img src={data.imageSrc} alt="services" />
                                <div className="services__details">
                                {data.title === 'Book Appointments' ? (
                                    <Link to="/search/doctors">
                                        <p>{data.title}</p>
                                    </Link>
                                    ) : (
                                    <p>{data.title}</p>
                                )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services