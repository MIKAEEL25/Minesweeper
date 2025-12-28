// export  function textColor(value : number) {
//     if (value === 1) return 'text-blue-500';
//     if (value === 2) return 'text-green-500';
//     if (value === 3) return 'text-red-500';
//     if (value === 4) return 'text-purple-500';
//     if (value === 5) return 'text-orange-500';
//     if (value === 6) return 'text-yellow-500';
//     if (value === 7) return 'text-black';
//     if (value === 8) return 'text-black';
//   }
export function textColor(value: number) {
  switch (value) {
    case 1:
      return 'text-blue-500';
    case 2:
      return 'text-green-500';
    case 3:
      return 'text-red-500';
    case 4:
      return 'text-purple-500';
    case 5:
      return 'text-orange-500';
    case 6:
      return 'text-yellow-500';
    case 7:
      return 'text-black';
    case 8:
      return 'text-black';
  }
}
