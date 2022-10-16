import React from 'react';
import {StyledDashboardPage} from '../../styles/DashboardPage.styled';

function DashboardPage() {
  return (

    <StyledDashboardPage>
        <div className="dashboard__section">
            <div className="dashboard__wrapper">
                <div className="dashboard__nav">
                    <a href="/"><h2>TrackXP</h2></a>
                    <button>
                        <i className='bx bx-moon'></i>
                    </button>
                </div>
                <div className="dashboard__content">
                    <div className="dashboard__side">

                    </div>
                    <div className="dashboard__main">

                    </div>
                </div>
            </div>
        </div>
    </StyledDashboardPage>
  )
}

export default DashboardPage