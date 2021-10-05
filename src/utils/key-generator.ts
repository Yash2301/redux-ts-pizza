export const generateKey = (pre: any) => {
  if (typeof pre === 'object' && pre !== null) {
    pre = JSON.stringify(pre);
  }

  return `${ pre }_${ new Date().getTime() }`;
}
