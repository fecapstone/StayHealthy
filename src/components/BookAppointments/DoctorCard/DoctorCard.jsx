import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './DoctorCard.css';

// AppointmentForm component
const AppointmentForm = ({ doctorName, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
  
        const [selectedSlot, setSelectedSlot] = useState(null);
      
        const handleSlotSelection = (slot) => {
          setSelectedSlot(slot);
        };
    // const handleSlotSelection = (slot,i) => {
    //     console.log(slot);
    //     console.log(setSelectedSlot(slot));
    //   setSelectedSlot(slot);
    //  document.getElementById(`btnslot${i}`).style.backgroundColor='green'
    // };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, phoneNumber, date, time });
        // Clear the form fields
        setName('');
        setPhoneNumber('');
        setDate('');
        setTime('');
    };

    return (
        <form onSubmit={handleFormSubmit} className="appointment-form">
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />
            </div>
            <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                />
            </div>
            <div className="form-group">
                <label htmlFor="date">Date of Appointment:</label>
                <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                />
            </div>
            <div className="form-group">
                <label htmlFor="time">Book Slot:</label>
                {/* <input
                type="time"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                /> */}
      <input
    //    className='btnslot'
          type="submit"
          value="Slot 1" disabled
        //   disabled={selectedSlot === 'Slot 1'} 
      
          onClick={(e) => {
            e.preventDefault();
            handleSlotSelection('Slot 1');
          }}
        />
        <input className='btnslot'
          type="submit"
          value="Slot 2"
          disabled={selectedSlot === 'Slot 2'}
          onClick={(e) => {
            e.preventDefault();
            handleSlotSelection('Slot 2');
          }}
        />
        <input className='btnslot'
          type="submit"
          value="Slot 3"
          disabled={selectedSlot === 'Slot 3'}
          onClick={(e) => {
            e.preventDefault();
            handleSlotSelection('Slot 3');
          }}
        />
        <input className='btnslot'
          type="submit"
          value="Slot 4"
          disabled={selectedSlot === 'Slot 4'}
          onClick={(e) => {
            e.preventDefault();
            handleSlotSelection('Slot 4');
          }}
        />
            </div>
            <button type="submit">Book Now</button>
            </form>

    );
};

const DoctorCard = ({ name, speciality, experience, location, clinic, consultationFees, profilePic }) => {
  const [showModal, setShowModal] = useState(false);
  const [isAppointmentBooked, setIsAppointmentBooked] = useState(false);

  // Check if appointment data exists in localStorage
    useEffect(() => {
        const storedData = localStorage.getItem(name);
        if (storedData) {
            setIsAppointmentBooked(true);
        }
    }, [name]);
    const handleBooking = () => {
        setShowModal(true);
    };

    const handleCancel = () => {
        // Delete the appointment data from local storage
        localStorage.removeItem(name);
        setIsAppointmentBooked(false);
    };

    const handleFormSubmit = (appointmentData) => {
        // Save the form data to local storage
        localStorage.setItem(name, JSON.stringify(appointmentData));
        setIsAppointmentBooked(true);
        setShowModal(false);
    };

    return (
        <div className="doctor-card-container">
            <div className="doctor-card-details-container">
                <div className="doctor-card-profile-image-container">
                    <img src={profilePic} alt={name} />
                    </div>
                    <div className="doctor-card-details">
                        <div className="doctor-card-detail-name">{name}</div>
                        <div className="doctor-card-detail-speciality">{speciality}</div>
                        <div className="doctor-card-detail-experience">{experience} years experience overall</div>
                        <div className="doctor-card-detail-location">{location}</div>
                        <div className="doctor-card-detail-clinic">{clinic}</div>
                        <div className="doctor-card-detail-consultationfees">₹{consultationFees} Consultation fees at clinic</div>
                    </div>
                </div>
            <div className="doctor-card-options-container">
                <Popup
                    style={{backgroundColor:'#FFFFFF'}}
                trigger={
                    <button className={`book-appointment-btn ${isAppointmentBooked ? 'cancel-appointment' : ''}`}>
                    {isAppointmentBooked ? (
                        <div>Cancel Appointment</div>
                    ) : (
                        <div>Book Appointment</div>
                    )}
                    <div>No Booking Fee</div>
                    </button>
                }
                modal
                open={showModal}
                onClose={() => setShowModal(false)}
                >
                {(close) => (
                    <div className='doctorbg' style={{height:'100vh',overflow:'scroll',}}>
                    <div>
                    <div className="doctor-card-profile-image-container">
                        <img src={profilePic} alt={name} />
                    </div>
                    <div className="doctor-card-details">
                        <div className="doctor-card-detail-name">{name}</div>
                        <div className="doctor-card-detail-speciality">{speciality}</div>
                        <div className="doctor-card-detail-experience">{experience} years experience overall</div>
                        <div className="doctor-card-detail-location">{location}</div>
                        <div className="doctor-card-detail-clinic">{clinic}</div>
                        <div className="doctor-card-detail-consultationfees">₹{consultationFees} Consultation fees at clinic</div>
                    </div>
                    </div>
                    {isAppointmentBooked ? (
                        <div>
                        <h3 style={{textAlign: 'center'}}>Appointment Booked!</h3>
                        <button onClick={() => { close(); handleCancel(); }}>Cancel Appointment</button>
                        </div>
                    ) : (
                        <AppointmentForm doctorName={name} onSubmit={handleFormSubmit} />
                    )}
                    </div>
                )}
                </Popup>
            </div>
        </div>
    );
};

export default DoctorCard;
