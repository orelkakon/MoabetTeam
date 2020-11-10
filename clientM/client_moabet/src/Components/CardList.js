import React from 'react';
import ImgMediaCard from './ImgMediaCard'
const style =  {
    display: 'flex',
    flexFlow: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
}
const CardList = (props) => {
    return (
        <div style={style}>
        {
            props.data.map( objUser =>
                objUser.user !== 'a' ?   
                <ImgMediaCard data = {objUser}/>
                : null
            )
        }
        </div>
    );
};

export default CardList;