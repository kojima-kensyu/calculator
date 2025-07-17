import { FC } from "react";
import { useState } from "react";

const Todo: FC = () => {
  const [activeTab, setActiveTab] = useState<string>('view');

  return (
    <div>
      <div>
        <button onClick={() => setActiveTab('save')}>保存</button>
        <button onClick={() => setActiveTab('view')}>閲覧</button>
        <button onClick={() => setActiveTab('man')}>マニュアル</button>
      </div>
      <div>
        {activeTab === 'view' && <h1>閲覧タブです</h1>}
        {activeTab === 'save' && <h1>保存タブです</h1>}
        {activeTab === 'man' && <h1>マニュアルタブです</h1>}
      </div>
    </div>
  );
};

export default Todo;