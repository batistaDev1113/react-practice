import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './component/CommentDetail';
import ApprovalCard from './component/ApprovalCard';

const App = () => {
  return (
    <div className='ui cards'>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          comment={faker.lorem.sentence()}
          time={getCurrentTime()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          comment={faker.lorem.sentence()}
          time={getCurrentTime()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          comment={faker.lorem.sentence()}
          time={getCurrentTime()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          comment={faker.lorem.sentence()}
          time={getCurrentTime()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          comment={faker.lorem.sentence()}
          time={getCurrentTime()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

const getCurrentTime = () => {
  let d = new Date();
  let n = d.toLocaleTimeString();
  return n;
};
ReactDOM.render(<App />, document.getElementById('root'));
