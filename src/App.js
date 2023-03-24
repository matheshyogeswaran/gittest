import "./App.css";
import { Octokit } from '@octokit/rest';


function App() {
  // const octokit = new Octokit({
  //   auth: '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'
  // });
  //   octokit.repos.get({
  //     owner: 'matheshyogeswaran',
  //     repo: 'gittest'
  //   }).then(({ data }) => {
  //     console.log(data);
  //   });

  console.log("hi");
  const octokit = new Octokit({
    auth: "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",
  });
  octokit.repos
    .listForUser({
      username: "matheshyogeswaran",
    })
    .then(({ data }) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <div className="App">
      <h1>hi</h1>
    </div>
  );
}

export default App;
