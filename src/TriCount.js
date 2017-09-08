class TriCount {
  count(minLength, maxLength) {
    if (minLength < 1 || 1000000 < minLength) {
      throw new Error("minLength must be between 1 and 1,000,000");
    } else if (maxLength < minLength || 1000000 < maxLength) {
      throw new Error("maxLength must be between minLength and 1,000,000");
    }

    let triangles = 0;
    for (let a = minLength; a <= maxLength; a++) {
      for (let b = a; b <= maxLength; b++) {
        const maxLengthOfLargestSide = Math.min(a + b - 1, maxLength);
        triangles += maxLengthOfLargestSide - b + 1;

        if (triangles > 1000000000) {
          return -1;
        }
      }
    }

    return triangles;
  }
}

module.exports = TriCount;
