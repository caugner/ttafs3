class TriCount {
  count(minLength, maxLength) {
    if (minLength < 1 || 1000000 < minLength) {
      throw new Error("minLength must be between 1 and 1,000,000");
    } else if (maxLength < minLength || 1000000 < maxLength) {
      throw new Error("maxLength must be between minLength and 1,000,000");
    }

    let triangles = 0;
    for (let shortest = minLength; shortest <= maxLength; shortest++) {
      const numberOfMediums = 1 + maxLength - shortest;
      const numberOfMediumsThatResultInSumBelowMaxLength = Math.max(
        0,
        1 + maxLength - 2 * shortest
      );
      const numberOfMediumsThatResultInSumAboveMaxLength =
        numberOfMediums - numberOfMediumsThatResultInSumBelowMaxLength;

      triangles += shortest * numberOfMediumsThatResultInSumBelowMaxLength;
      triangles +=
        (1 + numberOfMediumsThatResultInSumAboveMaxLength) *
        numberOfMediumsThatResultInSumAboveMaxLength /
        2;

      if (triangles > 1000000000) {
        return -1;
      }
    }

    return triangles;
  }
}

module.exports = TriCount;
