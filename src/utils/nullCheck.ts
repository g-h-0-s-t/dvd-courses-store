export default function nullCheck(type: any) {
  const elType = {
    array: Array.isArray(type),
    obj: type.name,
    null: type === null,
  };
  if (elType.array)
    for (const el of type) {
      if (el === null) {
        console.log(el);
        return false;
      }
    }
  else if (elType.obj) return true;
  else if (elType.null) return false;
  return true;
}
