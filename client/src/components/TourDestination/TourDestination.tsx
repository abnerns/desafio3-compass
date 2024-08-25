import styles from "./TourDestination.module.css"

const TourDestination = () => {
    return (
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <div className={styles.tour} />
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '10px',
            color: 'white',
          }}
        >
          <p style={{ fontFamily: 'Work Sans', margin: 0 }}>174,688 Travelers</p>
          <p style={{ fontFamily: 'Kaushan Script', fontSize: '20px' }}>
            United Kingdom
          </p>
        </div>
      </div>
    );
  };
  
  export default TourDestination;
  