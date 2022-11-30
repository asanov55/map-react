import React, { useState } from 'react';

function Tabs() {
  const [tab, setTab] = useState(1);
  return (
    <div>
      <div className="h2">
        <div className="h3">
          <h2 className={tab === 1 ? 'active' : ''} onClick={() => setTab(1)}>
            tab 1{' '}
          </h2>
          <h2 className={tab === 2 ? 'active' : ''} onClick={() => setTab(2)}>
            tab 2
          </h2>
          <h2 className={tab === 3 ? 'active' : ''} onClick={() => setTab(3)}>
            tab 3
          </h2>
        </div>

        <div>
          <p>
            {' '}
            {tab === 1
              ? 'hello jqwgdyuwejfgwh qjfwef ewfhguwei wjehfgiweugf kuwfgweufgye jkwgefioqwl hfiuwkir wkfehqiu'
              : ''}
          </p>
          <p>
            {' '}
            {tab === 2
              ? 'hecwckmo mncjn wehkfuwgi iwefhui3uwes fhuiqefk fkufikeergbejrg gkjgbiue'
              : ''}
          </p>
          <p> {tab === 3 ? 'hnwenwjfbb fjkeuhfw kuefg3uiw g3uwk' : ''}</p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
