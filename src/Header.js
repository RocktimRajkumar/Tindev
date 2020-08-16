import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import IconButton from '@material-ui/core/IconButton';
import './Header.css';

export default function Header() {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon className='header__icon' fontSize='large' />
            </IconButton>
            <img className="header__logo"
                src="./rishtey.png" alt="rishtey logo" />
            <IconButton>
                <QuestionAnswerIcon className='header__icon' fontSize='large' />
            </IconButton>
        </div >
    )
}
