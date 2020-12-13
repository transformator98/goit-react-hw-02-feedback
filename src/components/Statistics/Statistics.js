export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>tota: {total}</p>
      <p>positive feedback: {positivePercentage}%</p>
    </>
  );
}
