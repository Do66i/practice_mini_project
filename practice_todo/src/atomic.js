
{/*
// Bad : 컴포넌트에서 직접 사용하는 대신
export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(true)}>Click me</button>
      <Modal visible={visible}>
        <Content />
      </Modal>
    </div>
  )
};
*/}

// Good : 더러운 컴포넌트에서 주입하는 것을 추천
const Component = ({ onClick, modal }) => {
  return (
    <div>
      <button onClick={onClick}>Click me</button>
      {modal}
    </div>
  )
};

const Wrapped = () => {
  const [visible, setVisible] = useState(false);

  const ModalComponent = ({ visible }) => (
    <Modal visible={visible}>
      <Content />
    </Modal>
  );

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <Component onClick={handleClick} modal={<ModalComponent visible={visible} />} />
    </div>
  );
};

export default Wrapped


Apple = {
  imageSrc: string,
  imageAlt: string,
  contents: string
}

export function ProfileListItem({ imageSrc, imageAlt, contents } = Apple) {
  return (
    <ListItem css={{ display: 'flex' }}>
      <ProfileImage src={imageSrc} alt={imageAlt} />
      {contents}
    </ListItem>
  )
}

{/*
팀원들에게 반복적으로 자주 들었던 질문들 중 하나가 비즈니스 로직에 의존하는 내부 상태를 사용하는 
컴포넌트들은 어떻게 해야 하는가였다. 이런 경우 내부 상태를 어플리케이션의 비즈니스 로직에서 분리하는 것이 중요하다
(드롭다운 버튼의 열림, 닫힘이 내부 상태를 가진 컴포넌트의 좋은 예이다). 
컴포넌트들은 오직 props의 업데이트로 인해 업데이트되는 더미 컴포넌트와 같다.
*/}
