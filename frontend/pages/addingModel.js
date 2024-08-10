import React from 'react';
import styles from '../styles/Modal.module.css';

const Modal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get('name'),
      address: formData.get('address'),
      price: parseFloat(formData.get('price')),
      area: parseFloat(formData.get('area')),
      bedrooms_count: parseInt(formData.get('bedrooms_count'), 10),
      bathrooms_count: parseInt(formData.get('bathrooms_count'), 10),
      furnished: formData.get('furnished') === 'on',
      ownership: formData.get('ownership'),
      description: formData.get('description'),
      logo: formData.get('logo'),
    };
    onSubmit(data);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeButton}>X</button>
        <h2>Add New Apartment</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>
            Name:
            <input type="text" name="name" required className={styles.inputText} />
          </label>
          <label className={styles.label}>
            Address:
            <input type="text" name="address" required className={styles.inputText} />
          </label>
          <label className={styles.label}>
            Price:
            <input type="number" name="price" step="0.01" required className={styles.inputNumber} />
          </label>
          <label className={styles.label}>
            Area (m²):
            <input type="number" name="area" step="0.01" required className={styles.inputNumber} />
          </label>
          <label className={styles.label}>
            Bedrooms:
            <input type="number" name="bedrooms_count" required className={styles.inputNumber} />
          </label>
          <label className={styles.label}>
            Bathrooms:
            <input type="number" name="bathrooms_count" required className={styles.inputNumber} />
          </label>
          <label className={styles.label}>
            Furnished:
            <input type="checkbox" name="furnished" required />
          </label>
          <label className={styles.label}>
            Ownership:
            <input type="text" name="ownership" className={styles.inputText} />
          </label>
          <label className={styles.label}>
            Description:
            <textarea name="description" className={styles.textarea}></textarea>
          </label>
          <label className={styles.label}>
            Logo URL:
            <input type="text" name="logo" required className={styles.inputText} />
          </label>
          <button type="submit" className={styles.submitButton}>Add Apartment</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
