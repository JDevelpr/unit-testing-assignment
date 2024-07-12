// src/components/signInForm.jsx
import React from 'react';
import '../assets/styles/SignInForm.css';
import useSignInfo from '../customs hook/useSingInfo.jsx';

const SignInForm = () => {
	const { values, handleChange, handleSubmit } = useSignInfo();
	return (
		<div className='container-signin-form'>
			<form className="signin-form" onSubmit={handleSubmit}>
				<h2 className="signin-form__title">Iniciar sesión</h2>
				<div className="signin-form__input-container">
					<label htmlFor="username" className="signin-form__label">Nombre de usuario</label>
					<input
						id="username"
						name="username"
						className="signin-form__input"
						type="text"
						placeholder="Ingrese su nombre de usuario"
						value={values.username}
						onChange={handleChange}
					/>
				</div>
				<div className="signin-form__input-container">
					<label htmlFor="password" className="signin-form__label">Contraseña</label>
					<input
						id="password"
						name="password"
						className="signin-form__input"
						type="password"
						placeholder="Ingrese su contraseña"
						value={values.password}
						onChange={handleChange}
					/>
				</div>
				<button className="signin-form__button" type="submit">Iniciar sesión</button>
				<button type="button" className="signin-form__new-user-button">Registrarse</button>
				<a className="signin-form__link" href="#">¿Olvidó su contraseña?</a>
			</form>
		</div>
	);
};

export default SignInForm;
