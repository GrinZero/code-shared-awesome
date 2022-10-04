import fs from "fs";
import path from "path";
import { Models } from "../typings/model";
import { format } from "./date";

/**
 * 获取某个目录下所有文件的默认导出
 * @param filePath 需要遍历的文件路径
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export async function getAllFilesExport(filePath: string, callback: Function) {
  // 根据文件路径读取文件，返回一个文件列表
  const files: string[] = fs.readdirSync(filePath);
  // 遍历读取到的文件列表
  files.forEach((fileName) => {
    // path.join得到当前文件的绝对路径
    const absFilePath: string = path.join(filePath, fileName);
    const stats: fs.Stats = fs.statSync(absFilePath);
    const isFile = stats.isFile(); // 是否为文件
    const isDir = stats.isDirectory(); // 是否为文件夹
    if (isFile) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const file = require(absFilePath);
      callback(file.default);
    }
    if (isDir) {
      getAllFilesExport(absFilePath, callback); // 递归，如果是文件夹，就继续遍历该文件夹里面的文件；
    }
  });
}

/**
 * 判断某个文件夹是否存在
 * @param path
 * @returns {boolean}
 */
export function isDirectory(path: string): boolean {
  try {
    const stat = fs.statSync(path);
    return stat.isDirectory();
  } catch (error) {
    return false;
  }
}

export function isValidKey(
  key: string | number | symbol,
  object: object
): key is keyof typeof object {
  return key in object;
}

/**
 * 下划线转驼峰
 * @param str
 * @returns
 */
export function lineToHump(str: string): string {
  if (str.startsWith("_")) {
    return str;
  }
  return str.replace(/_(\w)/g, (all, letter: string) => letter.toUpperCase());
}

/**
 * 驼峰转下划线
 * @param str
 * @returns
 */
export function humpToLine(str = ""): string {
  if (typeof str !== "string") {
    return str;
  }
  return str.replace(/([A-Z])/g, "_$1").toLowerCase();
}

/**
 * 将对象的所有属性由下划线转换成驼峰
 * @param obj
 * @returns
 */
export function lineToHumpObject(obj: Record<string, unknown>) {
  let key: string;
  const element: {
    [key: string]: any;
  } = {};
  for (key in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(key)) {
      if (isValidKey(key, obj)) {
        const value = obj[key];
        if (typeof key === "string" && (key as string).indexOf("_at") > -1) {
          element[lineToHump(key)] = format(value as Date);
        } else {
          element[lineToHump(key)] = value;
        }
      }
    }
  }
  return {
    ...element,
  };
}

/**
 * 将对象的所有属性由驼峰转换为下划线
 * @param obj
 * @returns
 */
export function humpToLineObject(obj: Record<string, unknown>) {
  let key: string;
  const element: {
    [key: string]: any;
  } = {};
  for (key in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(key)) {
      if (isValidKey(key, obj)) {
        const value = obj[key];
        element[humpToLine(key)] = value || null;
      }
    }
  }
  return {
    ...element,
  };
}

/**
 * 将数组变成树
 * @param list
 * @param rootId
 * @param options
 * @returns
 */
export function getTreeByList(
  list: Models.List,
  rootId: number,
  options?: Models.TreeOption
) {
  // 属性配置设置
  const attr = {
    id: options?.id || "id",
    parentId: options?.parentId || "parentId",
    rootId,
  };
  const toTreeData = (
    data: Models.List,
    attr: {
      id: string;
      parentId: string;
      rootId: number;
    }
  ) => {
    const tree: Models.TreeNode[] = [];
    const resData = data;
    for (let i = 0; i < resData.length; i++) {
      if (resData[i].parentId === attr.rootId) {
        const obj = {
          ...resData[i],
          id: resData[i][attr.id],
          children: [],
        };
        tree.push(obj);
        resData.splice(i, 1);
        i--;
      }
    }
    const run = (treeArrs: Models.List[]) => {
      if (resData.length > 0) {
        for (let i = 0; i < treeArrs.length; i++) {
          for (let j = 0; j < resData.length; j++) {
            if (treeArrs[i].id === resData[j][attr.parentId]) {
              const obj = {
                ...resData[j],
                id: resData[j][attr.id],
                children: [],
              };
              treeArrs[i].children.push(obj);
              resData.splice(j, 1);
              j--;
            }
          }
          run(treeArrs[i].children);
        }
      }
    };
    run(tree);
    return tree;
  };
  const arr = toTreeData(list, attr);
  return arr;
}

/**
 * 根据某个属性排序
 * @param arr
 * @param propName
 * @param type
 */
export function sort(arr: any[], propName: string, type: Models.SortType) {
  arr.sort((a, b) => {
    if (type === "asc") {
      return b[propName] - a[propName];
    } else {
      return a[propName] - b[propName];
    }
  });
}
