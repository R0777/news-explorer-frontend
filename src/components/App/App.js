import React, { useEffect, useState } from 'react';
import './App.css'
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Header from '../Header/Header';
import SearchForm from '../SeachForm/SearchForm'
import SavedNews from '../SavedNews/SavedNews'
import NewsCardList from '../NewsCardList/NewsCardList'
import About from '../About/About'
import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';
import RegistrPopup from '../RegistrPopup/RegistrPopup';
import LoginPopup from '../LoginPopup/LoginPopup';
import * as auth from '../../utils/auth.js';
import { getToken, setToken } from '../../utils/token';
import {api} from '../../utils/api.js';
import {CurrentUserContext} from '../../contexts/CurrentUserContext'
import {CurrentCardContext} from '../../contexts/CurrentCardContext'

const App = () => {

    const [loggedIn, setLoggedIn] = useState(false);
    const [location, setLocation] = useState('/');
    const [input, setInput] = useState(false);
    const [userData, setUserData] = useState({ name: '', email: ''});
    const [path, setPath] = useState('/signup');
    const [text, setText] = useState('Регистрация');
    const history = useHistory();

    const handlePath = (path) => {
        setPath(path);
    }

    const handleText = (text) => {
        setText(text);
    }

    const handleLogin = (userData) => {
        console.log(userData)
        // setUserData(userData);
        setLoggedIn(true);
        handleTooltip()
    }
    
    const tokenCheck = () => {
        const jwt = getToken();
        if (!jwt) {
        return;
        }
        auth.getContent(jwt).then((res) => {
            
        if (res.email) {
            const userData = { 
                name: res.name,   
            email: res.email
            }
            setLoggedIn(true)
            setUserData(userData)
            // history.push('/')

                // Promise.all([
                //     api.getProfile(),
                //     api.getInitialCards()
                // ]).then(res => {
                //     const [profile, card] = res
                //     setCurrentUser(profile)
                //     setCurrentCards(card)
                // })
                .catch((err) => {
                    console.log(err);
                })

        }
        })

        .catch((err) => {
            console.log(err);
        })
    }

    const signOut = () => {
        localStorage.removeItem('jwt');
        setLoggedIn(false);
        history.push('/');
    }
    
        useEffect(() => {

                tokenCheck();

    }, []);

    const [isAcceptPopupOpen,
        setIsAcceptPopupOpen] = React.useState(false);
    const [isRegistrPopupOpen,
        setIsRegistrPopupOpen] = React.useState(false);
    const [isLoginPopupOpen,
        setIsLoginPopupOpen] = React.useState(false);
    const [isTrashOpen,
        setIsTrashOpen] = React.useState(false);
    const [isTooltipOpen,
            setTooltipOpen] = React.useState(false);
    const [isSelectedCard,
        setIsSelectedCard] = React.useState()
    const [currentUser,
        setCurrentUser] = React.useState({})
    const [currentCards,
        setCurrentCards] = React.useState([])


    
    // const handleCardLike = (card) => {
    //     const isLiked = card.likes.some(i => i === currentUser._id);
    //     if (!isLiked) {
    //         api.addLike(card._id)
    //             .then((newCard) => {
    //                 const newCards = currentCards.map(c => c._id === card._id
    //                     ? newCard
    //                     : c);
    //                 setCurrentCards(newCards);
    //             })
    //             .catch((err) => {
    //                 console.log(err);
    //             });
    //     } else {
    //         api.unLike(card._id)
    //             .then((newCard) => {
                    
    //                 const newCards = currentCards.map(c => c._id === card._id
    //                     ? newCard
    //                     : c);
    //                 setCurrentCards(newCards);
    //             })
    //             .catch((err) => {
    //                 console.log(err);
    //             });
    //     }
    // }

    // const handleDeleteCard = (card) => {

    //     api
    //         .deleteCard(card._id)
    //         .then(res => {
    //             const deletedCard = currentCards.filter(el => el._id !== card._id)
    //             setCurrentCards(deletedCard);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }

    function handleAcceptPopupClick() {
    closeAllPopups()
    setIsAcceptPopupOpen(true)
    }

    function handleRegistrPopupClick() {
    closeAllPopups()
    setIsRegistrPopupOpen(true)
    }

    function handleLoginPopupClick() {
    closeAllPopups()
    setIsLoginPopupOpen(true)
    }

    // function handleTrashClick() {
    //     setIsTrashOpen(true)
    // }

    // const handleCardClick = (card) => {
    //     setIsSelectedCard(card)
    // }

    function handleTooltip() {
        closeAllPopups()
        setTooltipOpen(true)
    }

    function handleLocation() {
    const location = window.location.pathname
    if (location === '/')
        setLocation(location)
    else setLocation('/saved-news')
    }

    function handleCheck() {
        if(input === true)
            setInput(false)
        else setInput(true)
    }

    function closeAllPopups() {
        setTooltipOpen(false)
    setIsRegistrPopupOpen(false)
    setIsLoginPopupOpen(false)
        // setIsTrashOpen(false)
        // setTooltipOpen(false)
        // setIsSelectedCard()
    }

    // function handleUpdateUser({name, about}) {
    //     api.setProfile(name, about)
    //         .then(res => {
    //             setCurrentUser(res)
    //             closeAllPopups();
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }

    // const handleUpdateAvatar = ({avatar}) => {
    //     api.profileAvatar(avatar)
    //         .then(res => {
    //             setCurrentUser(res)
    //             closeAllPopups();
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }

    // const handleAddPlaceSubmit = ({place, link}) => {
    //     api.setCard(place, link )
    //         .then(res => {
    //             setCurrentCards([
    //                 res, ...currentCards
    //             ])
    //             closeAllPopups();
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
        
    // }

    const handlRegister = (email, password, name) => {

        auth.register(email, password, name)
            .then((res) => {

                if ((res.status !== 401) && (res.status !== 400 ) && (res.status !== 409 )) {
                    history.push('/') 
                } else handleTooltip();
            })
            .catch((err) => {
                console.log(err)
            });
    }

    const handlAuthorize = (data) => {
        const { email, password } = data;

        if (!email || !password){
            return;
        }

        auth.authorize(email, password)
            .then((res) => {
                if (!res){
                    handleTooltip()
                }
    
                if (res.token) {
                setToken(res.token);
                //setData({ email: '', password: ''});
                handleLogin(data);
                // history.push('/');
                }
            })
            .then(() => tokenCheck())
            .catch(err => {
                console.log(err)
            });
    }

    return (
        <CurrentCardContext.Provider value={currentCards}>
            <CurrentUserContext.Provider value={currentUser}>
                <>
                    
                    <Header 
                    loggedIn={loggedIn}
                    location={location}
                    handleLocation={handleLocation}
                    onLoginPopup={handleLoginPopupClick}
                    handleCheck={handleCheck}
                    signOut={signOut}
                    checked={input}
                    userData={userData} />
                    <main>
                    <Switch>

                    <ProtectedRoute 
                    path="/saved-news"
                    loggedIn={loggedIn}
                    component={SavedNews} 
                    userData={userData}
                    link="" />

                    <Route path="/">                    
                    <SearchForm />
                    <NewsCardList />
                    <About 
                    userData={userData} />
                    </Route>
                    <Route>
                        {loggedIn && <Redirect to="/" /> }
                    </Route>
                    </Switch>
                        
                    </main>
                    <Popup
                        title="Пользователь успешно зарегистрирован!"
                        id="accept"
                        afterLink="Войти"
                        isOpen={isTooltipOpen}
                        isClose={closeAllPopups}
                        loggedIn={loggedIn}
                        handleAfterLink={handleLoginPopupClick} />

                    <RegistrPopup
                        title="Регистрация"
                        id="registr"
                        afterLink="Войти"
                        afterText="или "
                        buttonText={'Зарегистрироваться'}
                        isOpen={isRegistrPopupOpen}
                        isClose={closeAllPopups}
                        handleAfterLink={handleLoginPopupClick}
                        handlRegister={handlRegister} />
                        
                    <LoginPopup
                        title="Вход"
                        id="login"
                        afterLink="Зарегистрироваться"
                        afterText="или "
                        buttonText={'Войти'}
                        isOpen={isLoginPopupOpen}
                        isClose={closeAllPopups}
                        handleAfterLink={handleRegistrPopupClick}
                        handlAuthorize={handlAuthorize}
                        />
                    <Footer 
                    handleLocation={handleLocation}/>
                </>
            </CurrentUserContext.Provider>
        </CurrentCardContext.Provider>

    );
}

export default App;
