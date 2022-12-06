const findUniqueMarker = (dataStream, markerLength) => {
  return (
    dataStream.split("").findIndex((_, index, array) => {
      if (index < markerLength - 1) {
        return false;
      }

      const chars = array.slice(index - (markerLength - 1), index + 1);

      const duplicates = chars.filter(
        (item, index) => chars.indexOf(item) !== index
      );

      return duplicates.length === 0;
    }) + 1
  );
};

export const part1 = (dataStream) => {
  return findUniqueMarker(dataStream, 4);
};

export const part2 = (dataStream) => {
  return findUniqueMarker(dataStream, 14);
};
