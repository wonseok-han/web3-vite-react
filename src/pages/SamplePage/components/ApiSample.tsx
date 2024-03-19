import { useEffect, useState } from 'react';

import { sample } from 'apis';
import { useCustomQueries } from 'hooks/useCustomQueries';
import { useCustomQuery } from 'hooks/useCustomQuery';

const ApiSample = () => {
  const [selected, setSelected] = useState('1');
  const { data: query, refetch } = useCustomQuery({
    queryKey: 'api-sample',
    queryFn: sample.API.getUsers,
    params: {
      lab_id: selected,
    },
    errorCallback: (error) => {
      console.log('에러발생::', error);
    },
  });
  const [
    { data: dataQueries1, refetch: refetchQueries1 },
    { data: dataQueries2, refetch: refetchQueries2 },
  ] = useCustomQueries({
    queries: [
      {
        queryKey: 'api-sample-queries-1',
        queryFn: sample.API.getUsers,
        params: {
          lab_id: selected,
        },
      },
      {
        queryKey: 'api-sample-queries-2',
        queryFn: sample.API.getUsers,
        params: {
          lab_id: selected,
        },
      },
    ],
    errorCallback: (error) => {
      console.log('에러발생::', error);
    },
  });

  useEffect(() => {
    if (query) {
      console.log('data::', query);
    }
  }, [query]);

  useEffect(() => {
    if (dataQueries1) {
      console.log('queries data1::', dataQueries1.data);
    }
  }, [dataQueries1]);

  useEffect(() => {
    if (dataQueries2) {
      console.log('queries data2::', dataQueries2.data);
    }
  }, [dataQueries2]);

  return (
    <>
      <div style={{ display: 'grid', gap: '20px' }}>
        <section>
          <h1 style={{ fontWeight: 700 }}>useCustomQuery</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <div>
              <select onChange={(event) => setSelected(event.target.value)}>
                <option value="1">1번</option>
                <option value="2">2번</option>
                <option value="3">3번</option>
              </select>
            </div>
            <div>
              <button onClick={() => refetch()}>useCustomQuery</button>
            </div>
          </div>
          <div>
            {query?.data.map((item) => (
              <div key={item.user_id}>{item.user_nm}</div>
            ))}
          </div>
        </section>
        <section>
          <h1 style={{ fontWeight: 700 }}>useCustomQueries</h1>
          <div style={{ display: 'flex' }}>
            <div
              style={{
                display: 'grid',
                gap: '5px',
              }}
            >
              <div>
                <button onClick={() => refetchQueries1()}>
                  useCustomQueries1
                </button>
              </div>
              <div>
                {dataQueries1?.data.map((item) => (
                  <div key={item.user_id}>{item.user_nm}</div>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gap: '5px' }}>
              <div>
                <button onClick={() => refetchQueries2()}>
                  useCustomQueries2
                </button>
              </div>
              <div>
                {dataQueries2?.data.map((item) => (
                  <div key={item.user_id}>{item.user_nm}</div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ApiSample;
