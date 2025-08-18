import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import IconMy from '../../../components/icons/common/IconMy';
import IconBox from '../../../components/icons/features/todos/IconBox';
import IconSearch from '../../../components/icons/features/todos/IconSearch';

const TodoHeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TodoNavBox = styled.div`
  display: flex;
  gap: 24px;
`;

const TodoHeader = () => {
  return (
    <>
      <TodoHeaderWrap>
        <Link to="/profile">
          <IconMy />
        </Link>
        <TodoNavBox>
          <Link to="/todos/drafts">
            <IconBox />
          </Link>
          <Link to="/todos/search">
            <IconSearch />
          </Link>
        </TodoNavBox>
      </TodoHeaderWrap>
    </>
  );
};

export default TodoHeader;
