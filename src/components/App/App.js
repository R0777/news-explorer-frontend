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
//import * as auth from '../utils/auth.js';
//import { getToken, setToken } from '../utils/token';
import {api} from '../../utils/api.js';
import {CurrentUserContext} from '../../contexts/CurrentUserContext'
import {CurrentCardContext} from '../../contexts/CurrentCardContext'

const App = () => {
    const [loggedIn, setLoggedIn] = useState(true);
    // const [userData, setUserData] = useState({ email: '', password: ''});
    // const [path, setPath] = useState('/signup');
    // const [text, setText] = useState('Регистрация');
    // const history = useHistory();

    // const handlePath = (path) => {
    //     setPath(path);
    // }

    // const handleText = (text) => {
    //     setText(text);
    // }

    // const handleLogin = (userData) => {
    //     setUserData(userData);
    //     setLoggedIn(true);
    //     handleTooltip()
    // }
    
    // const tokenCheck = () => {
    //     const jwt = getToken();
    //     if (!jwt) {
    //     return;
    //     }
    //     auth.getContent(jwt).then((res) => {
            
    //     if (res.email) {
    //         const userData = { 
    //         email: res.email,
    //         }
    //         setLoggedIn(true);
    //         setUserData(userData);
    //         history.push('/')

    //             Promise.all([
    //                 api.getProfile(),
    //                 api.getInitialCards()
    //             ]).then(res => {
    //                 const [profile, card] = res
    //                 setCurrentUser(profile)
    //                 setCurrentCards(card)
    //             }).catch((err) => {
    //                 console.log(err);
    //             })

    //     }
    //     })

    //     .catch((err) => {
    //         console.log(err);
    //     })
    // }

    // const signOut = () => {
    //     localStorage.removeItem('jwt');
    //     setLoggedIn(false);
    //     history.push('/signin');
    // }
    
    //     useEffect(() => {

    //             tokenCheck();

    // }, []);

    const [isEditProfilePopupOpen,
        setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen,
        setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen,
        setIsEditAvatarPopupOpen] = React.useState(false);
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

    // function handleEditAvatarClick() {
    //     setIsEditAvatarPopupOpen(true)
    // }

    // function handleEditProfileClick() {
    //     setIsEditProfilePopupOpen(true)
    // }

    // function handleAddPlaceClick() {
    //     setIsAddPlacePopupOpen(true)
    // }

    // function handleTrashClick() {
    //     setIsTrashOpen(true)
    // }

    // const handleCardClick = (card) => {
    //     setIsSelectedCard(card)
    // }

    // function handleTooltip() {
    //     setTooltipOpen(true)
    // }

    // function closeAllPopups() {
    //     setIsAddPlacePopupOpen(false)
    //     setIsEditProfilePopupOpen(false)
    //     setIsEditAvatarPopupOpen(false)
    //     setIsTrashOpen(false)
    //     setTooltipOpen(false)
    //     setIsSelectedCard()
    // }

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

    // const handlRegister = (email, password) => {

    //     auth.register(email, password)
    //         .then((res) => {

    //             if ((res.status !== 401) && (res.status !== 400 ) && (res.status !== 409 )) {
    //                 history.push('/signin') 
    //             } else handleTooltip();
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //             handleTooltip();
    //             history.push('/signup');
    //         });
    // }

    // const handlAuthorize = (data) => {
    //     const { email, password } = data;

    //     if (!email || !password){
    //         handleTooltip()
    //         return;
    //     }

    //     auth.authorize(email, password)
    //         .then((res) => {
    //             if (!res){
    //                 handleTooltip()
    //             }
    
    //             if (res.token) {
    //             setToken(res.token);
    //             //setData({ email: '', password: ''});
    //             handleLogin(data);
    //             history.push('/');
    //             }
    //             else handleTooltip()
    //         })
    //         .then(() => tokenCheck())
    //         .catch(err => {
    //             handleTooltip()
    //             console.log(err)
    //         });
    // }

    return (
        <CurrentCardContext.Provider value={currentCards}>
            <CurrentUserContext.Provider value={currentUser}>
                <>
                    
                    <Header 
                    loggedIn={loggedIn}/>
                    <main>
                    <Switch>

                    <Route path="/">                    
                      <SearchForm />
                      <NewsCardList />
                    </Route>

                    <ProtectedRoute 
                        path="/saved-news"
                        component={SavedNews} 
                        link="" />
                    </Switch>
                        <About />
                        </main>
                        <Footer />
                </>
            </CurrentUserContext.Provider>
        </CurrentCardContext.Provider>

    );
}

export default App;
