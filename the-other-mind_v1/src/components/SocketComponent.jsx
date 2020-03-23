import React, { useContext, useState } from "react"
import socketIOClient from 'socket.io-client'
import { Link } from "react-router-dom"

export default function SocketComponent() {
    const [state, setState] = useState("");
    const [pseudoname, setPseudo] = useState("");


    function changeTitle(pseudo, title) {
        return pseudo + ' - ' + title
    }
    function handleChange(event) {
        event.preventDefault();
        document.title = changeTitle(pseudoname, document.title);
    };
    
    function handleSubmit(event) {
        event.preventDefault();
        console.log("pseudo : ", "pseudo", " AND pseudoname : ", pseudoname);
        setPseudo();
        setState({value: event.target.value});
        console.log("pseudo : ", "pseudo", " AND pseudoname : ", pseudoname);
    };

    return(
        <>
        {(pseudoname == "")
            ? (<Link
            onClick={e => (!pseudoname) ? e.preventDefault() : "test"}
                to={`/game?user=${pseudoname}`}>
            <button className={'button mt-20'} value={state.value}
                onChange={(event)=>handleChange(event)} type="submit">
                Choisir un pseudo
            </button>
            </Link>)
            : (<div>
            <input value={state.value}
                onChange={(event)=>handleChange(event)}/>
            <input type="submit" value="Entrer un pseudo" id="message"
                    onClick={(event)=>handleSubmit(event)}/>
            </div>)
        }
        </>
    )
}


    // const localUrl = 'http://localhost:8080';

    // const [pseudoId, setPseudoId] = useState(document.getElementById('pseudoname'));
    // const [chatId, setchatId] = useState(document.getElementById('zone_chat'));
    // const [formChatId, setformChatId] = useState(document.getElementById('formulaire_chat'));
    // const [messageId, setmessageId] = useState(document.getElementById('message'));
    // const [state, setState] = useState("");

    // //let pseudoId = document.getElementById('pseudoname');
    // //let chatId = document.getElementById('zone_chat');
    // //let formChatId = document.getElementById('formulaire_chat');
    // //let messageId = document.getElementById('message');

    // // Connexion à socket.io
    // //let socket = io.connect(localUrl);
    // let socket = socketIOClient(localUrl);

    // // On demande le pseudo, on l'envoie au serveur et on
    // // l'affiche dans le titre
    // function askForPseudo(pseudo) {
    //     if (pseudo) {
    //         return prompt('Quel est votre pseudo ?');
    //     }
    // }
    // let pseudo = askForPseudo(false);

    // //console.log("pseudoname : ", document.getElementById('#pseudoname'));
    
    // socket.emit('nouveau_client', pseudo);
    // if (pseudoname) {
    //     pseudoId.html("<p>Vous êtes <em>" + pseudo + "</em></p>");
    // }
    // // Quand on reçoit un message, on l'insère dans la page
    // socket.on('message', function(data) {
    //     insereMessage(data.pseudo, data.message)
    // })

    // // Quand un nouveau client se connecte, on affiche l'information
    // socket.on('nouveau_client', function(pseudo) {
    //     if (chatId) {
    //         chatId.append('<p><em>' + pseudo
    //             + ' a rejoint le Chat !</em></p>')
    //     }
    // });

    // // Lorsqu'on envoie le formulaire, on transmet le message
    // // et on l'affiche sur la page
    // if (formChatId) {
    //     formChatId.submit(function () {
    //         let message = messageId.val();
    //         // Transmet le message aux autres
    //         socket.emit('message', message);
    //         // Affiche le message aussi sur notre page
    //         insereMessage(pseudo, message);
    //         // Vide la zone de Chat et remet le focus dessus
    //         messageId.val('').focus();
    //         // Permet de bloquer l'envoi "classique" du formulaire
    //         return false;
    //     });
    // };

    // // Ajoute un message dans la page
    // function insereMessage(pseudo, message) {
    //     chatId.append('<p><strong>' + pseudo
    //         + '</strong> ' + message + '</p>')
    // };

    // function handleChange(event) {
    //     //event.preventDefault();
    //     document.title = pseudoname + ' - ' + document.title;
    // };
    
    // function handleSubmit(event) {
    //     event.preventDefault();
    //     setState({value: event.target.value});
    // };

    // return(
    //     <>
    //         <h1>Le super Chat temps réel !</h1>
    //         <p>Bonjour {pseudoname} !</p>
    //         <div id="pseudoname"></div>
    //         <form onSubmit={(event)=>handleSubmit(event)} id="formulaire_chat">
    //             <label>Choisissez un pseudo</label>
    //             <input value={state.value}
    //                 onChange={(event)=>handleChange(event)} />
    //             <input type="submit" value="Envoyer" id="message"/>
    //         </form>
    //         <section id="zone_chat">
    //             <p>Pas de message pour l'instant.</p>
    //         </section>
    //     </>
    // )





/*
            <h1>Le super Chat temps réel !</h1>
            <p>Bonjour {pseudoname} !</p>
            <div id="pseudoname"></div>
            <form onSubmit={(event)=>handleSubmit(event)} id="formulaire_chat">
                <label>Choisissez un pseudo</label>
                <input value={state.value}
                    onChange={(event)=>handleChange(event)} />
                <input type="submit" value="Envoyer" id="message"/>
            </form>
            <section id="zone_chat">
                <p>Pas de message pour l'instant.</p>
            </section>
*/

/*
            <form action="/" method="post" id="formulaire_chat">
                <input type="text" name="message" id="message"
                    placeholder="Votre message..." size="50" autofocus />
                <input type="submit" id="envoi_message" value="Envoyer" />
            </form>

            <section id="zone_chat">
                
            </section>
*/
