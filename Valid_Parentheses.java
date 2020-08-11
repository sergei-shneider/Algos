class Solution {
    public boolean isValid(String s) {
        Deque<Character> stack = new ArrayDeque<Character>();
        String openB = "([{";
        String closeB = ")]}";
        int sLen = s.length();
        //System.out.println(sLen);
        if(sLen==0) return true;
        if(sLen%2!=0) return false;
        for(int i = 0; i<sLen; i++){
            char x = s.charAt(i);
            int isCloseB = closeB.indexOf(x);
            //System.out.println(isCloseB);
            if(isCloseB==-1){
                stack.push(x);
            }
            else{
                if (stack.isEmpty()) return false;
                char y = stack.pop();
                //System.out.println(x);
                //System.out.println(y);
                switch(x){
                    case ')':
                        if(y!='(') return false;
                        break;
                    case ']':
                        if(y!='[') return false;
                        break;
                    case '}':
                        if(y!='{') return false;
                        break;
                 }
            }
        }
        if(!stack.isEmpty()) return false;
        return true;
    }
}


////////////////////////////////////////////////////////////////////

class Solution {

  // Hash table that takes care of the mappings.
  private HashMap<Character, Character> mappings;

  // Initialize hash map with mappings. This simply makes the code easier to read.
  public Solution() {
    this.mappings = new HashMap<Character, Character>();
    this.mappings.put(')', '(');
    this.mappings.put('}', '{');
    this.mappings.put(']', '[');
  }

  public boolean isValid(String s) {

    // Initialize a stack to be used in the algorithm.
    Stack<Character> stack = new Stack<Character>();

    for (int i = 0; i < s.length(); i++) {
      char c = s.charAt(i);

      // If the current character is a closing bracket.
      if (this.mappings.containsKey(c)) {

        // Get the top element of the stack. If the stack is empty, set a dummy value of '#'
        char topElement = stack.empty() ? '#' : stack.pop();

        // If the mapping for this bracket doesn't match the stack's top element, return false.
        if (topElement != this.mappings.get(c)) {
          return false;
        }
      } else {
        // If it was an opening bracket, push to the stack.
        stack.push(c);
      }
    }

    // If the stack still contains elements, then it is an invalid expression.
    return stack.isEmpty();
  }
}
