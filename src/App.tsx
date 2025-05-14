import React from 'react';
import { Todo } from './components/Todo';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <Todo />
      </div>
    </div>
  );
};

export default App; 