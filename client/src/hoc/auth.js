import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {auth} from '../_actions/user_action';

export default function (SpecificComponent, option, adminRoute = null){
    function AuthentificationCheck(props){
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(auth()).then(response => {
                if(!response.payload.isAuth){
                    //status: logged out
                    if(option){
                        props.history.push('/login')
                    }

                } else{
                    //status: logged in
                    if(adminRoute && !response.payload.isAdmin){
                        props.history.push('/main')
                    } else {
                        if(option === false){
                            props.history.push('/main')
                        }
                    }
                }
            })
        }, [dispatch, props.history])

        return (
            <SpecificComponent{...props}/>
        )

    }


    return AuthentificationCheck
}