function taplog(label, x) {
  console.log(label, x);
  return x;
}

function trace(fnOrName, anonFn) {
  let name, fn;
  if (arguments.length === 2) {
    name = fnOrName;
    fn = anonFn;
  } else if (arguments.length === 1) {
    fn = fnOrName;
    name = fn.name === "" ? "<function>" : fn.name;
  }
  return (...args) => {
    const r = fn(...args);
    console.log(`${name}(${args.map(repr).join(", ")}) => ${repr(r)}`);
    return r;
  };
}

function repr(x) {
  if (Array.isArray(x)) {
    return `[${x.length}]`;
  } else if (typeof x === "object") {
    return `{${Object.keys(x).join(", ")}}`;
  } else {
    return x;
  }
}

module.exports = { taplog, trace, repr };
