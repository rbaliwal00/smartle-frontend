import React from 'react';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import UpdateIcon from '@mui/icons-material/Update';
import "./InfoContainer.css";

const InfoContainer = () => {
    return (
        <div className='cont'>
            <div className='container'>
            <div className='cont-page'>
                <div className='row'>
                    <div className='col'>
                        <div className='round' style={{marginTop: '10px'}}>
                            <SubscriptionsIcon color='white'/>
                        </div>
                        <div className='round-content'>
                            <div className='round-title'>8,000+ Courses</div>
                            <p className='round-description'>Explore a wide range of skills.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='cont-page'>
                <div className='row'>
                    <div className='col'>
                        <div className='round'>
                            <VerifiedUserIcon color='white'/>
                        </div>
                        <div className='round-content'>
                        <div className='round-title'>By Industry Experts</div>
                            <p className='round-description'>Professional development from the best people.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='cont-page'>
                <div className='row'>
                    <div className='col'>
                        <div className='round'>
                           <UpdateIcon color='white'/>
                        </div>
                        <div className='round-content'>
                        <div className='round-title'>Unlimited Access</div>
                            <p className='round-description'>Unlock Library and learn any topic with one subscription.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default InfoContainer;