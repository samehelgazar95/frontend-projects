import { useSelector } from 'react-redux';
function Account() {
  const { userName, age } = useSelector((store) => store.user);
  const { pageName, createdAt } = useSelector((store) => store.page);
  const { rateEurToUsd } = useSelector((store) => store.currency);

  return (
    <div>
      {userName && age && (
        <>
          <h1>
            {userName} {age}
          </h1>
        </>
      )}
      {pageName && createdAt && (
        <h2>
          {pageName} {createdAt}
        </h2>
      )}

      {rateEurToUsd && <p>1 EUR = {rateEurToUsd} USD</p>}
    </div>
  );
}

export default Account;
