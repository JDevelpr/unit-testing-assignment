// src/tests/useSignInfo.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SignInForm from '../components/signInForm';
import '@testing-library/jest-dom/extend-expect';
import { renderHook, act } from '@testing-library/react-hooks';
import useSignInfo from '../customs hook/useSignInfo';

// Mock del hook personalizado para las pruebas del componente
jest.mock('../customs hook/useSignInfo', () => {
    return jest.fn(() => ({
        values: { username: '', password: '' },
        handleChange: jest.fn(),
        handleSubmit: jest.fn(),
    }));
});

describe('SignInForm Component', () => {
    it('renders Sign In title', () => {
        render(<SignInForm />);
        expect(screen.getByText('Iniciar sesión')).toBeInTheDocument();
    });

    it('renders User name input', () => {
        render(<SignInForm />);
        expect(screen.getByLabelText('Nombre de usuario')).toBeInTheDocument();
    });

    it('renders Password input', () => {
        render(<SignInForm />);
        expect(screen.getByLabelText('Contraseña')).toBeInTheDocument();
    });

    it('renders Sign In button', () => {
        render(<SignInForm />);
        expect(screen.getByText('Iniciar sesión')).toBeInTheDocument();
    });

    it('renders Forgot Password link', () => {
        render(<SignInForm />);
        expect(screen.getByText('¿Olvidó su contraseña?')).toBeInTheDocument();
    });

    it('renders New User button', () => {
        render(<SignInForm />);
        expect(screen.getByText('Registrarse')).toBeInTheDocument();
    });
});

describe('useSignInfo Hook', () => {
    it('handles valid username and password', () => {
        const { result } = renderHook(() => useSignInfo());

        act(() => {
            result.current.handleChange({ target: { name: 'username', value: 'validUser' } });
            result.current.handleChange({ target: { name: 'password', value: 'validPass' } });
        });

        act(() => {
            result.current.handleSubmit({ preventDefault: () => { } });
        });

        expect(result.current.values.username).toBe('validUser');
        expect(result.current.values.password).toBe('validPass');
    });

    it('handles invalid username or password', () => {
        const { result } = renderHook(() => useSignInfo());

        act(() => {
            result.current.handleChange({ target: { name: 'username', value: '' } });
            result.current.handleChange({ target: { name: 'password', value: '' } });
        });

        act(() => {
            result.current.handleSubmit({ preventDefault: () => { } });
        });

        expect(result.current.values.username).toBe('');
        expect(result.current.values.password).toBe('');
    });
});
