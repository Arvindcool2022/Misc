import { AppContext } from '../../utils/StepContext';
import { useContext } from 'react';
import styles from './AddOnServices.module.scss';
import { ADD_ON } from '../../utils/constant';
import { IconCheckmark } from '../ReactSvg';

const AddOnServices = () => {
  const { setStep, isYearly, addOn, setAddOn } = useContext(AppContext);
  return (
    <div className={styles.section}>
      <h1>Pick add-ons</h1>
      <p className={styles.subtitle}>
        Add-ons help enhance your gaming experience.
      </p>
      {ADD_ON.map(x => (
        <div
          key={x.name}
          className={styles.services}
          onClick={() => {
            setAddOn(prevAddOn => ({
              ...prevAddOn,
              [x.name]: !prevAddOn[x.name]
            }));
          }}
          style={
            addOn[x.name]
              ? {
                  borderColor: 'var(--Purplish-blue)',
                  backgroundColor: 'var(--Alabaster)'
                }
              : {}
          }
        >
          <input
            type="checkbox"
            id={x.name}
            name={x.name}
            value={x.name}
            checked={addOn[x.name] || false}
            onChange={e => e.stopPropagation()}
          />
          <div className={styles.name}>
            <label htmlFor={`#${x.name}`}>{x.name}</label>
            <p>{x.des}</p>
          </div>
          <p className={styles.price}>
            {isYearly ? `+$${x.price * 10}/yr` : `+$${x.price}/mo`}
          </p>
        </div>
      ))}
      <div className={styles.buttonGrp}>
        <button className={styles.link} onClick={() => setStep(2)}>
          Go Back
        </button>
        <button className={styles.btn} onClick={() => setStep(4)}>
          Next Step
        </button>
      </div>
    </div>
  );
};

export default AddOnServices;
