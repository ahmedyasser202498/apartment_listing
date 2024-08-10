import axios from 'axios';
import styles from '../../styles/apartmentDetails.module.css';
import Navbar from '../../components/Navbar';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await axios.get(`http://backend:3001/api/apartments/${id}`);
  return { props: { apartment: res.data } };
}

export default function Apartment({ apartment }) {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img src={apartment.logo && (apartment.logo.startsWith('https://') || apartment.logo.startsWith('http://'))
    ? apartment.logo 
    : `http://localhost:3000/${apartment.logo}`}  alt="Apartment Logo2" className={styles.logo2} />
        </div>
        <div className={styles.mainContainer}>
          <div className={styles.nameContainer}>
            <h1 className={styles.title}>{apartment.name}</h1>
            <p className={styles.address}><strong>Address:</strong> {apartment.address}</p>
            <p className={styles.address}><strong>Price:</strong> ${apartment.price}</p>
          </div>
          <div className={styles.details}>
            <div className={styles.detailsSide}>
              <div className={styles.propertyDetails}>
                <div className={styles.columnDetails}>
                  <p className={styles.header}><strong>Area:</strong> {apartment.area} m²</p>
                  <p className={styles.rowData}><strong>Bedrooms:</strong> {apartment.bedrooms_count}</p>
                  <p className={styles.rowData}><strong>Bathrooms:</strong> {apartment.bathrooms_count}</p>
                  <p className={styles.rowData}><strong>Furnished:</strong> {apartment.furnished ? 'Yes' : 'No'}</p>
                  <p className={styles.rowData}><strong>Ownership:</strong> {apartment.ownership}</p>
                  <p className={styles.rowData}><strong>Description:</strong> {apartment.description}</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
