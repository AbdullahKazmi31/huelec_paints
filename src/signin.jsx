import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInWithreduce } from './Actions/userActions';
import FormInput from './components/formSignIn';
import CustomButton from './CustomButton';
import NavBar from './components/NavBar.js';
import Footer from './components/footer.js';
import {
    Main,
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
  } from './signin.styles';


function SignIn(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSignin = useSelector((state) => state.userSignin);
    const { user} = userSignin;
    const dispatch = useDispatch();

    const handleSubmit = async event => {
        event.preventDefault();
        dispatch(signInWithreduce(email, password));
    };
    
    const handleChangePassword = event => {
        const { value } = event.target;
        setPassword(value);
    };

    const handleChangeEmail = event => {
        const { value } = event.target;
        setEmail(value);
        
    };

    useEffect(() => {
        console.log(user);
        if (user) {
            
          props.history.push('/');
        }
          return () => {
          
          };
        }, [user]);

        return (
            <div>
            <NavBar />
            <Main>
            <SignInContainer>
            
            <SignInTitle>Admin SignIn</SignInTitle>

            <form onSubmit={handleSubmit}>
                <FormInput
                className="form-control"
                name='email'
                type='email'
                handleChange={handleChangeEmail}
                value={email}
                placeholder="Enter email"
                required
                />

                <FormInput
                className="form-control"
                name='password'
                type='password'
                value={password}
                handleChange={handleChangePassword}
                placeholder="Enter password"
                required
                />
                <ButtonsBarContainer>
                <CustomButton type='submit'> Sign in </CustomButton>
                </ButtonsBarContainer>
            </form>
            </SignInContainer>
            </Main>
            <Footer />
            </div>
        );
}

export default SignIn;