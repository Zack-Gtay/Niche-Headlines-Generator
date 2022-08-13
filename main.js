const generatePhrases = () => {
  const niche = document.getElementById("niche").value;
  const main_keyword_1 = document.getElementById("main_keyword_1").value;
  const main_keyword_2 = document.getElementById("main_keyword_2").value;
  const big_result_1 = document.getElementById("big_result_1").value;
  const big_result_2 = document.getElementById("big_result_2").value;
  const pain = document.getElementById("pain").value;
  const roadblock = document.getElementById("roadblock").value;
  const timeframe = document.getElementById("timeframe").value;
  const big_results_inputs = [big_result_1, big_result_2];

  const getFirstLines = () => {
    const prepositions = [" Sans ", " Ainsi, vous pouvez éviter "];
    const big_results = [""];
    big_results.length = 4;
    let k = 0;

    for (let i = 0; i < big_results_inputs.length; i++) {
      for (let j = 1; j < prepositions.length + 1; j++) {
        big_results[i + j] =
          "Comment " + big_results_inputs[i] + prepositions[j - 1] + pain;
        document.getElementById(`result_${k + 1}`).innerHTML =
          big_results[i + j];
        k++;
      }
    }
  };

  const get_amazing_headline = () => {
    const big_results_inputs = [big_result_1, big_result_2];
    const evenIf = [];
    evenIf.length = 2;
    const preposition = [" En aussi peu que  ", " Aussi vite que possible "];
    const Timeframe = timeframe;
    const condition = ` même si ${roadblock}`;

    const howToResult = [];
    howToResult.length = 4;
    let m = 5;
    for (let i = 0; i < big_results_inputs.length; i++) {
      evenIf[i] =
        "Comment " +
        big_results_inputs[i] +
        preposition[i] +
        timeframe +
        condition;
      for (let j = 1; j < preposition.length + 1; j++) {
        howToResult[i + j] =
          "Comment " + big_results_inputs[i] + preposition[j - 1] + timeframe;
        document.getElementById(`result_${m}`).innerHTML = howToResult[i + j];
        m++;
      }
    }
    document.getElementById(`result_${m}`).innerHTML = evenIf[0];
    document.getElementById(`result_${m + 1}`).innerHTML = evenIf[1];
  };
  getFirstLines();
  get_amazing_headline();
};
