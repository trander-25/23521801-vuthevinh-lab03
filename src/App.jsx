import React from 'react';
import UserProfile from './UserProfile';
import Card from './Card';
import Counter from './Counter';
import Login from './Login';
import Accordion from './Accordion';
import TodoApp from './TodoApp';
import Tabs from './Tabs';
import Exercise1 from './Exercise1';
import Exercise2 from './Exercise2';

const user1 = {
  name: 'Jane Smith',
  email: 'jane.smith@example.com',
  avatarUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

const user2 = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  avatarUrl: 'https://i.imgur.com/1bX5QH6.jpg',
  imageSize: 90,
};

function App() {
  const tabs = [
    {
      label: "Ex 1: React Model",
      content: <Exercise1 />
    },
    {
      label: "Ex 2: Environment",
      content: <Exercise2 />
    },
    {
      label: "Ex 3: User Profile",
      content: (
        <>
          <h2>Exercise 3: Functional Components and JSX</h2>
          <Card title="Jane's Profile">
            <UserProfile userData={user1} />
          </Card>
          <Card title="John's Profile">
            <UserProfile userData={user2} />
          </Card>
          <Card title="Dark Theme Profile">
            <UserProfile userData={user1} theme="dark" />
          </Card>
        </>
      )
    },
    {
      label: "Ex 4: Props",
      content: (
        <>
          <h2>Exercise 4: Data Flow with Props</h2>
          <Card title="User with Light Theme">
            <UserProfile userData={user1} />
          </Card>
          <Card title="User with Dark Theme">
            <UserProfile userData={user2} theme="dark" />
          </Card>
        </>
      )
    },
    {
      label: "Ex 5: State",
      content: (
        <>
          <h2>Exercise 5: Managing Component Memory with State</h2>
          <Card title="Simple Counter">
            <Counter />
          </Card>
          <Card title="Conceptual Question">
            <p><strong>Q: Use props or state for online status toggle?</strong></p>
            <p>Answer: Use <strong>state</strong> because the online status is a local, changeable property that the component manages independently. It's not data passed from a parent component.</p>
          </Card>
        </>
      )
    },
    {
      label: "Ex 6: User Interaction",
      content: (
        <>
          <h2>Exercise 6: Handling User Interaction</h2>
          <Card title="Login Form">
            <Login />
          </Card>
        </>
      )
    },
    {
      label: "Ex 7: Composition",
      content: (
        <>
          <h2>Exercise 7: Advanced Component Design</h2>
          <Card title="Accordion - Lifting State Up">
            <Accordion />
          </Card>
        </>
      )
    },
    {
      label: "Ex 8: DevTools",
      content: (
        <>
          <h2>Exercise 8: Debugging with React DevTools</h2>
          <Card title="Instructions">
            <ol style={{ textAlign: 'left' }}>
              <li>Install React Developer Tools extension in your browser</li>
              <li>Open DevTools and go to "Components" tab</li>
              <li>Select Counter component and manually change count state</li>
              <li>Enable "Highlight updates when components render" in settings</li>
              <li>Observe re-renders when interacting with components</li>
            </ol>
          </Card>
          <Card title="Test Components">
            <Counter />
            <hr />
            <Login />
          </Card>
        </>
      )
    },
    {
      label: "Capstone: To-Do List",
      content: (
        <>
          <h2>Part VI: Capstone Project - To-Do List</h2>
          <Card title="To-Do List Application">
            <TodoApp />
          </Card>

        </>
      )
    }
  ];
  return (
    <>
      <div className="app-header">
        <h1>Lab 3: Introduction to React</h1>
      </div>
      <Tabs tabs={tabs} />
    </>
  );
}

export default App;
