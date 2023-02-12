import {createContext, useContext, useState} from 'react';
import {Navigate,useNavigate} from 'react-router-dom';
import {useAuth} from './useAuth';

const useTokenCheck = () => {

    const {currentToken} = useAuth();

    if (!currentToken) {
        return <Navigate to="/login" replace={true}/>
    }
}

export default useTokenCheck;