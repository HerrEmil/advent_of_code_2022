const createTree = (commands) => {
  const root = {
    name: "/",
    type: "dir",
    children: [],
  };
  let currentNode = root;

  commands.forEach((command) => {
    if (command.command === "cd") {
      if (command.argument === "..") {
        currentNode = currentNode.parent;
      } else if (command.argument === "/") {
        currentNode = root;
      } else {
        currentNode = currentNode.children.find(
          (child) => child.name === command.argument
        );
      }
    }

    if (command.command === "ls") {
      command.output.forEach((line) => {
        currentNode.children.push({
          ...line,
          parent: currentNode,
        });
      });
    }
  });

  return root;
};

function getSize(node, shareSizeCallback = () => {}) {
  if (node.type === "file") {
    return node.size;
  }
  const directorySize = node.children
    .map((child) => getSize(child, shareSizeCallback))
    .reduce((a, b) => a + b, 0);

  shareSizeCallback(node.name, directorySize);

  return directorySize;
}

export const part1 = (commands) => {
  const tree = createTree(commands);

  let sumSmallFolder = 0;
  getSize(tree, (_, size) => {
    if (size < 100000) {
      sumSmallFolder += size;
    }
  });

  return sumSmallFolder;
};

export const part2 = (commands) => {
  const tree = createTree(commands);
  const totalDiskSpace = 70000000;
  const neededDiskSpace = 30000000;

  const usedSpace = getSize(tree);
  const freeSpace = totalDiskSpace - usedSpace;
  const neededFreeSpace = neededDiskSpace - freeSpace;

  const bigFolders = [];

  getSize(tree, (name, size) => {
    if (size < neededFreeSpace) return;
    bigFolders.push({
      name,
      size,
    });
  });

  bigFolders.sort((a, b) => a.size - b.size);

  return bigFolders[0].size;
};

export const parseData = (data) => {
  return data
    .split("$ ")
    .filter(Boolean)
    .map((consoleOutput) => {
      const commandParts = consoleOutput.split("\n").filter(Boolean);

      if (commandParts[0] === "ls") {
        return {
          command: "ls",
          output: commandParts.slice(1).map((line) => {
            if (line.startsWith("dir")) {
              return {
                type: "dir",
                name: line.split(" ")[1],
                children: [],
              };
            }

            return {
              type: "file",
              name: line.split(" ")[1],
              size: parseInt(line.split(" ")[0], 10),
            };
          }),
        };
      }

      if (commandParts[0].startsWith("cd")) {
        return {
          command: "cd",
          argument: commandParts[0].split(" ")[1],
        };
      }
    });
};
