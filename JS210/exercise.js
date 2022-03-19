/*
input: 
  - string of 1 and 0
output:
  - array of integers (number of moves for all balls to get to the spot)
rule:
  - can only move one pos at a time
  - 1 ball, 0 no ball
  - sum of distance of all balls to the spot
algo:
  - arry of ball status
  - arry of result
  - cumMove = 0;
  - loop from second pos to the right end
    - total move = cum move + 1*lastpos status.
    - abs(leftidx)
  return arr
*/

var minOperations = function (boxes) {
  let statusArr = boxes.split("").map((box) => parseInt(box));
  let result = [0];
  let leftBallCount = 0;
  for (let i = 1; i < statusArr.length; i++) {
    if (statusArr[i - 1] === 1) {
      leftBallCount += 1;
    }
    result[i] = leftBallCount + result[i - 1];
  }
  let rightBallCount = 0;
  let leftMove = 0;
  for (let i = statusArr.length - 2; i >= 0; i--) {
    if (statusArr[i + 1] === 1) {
      rightBallCount += 1;
    }
    result[i] += rightBallCount + leftMove;
    leftMove = rightBallCount + leftMove;
  }
  return result;
};
