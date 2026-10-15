/**
 * Q1: Check if a string of bracket characters is properly balanced.
 * Only '(', ')', '[', ']', '{', '}' are considered.
 */
export function isBalanced(input: string): boolean {
  const pairs: Record<string, string> = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  const opening = new Set(['(', '[', '{']);
  const stack: string[] = [];

  for (const ch of input) {
    if (opening.has(ch)) {
      stack.push(ch);
    } else if (ch in pairs) {
      if (stack.pop() !== pairs[ch]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
