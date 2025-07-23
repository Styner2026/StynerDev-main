import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../../components/header'; // Using relative path

describe('Header Component', () => {
    it('renders navigation links', () => {
        render(<Header />);

        const homeLink = screen.getByText(/Home/i);
        const aboutLink = screen.getByText(/About/i);
        const projectsLink = screen.getByText(/Projects/i);
        const learningLink = screen.getByText(/Learning/i);
        const contactLink = screen.getByText(/Contact/i);

        expect(homeLink).toBeInTheDocument();
        expect(aboutLink).toBeInTheDocument();
        expect(projectsLink).toBeInTheDocument();
        expect(learningLink).toBeInTheDocument();
        expect(contactLink).toBeInTheDocument();
    });
});
