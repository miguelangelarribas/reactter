import React, { Component } from 'react';
import styles from './inputtext.css'

class InputText extends Component {


    render() {
        return (
            <div>
                <form className={styles.form} onSubmit={this.props.onSendText}>
                    <textarea name="text" className={styles.text}></textarea>
                    <div className={styles.buttons}>
                        <button className={styles.close} onClick={this.props.onCloseText}>Cerrar</button>
                        <button className={styles.send} type="submit">Enviar</button>
                        
                    </div>
                </form>

            </div>
        );
    }
}

export default InputText;