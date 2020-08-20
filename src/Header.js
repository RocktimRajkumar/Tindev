import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link, useHistory } from 'react-router-dom';
import './Header.css';

export default function Header({ backButton }) {
    const history = useHistory();
    return (
        <div className='header'>
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon className='header__icon' fontSize='large' />
                </IconButton>
            ) : (
                    <IconButton>
                        <PersonIcon className='header__icon' fontSize='large' />
                    </IconButton>
                )}

            <Link to='/'>
                <img className="header__logo"
                    src="./rishtey.png" alt="rishtey logo" />
            </Link>
            <Link to='/chats'>
                <IconButton>
                    <QuestionAnswerIcon className='header__icon' fontSize='large' />
                </IconButton>
            </Link>
        </div >
    )
}
