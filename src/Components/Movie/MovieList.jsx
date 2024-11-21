import React from 'react';
import MissingImage from '../../Assets/placeholder_for_missing_posters.png';

const MovieList = ({ image, title }) => {
    console.log(image)
    return (
        <div style={styles.thumbnailContainer}>
            {!image.includes('posterthatismissing.jpg') ? 
            <img src={image} alt={title} style={styles.thumbnail} />:
            <img src={MissingImage} alt={title} style={styles.thumbnail} />}
            <p style={styles.title}>{title}</p>
        </div>
    );
};

const styles = {
    thumbnailContainer: {
        textAlign: 'center',
    },
    thumbnail: {
        width: '100%',
        aspectRatio: '2 / 3',
        objectFit: 'cover',
        borderRadius: '4px',
        backgroundColor: '#333',
    },
    title: {
        marginTop: '8px',
        fontSize: '14px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        color: '#FFF',
    },
};

export default MovieList;
