import React, { useState, useEffect } from 'react';

interface CompanyData {
  company: {
    name: string;
    ceo: string;
    cto: string;
  };
}

const Board: React.FC = () => {
  const [companyData, setCompanyData] = useState<CompanyData | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://spacex-production.up.railway.app/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query Company {
                company {
                  name
                  ceo
                  cto
                }
              }
            `,
          }),
        });

        const responseData = await response.json();

        setCompanyData(responseData.data);
      } catch (error) {
        console.error('Error fetching company data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard__board">
      <div className="dashboard__board__main">
        <div className="dashboard__board__logo">
          <h3>
            <p>CN</p>
          </h3>
          {companyData ? (
            <h2>{companyData.company.name}</h2>
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
        <span>
          <p>CEO</p>
          {companyData ? (
            <h2>{companyData.company.ceo}</h2>
          ) : (
            <h2>Loading...</h2>
          )}
        </span>
        <span className="board__names">
          <p>CTO</p>
          {companyData ? (
            <h2>{companyData.company.cto}</h2>
          ) : (
            <h2>Loading...</h2>
          )}
        </span>
      </div>
    </div>
  );
};

export default Board;
