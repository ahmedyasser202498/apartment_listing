import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import styles from '../styles/index.module.css'

import Navbar from '../components/Navbar'; 
import Modal from './addingModel';

export async function getServerSideProps() {
  const res = await axios.get('http://backend:3001/api/apartments');
  return { props: { apartments: res.data } };
}

export default function Home({ apartments: initialApartments }) {
  const [apartments, setApartments] = useState(initialApartments);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleAddApartment = async (data) => {
    try {
      await axios.post('http://localhost:3001/api/apartments', data);
      setIsModalOpen(false);
      const res = await axios.get('http://localhost:3001/api/apartments');
      setApartments(res.data);
    } catch (error) {
      console.error('Error adding apartment:', error);
    }
  };
  return (
    <div>
      <Navbar /> 
      <main className={styles.container}>
        <h1 className={styles.header}>Find Your New Home</h1>
        <h4 className={styles.header2}>Your Best Guide To A New Life</h4>
        <div className={styles.grid}>
          <div className={styles.card} onClick={() => setIsModalOpen(true)}>
            <div className={styles.addButton}>
              <span className={styles.plus}>+</span>
            </div>
          </div>
          {apartments.map(apartment => (
            <div key={apartment.id} className={styles.card}>
              <img src={apartment.logo} alt="Apartment Logo" className={styles.logo2} />
              <Link className={styles.cardTitle} href={`/apartment/${apartment.id}`} passHref>
                <a className={styles.cardTitle}>{apartment.name}</a>
              </Link>
              <div className={styles.cardDetails}>
                  <img src="/bedroom.png" alt="Bed Icon" className={styles.icon} />
                  <span>{apartment.bedrooms_count}</span>
                  <img src="/bathroom.png" alt="Bath Icon" className={styles.icon} />
                  <span>{apartment.bathrooms_count}</span>
                  <img src="/apart.png" alt="Bath Icon" className={styles.icon} />
                  <span>{apartment.area} m²</span>
              </div>
            </div>
          ))}
        </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddApartment}
      />
      </main>
    </div>
  );
}
