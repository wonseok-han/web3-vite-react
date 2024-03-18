import { useEffect, useState } from 'react';

import { sample } from 'apis';
import { useCustomQuery } from 'hooks/useCustomQuery';

const ApiSample = () => {
  const [selected, setSelected] = useState('1');
  const { data, refetch } = useCustomQuery({
    queryKey: 'api-sample',
    queryFn: sample.API.getUsers,
    params: {
      lab_id: selected,
    },
    errorCallback: (error) => {
      console.log('에러발생::', error);
    },
  });

  const handleSearchClick = () => {
    refetch();
  };

  useEffect(() => {
    if (data) {
      console.log('data::', data);
    }
  }, [data]);

  return (
    <>
      <select onChange={(event) => setSelected(event.target.value)}>
        <option value="1">1번</option>
        <option value="2">2번</option>
        <option value="3">3번</option>
      </select>
      <div>
        <button onClick={handleSearchClick}>조회</button>
      </div>
      <div>
        {data?.data.map((item) => <div key={item.user_id}>{item.user_nm}</div>)}
      </div>
    </>
  );
};

export default ApiSample;
