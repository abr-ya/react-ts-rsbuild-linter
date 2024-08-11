interface ITest {
  text?: string;
}

const Test = ({ text }: ITest) => {
  return (
    <div>
      <p>Start building amazing things with Rsbuild.</p>
      {text && <p>{text}</p>}
    </div>
  );
};

export default Test;
