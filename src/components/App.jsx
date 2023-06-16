import { Searchbar } from './Searchbar/Searchbar'

export const App = () => {



  return (
    <div style={appStyle}>
      <Searchbar />

    </div>
  );
};





const appStyle = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 40,
  color: '#010101'
}