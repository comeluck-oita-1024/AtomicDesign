import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organism/user/UserCard";
import styled from "styled-components";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `jake-${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "12345@example.com",
    phone: "090-2222-1111",
    company: {
      name: "テスト株式会社"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
