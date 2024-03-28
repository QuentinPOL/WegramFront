import Cookies from 'js-cookie';
import { React, useEffect } from 'react';
import './css/profil.css';
import logo_wegram from './images/wegram.png';
import LogoutButton from './logout_btn';
function Profil() {
    useEffect(() => {
        const authToken = Cookies.get('authToken');

        if (!authToken) {
            // Redirigez l'utilisateur vers la page de connexion s'il n'est pas connecté
            window.location.href = '/';
        }
    }, []);
    return (
        // <div className="container">
        //     Page de profil
        // </div>

        <div>
                  <LogoutButton />
            <html xmlns="http://www.w3.org/1999/xhtml">
                <head>
                    <title>Yourname (@damien.lopes) &bull; Instagram photos and videos</title>
                    <link rel="shortcut icon" href="http://i.imgur.com/0nEt29E.png" type="image/ico" />

                </head>

                <body>

                    <div id="header">
                        <div>
                            <img style={{ width: "130px" }} alt='wegram_logo' src={logo_wegram} id="logoprems" />

                            <img alt="error" src="http://i.imgur.com/IKW6MsQ.png" id="buttons" />
                        </div>
                    </div>
                    <div id="content">
                        <div id="account-info">
                            <div id="avatar" class="account-block">
                                <img alt="error" src="https://img.freepik.com/photos-gratuite/design-colore-design-spirale_188544-9588.jpg" />
                            </div>
                            <div id="details" class="account-block">
                                <div id='follow-btn-container' ><h1>damien.lopes</h1>
                                    <img id='certified-logo' alt="error" src="https://soft-central.net/wp-content/uploads/2021/06/icons8-instagram-verification-badge-480.png" />
                                    <button class="follow-btn" />
                                    <button class="follow-more-btn" />
                                    <button class="follow-more-btn" id='follow-more-bts-dot' />
                                </div>
                                <div id="stats">
                                    <div><b>0</b> posts</div>
                                    <div><b>0</b> followers</div>
                                    <div><b>0</b> following</div>
                                </div>
                                <b>Yourname</b> <br></br>
                                <h1 id='user-description' >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie <a href="http://journalname.insanejournal.com/">journalname.insanejournal.com</a>

                                </h1>
                            </div>
                        </div>
                        <a href="#1">
                            <div class="post">
                                <img alt="error" src="https://img.freepik.com/photos-gratuite/design-colore-design-spirale_188544-9588.jpg" class="img" />
                                <div class="post-info">
                                    <div class="likes">5k</div>
                                    <div class="comments">5k</div>
                                </div>
                            </div>
                        </a>

                        <a href="#2">
                            <div class="post">
                                <img alt="error" src="https://img.freepik.com/photos-gratuite/design-colore-design-spirale_188544-9588.jpg" class="img" />
                                <div class="post-info">
                                    <div class="likes">5k</div>
                                    <div class="comments">5k</div>
                                </div>
                            </div>
                        </a>

                        <a href="#3">
                            <div class="post">
                                <img alt="error" src="https://img.freepik.com/photos-gratuite/design-colore-design-spirale_188544-9588.jpg" class="img" />
                                <div class="post-info">
                                    <div class="likes">5k</div>
                                    <div class="comments">5k</div>
                                </div>
                            </div>
                        </a>

                        <a href="#4">
                            <div class="post">
                                <img alt="error" src="https://img.freepik.com/photos-gratuite/design-colore-design-spirale_188544-9588.jpg" class="img" />
                                <div class="post-info">
                                    <div class="likes">5k</div>
                                    <div class="comments">5k</div>
                                </div>
                            </div>
                        </a>

                        <a href="#5">
                            <div class="post">
                                <img alt="error" src="https://img.freepik.com/photos-gratuite/design-colore-design-spirale_188544-9588.jpg" class="img" />
                                <div class="post-info">
                                    <div class="likes">5k</div>
                                    <div class="comments">5k</div>
                                </div>
                            </div>
                        </a>

                        <a href="#6">
                            <div class="post">
                                <img alt="error" src="https://img.freepik.com/photos-gratuite/design-colore-design-spirale_188544-9588.jpg" class="img" />
                                <div class="post-info">
                                    <div class="likes">5k</div>
                                    <div class="comments">5k</div>
                                </div>
                            </div>
                        </a>

                        <div id="1" class="overlay">
                            <a href="#" class="close">&times;</a>
                            <div class="full-post">
                                <img alt="error" src="https://img.freepik.com/photos-gratuite/design-colore-design-spirale_188544-9588.jpg" class="max-img" />
                                <div class="post-content">
                                    <div class="post-head">
                                        <img alt="error" src="https://img.freepik.com/photos-gratuite/design-colore-design-spirale_188544-9588.jpg" />
                                        damien.lopes
                                        <button id='comment-btn' class="follow-btn" />
                                    </div>
                                    <div class="likes-date"><b>5k likes</b><i>1d</i></div>
                                    <div class="post-comments">

                                        <div class="comment"><b>damien.lopes</b> POST DESCRIPTION</div>

                                        <div class="comment"><b>anotherusername</b> COMMENT1</div>
                                        <div class="comment"><b>anotherusername</b> COMMENT2 WITH <i>FAKELINK</i></div>

                                    </div>

                                    <img alt="error" src="http://i.imgur.com/ivJifd2.png" /></div>
                            </div>
                        </div>
                        <div id="2" class="overlay">
                            <a href="#" class="close">&times;</a>
                            <div class="full-post">
                                <img alt="error" src="https://img.freepik.com/photos-gratuite/design-colore-design-spirale_188544-9588.jpg" class="max-img" />
                                <div class="post-content">

                                    <div class="post-head">
                                        <img alt="error" src="https://img.freepik.com/photos-gratuite/design-colore-design-spirale_188544-9588.jpg" />
                                        damien.lopes
                                        <button id='comment-btn' class="follow-btn" />
                                    </div>
                                    <div class="likes-date"><b>5k likes</b><i>1d</i></div>
                                    <div class="post-comments">

                                        <div class="comment"><b>damien.lopes</b> POST DESCRIPTION</div>

                                        <div class="comment"><b>anotherusername</b> COMMENT1</div>
                                        <div class="comment"><b>anotherusername</b> COMMENT2 WITH <i>FAKELINK</i></div>

                                    </div>

                                    <img alt="error" src="http://i.imgur.com/ivJifd2.png" /></div>
                            </div>
                        </div>
                        <div id="3" class="overlay">
                            <a href="#" class="close">&times;</a>
                            <div class="full-post">
                                <img alt="error" src="https://img.freepik.com/photos-gratuite/design-colore-design-spirale_188544-9588.jpg" class="max-img" />
                                <div class="post-content">

                                    <div class="post-head">
                                        <img alt="error" src="https://img.freepik.com/photos-gratuite/design-colore-design-spirale_188544-9588.jpg" />
                                        damien.lopes
                                        <button id='comment-btn' class="follow-btn" />
                                    </div>
                                    <div class="likes-date"><b>5k likes</b><i>1d</i></div>
                                    <div class="post-comments">

                                        <div class="comment"><b>damien.lopes</b> POST DESCRIPTION</div>

                                        <div class="comment"><b>anotherusername</b> COMMENT1</div>
                                        <div class="comment"><b>anotherusername</b> COMMENT2 WITH <i>FAKELINK</i></div>

                                    </div>

                                    <img alt="error" src="http://i.imgur.com/ivJifd2.png" /></div>
                            </div>
                        </div>
                        <div id="4" class="overlay">
                            <a href="#" class="close">&times;</a>
                            <div class="full-post">
                                <img alt="error" src="https://img.freepik.com/photos-gratuite/design-colore-design-spirale_188544-9588.jpg" class="max-img" />
                                <div class="post-content">
                                    <div class="post-head">
                                        <img alt="error" src="https://img.freepik.com/photos-gratuite/design-colore-design-spirale_188544-9588.jpg" />
                                        damien.lopes
                                        <button id='comment-btn' class="follow-btn" />
                                    </div>
                                    <div class="likes-date"><b>5k likes</b><i>1d</i></div>
                                    <div class="post-comments">
                                        <div class="comment"><b>damien.lopes</b> POST DESCRIPTION</div>
                                        <div class="comment"><b>anotherusername</b> COMMENT1</div>
                                        <div class="comment"><b>anotherusername</b> COMMENT2 WITH <i>FAKELINK</i></div>
                                    </div>

                                    <img alt="error" src="http://i.imgur.com/ivJifd2.png" /></div>
                            </div>
                        </div>
                        <div id="5" class="overlay">
                            <a href="#" class="close">&times;</a>
                            <div class="full-post">
                                <img alt="error" src="https://img.freepik.com/photos-gratuite/design-colore-design-spirale_188544-9588.jpg" class="max-img" />
                                <div class="post-content">
                                    <div class="post-head">
                                        <img alt="error" src="https://img.freepik.com/photos-gratuite/design-colore-design-spirale_188544-9588.jpg" />
                                        damien.lopes
                                        <button id='comment-btn' class="follow-btn" />
                                    </div>
                                    <div class="likes-date"><b>5k likes</b><i>1d</i></div>
                                    <div class="post-comments">
                                        <div class="comment"><b>damien.lopes</b> POST DESCRIPTION</div>
                                        <div class="comment"><b>anotherusername</b> COMMENT1</div>
                                        <div class="comment"><b>anotherusername</b> COMMENT2 WITH <i>FAKELINK</i></div>
                                    </div>

                                    <img alt="error" src="http://i.imgur.com/ivJifd2.png" /></div>
                            </div>
                        </div>

                        <div id="6" class="overlay">
                            <a href="#" class="close">&times;</a>
                            <div class="full-post">
                                <img alt="error" src="https://img.freepik.com/photos-gratuite/design-colore-design-spirale_188544-9588.jpg" class="max-img" />
                                <div class="post-content">
                                    <div class="post-head">
                                        <img alt="error" src="https://img.freepik.com/photos-gratuite/design-colore-design-spirale_188544-9588.jpg" />
                                        damien.lopes
                                        <button id='comment-btn' class="follow-btn" />
                                    </div>
                                    <div class="likes-date"><b>5k likes</b><i>1d</i></div>
                                    <div class="post-comments">
                                        <div class="comment"><b>damien.lopes</b> POST DESCRIPTION</div>
                                        <div class="comment"><b>anotherusername</b> COMMENT1</div>
                                        <div class="comment"><b>anotherusername</b> COMMENT2 WITH <i>FAKELINK</i></div>
                                    </div>
                                    <img alt="error" src="http://i.imgur.com/ivJifd2.png" /></div>
                            </div>
                        </div>







                        <div id="footer"><a href="http://tessisamess.insanejournal.com/" id="cred" title="Coding by Tessisamess. Design by Instagram.">&copy;TESSISAMESS</a><b>FOR ROLE-PLAY & FICTIONAL USE ONLY. YOU ARE NOT ON THE REAL INSTAGRAM.</b></div>

                    </div>
                </body>
            </html>
        </div>
    );
}

export default Profil;