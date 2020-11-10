import React from 'react';
import RScard from './RScard';
import './Css/RelationshipStatus.css'

const styles = {
    display: 'flex',
    flexFlow: 'row',
    flexWrap: 'wrap',
    flexDircetion: 'row-reverse',
    justifyContent: 'center'
}
const RelationshipStatus = (props) => {
    return (
        <div>
            <h1 style = {{color:'white'}}>Relationship Status of Moabet Team</h1>
            <div className="rs" style={styles}>
                {
                    props.users.map(objUser =>
                        objUser.user !== 'a' ?
                            <RScard data={objUser} />
                            : null
                    )
                }
            </div>
        </div>
    );
};

export default RelationshipStatus;