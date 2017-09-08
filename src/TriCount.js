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
      const numberOfMediumsThatResultInSumBelowMaxLength = Math.max(0, 1 + maxLength - 2 * shortest);
      const numberOfMediumsThatResultInSumAboveMaxLength = numberOfMediums - numberOfMediumsThatResultInSumBelowMaxLength;

      triangles += shortest * numberOfMediumsThatResultInSumBelowMaxLength;

      for (let i = 0; i < numberOfMediumsThatResultInSumAboveMaxLength; i++) {
          triangles += 1 + i;
      }

      for (let medium = shortest; medium <= maxLength; medium++) {
        if (shortest + medium - 1 < maxLength) {
          //triangles += shortest;
        } else {
          //triangles += 1 + maxLength - medium;
        }

        if (triangles > 1000000000) {
          return -1;
        }
      }
    }

    return triangles;
  }
}

module.exports = TriCount;
