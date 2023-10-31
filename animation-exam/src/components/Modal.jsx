import React, {useState} from 'react'
import style from "./Modal.module.scss";

function Modal({toggleModal}) {

    return (
        <div className={style.modal}>
            <div className={style.overlay}>
            <div className={style.modalContent}>
                <section className={style.overlayContent}>
                    <article className={style.overlayImg}></article>
                    <h3>haunted house</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur <br></br>adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                    <button>Buy tickets</button>
                </section>
            </div>

            </div>
        </div>
    )
}

export default Modal;