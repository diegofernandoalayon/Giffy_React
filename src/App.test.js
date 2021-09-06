import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
test('renders without crashing', async() => { // test para validar si la pagina se renderiza, de forma asiscrona
  const {findByText} = render(<App />);
  const title = await findByText(/Ultimas Busquedas/i);
  expect(title).toBeInTheDocument();
});
