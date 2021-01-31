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
import * as mainApi from '../../utils/MainApi';
import { getToken, setToken } from '../../utils/token';
import { newsApi } from '../../utils/NewsApi.js';
import {CurrentSavedNewsContext} from '../../contexts/CurrentSavedNewsContext'
import {CurrentNewsContext} from '../../contexts/CurrentNewsContext'

const App = () => {

    const [loggedIn, setLoggedIn] = useState(false);
    const [news, setNews] = useState(false);
    const [location, setLocation] = useState('/');
    const [input, setInput] = useState(false);
    const [searching, setSearching] = useState(false);
    const [newsFound, setNewsFound] = useState(false);
    const [savedNewsFound, setSavedNewsFound] = useState(false);
    const [noNews, setNoNews] = useState(false);
    const [userData, setUserData] = useState({ name: '', email: ''});
    const history = useHistory();

    const handleLogin = (userData, token) => {

        setUserData(userData);
        setNews(false)
        setLoggedIn(true);
        mainApi.getSavedNews(token)
        .then((res) => {
            setCurrentSavedNews(res)
        })
        .catch((err) => {
            console.log(err);
        });
        closeAllPopups()
    }

    const showSavedNews = () => {
    const jwt = getToken();
    if (!jwt) {
        return;
        }
        mainApi.getSavedNews(jwt)
        .then((res) => {
          setCurrentSavedNews(res)
        
            if (currentSavedNews.length !== 0) {
                
                setNoNews(false)
                setSavedNewsFound(true)
          } else {
            setSearching(false)
            // setNewsFound(false)
            setSavedNewsFound(false)
            // setNoNews(true)
            return
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }
    
    const tokenCheck = () => {
        const jwt = getToken();
        if (!jwt) {
        return;
        }
        mainApi.getContent(jwt).then((res) => {
            
        if (res.email) {
            const userData = { 
                name: res.name,   
            email: res.email
            }
            setLoggedIn(true)
            setUserData(userData)

        }
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const signOut = () => {
        localStorage.removeItem('jwt');
        setLoggedIn(false);
        history.push('/')
        handleLocation();
    }
    
    useEffect(() => {
    tokenCheck();
    showSavedNews();
    }, []); 


    const [isRegistrPopupOpen,
        setIsRegistrPopupOpen] = React.useState(false);
    const [isLoginPopupOpen,
        setIsLoginPopupOpen] = React.useState(false);
    const [isTooltipOpen,
            setTooltipOpen] = React.useState(false);
    const [showNews,
              setShowNews] = React.useState(3);
    const [keyword, setKeyword] = useState('');
    const [currentSavedNews,
        setCurrentSavedNews] = React.useState([])
    const [currentNews,
        setCurrentNews] = React.useState([])


    
    const handleSaveNews = (card) => {

        if (!loggedIn) {
            handleRegistrPopupClick()
        }
        const isSaved = currentSavedNews.find((elem) => elem.link === card.url);

        if (!isSaved) {
          const jwt = getToken();
          if (!jwt) {
          return;
        }


        mainApi.saveNews(card, jwt)
        .catch((err) => {
                console.log(err);
            })

        mainApi.getSavedNews(jwt)
                .then(res => {                    
                    setCurrentSavedNews(res)
                })
                .catch((err) => {
                    console.log(err);
                })
            
        } else {
          handleDeleteCard(isSaved)
        }
    }

    const handleDeleteCard = (card) => {
const jwt = getToken()
if (!jwt) {
    return;
    }
        mainApi.deleteNews(card._id, jwt)
            .then(res => {
                const deletedCard = currentSavedNews.filter(el => el._id !== card._id)
                setCurrentSavedNews(deletedCard)
                if ( currentSavedNews.length <= 1 && location === '/saved-news' ) {
                  setSavedNewsFound(false)
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function handleRegistrPopupClick() {
    closeAllPopups()
    setIsRegistrPopupOpen(true)
    }

    function handleLoginPopupClick() {
    closeAllPopups()
    setIsLoginPopupOpen(true)
    }

    function handleTooltip() {
        closeAllPopups()
        setTooltipOpen(true)
    }

    const handleLocation = () => {
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
    }

const handlSearch = (search) => {
  setShowNews(3)
  setNewsFound(false)
  setSavedNewsFound(false)
  setNoNews(false)
  setNews(true)
  setSearching(true)
  newsApi.getNews(search)
  .then((res) => {
    if (res.articles.length !== 0) {
      setKeyword(search)
      setSearching(false)
      setNoNews(false)
      setCurrentNews(res.articles)
      setSavedNewsFound(true)
      setNewsFound(true)
} else {
    setSearching(false)
    setSavedNewsFound(false)
    setNewsFound(false)
    setNoNews(true)
    setNews(true)
  }
    
})
.catch((err) => {
    console.log(err)
});
}


const showMore = () => {
  const showPerClick = 3;
  let show = showNews
  const hidden = document.querySelectorAll('.hidden');
  for (let i = 0; i < showPerClick; i++) {
    if (!hidden[i]) return
    hidden[i].classList.remove('hidden');
}
let newNumber = show + showPerClick
setShowNews(newNumber)
}


    const handlRegister = (email, password, name) => {

        mainApi.register(email, password, name)
            .then((res) => {

                if ((res.status !== 401) && (res.status !== 400 ) && (res.status !== 409 )) {
                  handleTooltip()
                    history.push('/') 
                } else return
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

        mainApi.authorize(email, password)
            .then((res) => {
                if (!res){
                    return
                }
    
                if (res.token) {
                setToken(res.token);
                //setData({ email: '', password: ''});
                handleLogin(data, res.token);
                // history.push('/');
                }
            })
            .then(() => tokenCheck())
            .catch(err => {
                console.log(err)
            });
    }

    return (
        <CurrentNewsContext.Provider value={currentNews}>
            <CurrentSavedNewsContext.Provider value={currentSavedNews}>
                <>
                    
                    <Header 
                    loggedIn={loggedIn}
                    location={location}
                    handleLocation={handleLocation}
                    onLoginPopup={handleLoginPopupClick}
                    handleCheck={handleCheck}
                    signOut={signOut}
                    checked={input}
                    userData={userData}
                    showSavedNews={showSavedNews} />
                    <main>
                    <Switch>

                    <ProtectedRoute 
                    handleLoginPopupClick={handleLoginPopupClick}
                    path="/saved-news"
                    loggedIn={loggedIn}
                    location={location}
                    component={SavedNews} 
                    userData={userData}
                    link="" 
                    handleDeleteCard={handleDeleteCard}
                    showMore={showMore}
                    savedNewsFound={savedNewsFound}
                    />

                    <Route path="/">                    
                    <SearchForm
                    handlSearch={handlSearch} />
                    <NewsCardList
                    handleRegistrPopupClick={handleRegistrPopupClick}
                    showNews={showNews}
                    news={news}
                    loggedIn={loggedIn}
                    location={location} 
                    keyword={keyword}
                    handleSaveNews={handleSaveNews}
                    showMore={showMore}
                    searching={searching}
                    newsFound={newsFound}
                    noNews={noNews}
                    />
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
            </CurrentSavedNewsContext.Provider>
        </CurrentNewsContext.Provider>

    );
}

export default App;
