import React,{ useState } from 'react';
import navBarImage from '../../Assets/nav_bar.png';
import backIcon from '../../Assets/Back.png';
import search from '../../Assets/search.png';

const Header = ({onSearch,onhandleBack}) => {
   
    const [showSearch, setShowSearch] = useState(false);

    const handleBack = () => {
        setShowSearch(false);
        onhandleBack();
    }

    return (
        <div style={styles.header}>
            <img style={styles.backButton} src={backIcon} onClick={handleBack}/>
            <h1 style={styles.title}>Romantic Comedy</h1>
            <div>
                {showSearch && (
                    <input
                        type="text"
                        style={styles.searchInput}
                        placeholder="Search..."
                        onChange={(e) => onSearch(e.target.value)}
                    />
                )}
                <img style={styles.searchButton} src={search} onClick={() => setShowSearch((prev) => !prev)}/>
            </div>
            
        </div>
    );
};

const styles = {
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 16px',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundImage: `url(${navBarImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    backButton: {
        fontSize: '16px',
        backgroundColor: 'transparent',
        color: '#FFF',
        border: 'none',
        cursor: 'pointer',
        width:"2.5em",
        height:"2em"
    },
    title: {
        fontSize: '18px',
        margin: 0,
        color:"#fff"
    },
    searchInput: {
        backgroundColor: '#222',
        color: '#FFF',
        border: '1px solid #444',
        borderRadius: '4px',
        padding: '4px 8px',
        marginRight: '8px',
        outline: 'none',
        height:"3em"
    },
    searchButton: {
        fontSize: '16px',
        backgroundColor: 'transparent',
        color: '#FFF',
        border: 'none',
        cursor: 'pointer',
         width:"5em",
        height:"3em"
    },
};

export default Header;
