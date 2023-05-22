import { stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { logo } from '../utils/constants';
import { SearchBar } from './';

const Navbar = () => (
    <stack direction="row" alignItems="center" p={2} sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between' }}>
        <Link to="/" style={{ display: 'flex', padding: 20, alignItems: 'center' }}>
            <img src={logo} alt="logo" height={45} />
            <div style={{ flexGrow: 2 }}></div> {/* Spacer */}
            <SearchBar />
        </Link>        
    </stack>
);

export default Navbar;
