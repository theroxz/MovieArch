import React from 'react';
import styles from './index.module.css';
import { useAlert } from 'react-alert';
const Popup= (props) => {
    const alert = useAlert();
    function closeModal(){
        props.setTriggered(false);
    }
    function handleDelete(){
        props.deleteMovie(props.activeMovie);
        alert.show("Movie deleted successfully.", {
            timeout: 5000,
            type: 'success'});
    }
    return (
        <div onClick={()=>closeModal()} className={styles.background}>
            <div className={styles.container}>
                <div className={styles.container__div}>
                    <button onClick={()=>closeModal()} className={styles.button__X}>
                        <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                    </button>
                    <div className="p-6 text-center">
                        <svg className={styles.warning__sign} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <h3 className={styles.header}>Are you sure you want to delete this movie?</h3>
                        <button onClick={()=> {handleDelete(); closeModal();}  } className={styles.button__confirm}>
                            Yes, I'm sure
                        </button>
                        <button onClick={()=>closeModal()} className={styles.button__cancel}>No, cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup;