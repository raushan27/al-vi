function LinearSearch(arr, number) {
  let animations = [];
  dolinearSearch(arr, number, animations);
  return animations;
}

function dolinearSearch(arr, number, animations) {
  for (let i = 0; i < arr.length; i++) {
    animations.push({ indices: [i], type: "comp", color: "red" });

    if (number === arr[i]) {
      break;
    }

    animations.push({ indices: [i], type: "comp", color: "rgb(168, 13, 251)" });
  }
}

export default LinearSearch;
