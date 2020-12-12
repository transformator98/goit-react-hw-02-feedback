export default function Feedback({ options, onLeaveFeedback }) {
  // const { options } = this.props;

  return (
    <section>
      <h2>Please leave feedback</h2>
      <div>
        {/* {Object.entries(options).map(([key, label]) => (
          <button key={key} onClick={() => onLeaveFeedback(key)}>
            {label}
          </button>
        ))} */}
        {Object.entries(options).map(([key, label]) => (
          <button key={key} onClick={() => onLeaveFeedback(label)}>
            {label}
          </button>
        ))}
      </div>
    </section>
  );
}

//  onClick={() => this.setActiveBtn(key)}

// {[option]:state[option]+1}
