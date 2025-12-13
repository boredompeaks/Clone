import { BlogPost } from "../types";

export const post: BlogPost = {
    slug: "nestedforloop",
    title: "Nested For Loops",
    date: "December 2023",
    author: "Badar Bawani",
    category: "Java",
    content: `
    <div class="prose dark:prose-invert max-w-none">
      <h3>Basic Nested Loop</h3>
      <pre><code class="language-java">class nestedloops {
    public static void main() {
        int i, j;
        for (i = 1; i <= 2; i++) {
            for (j = 1; j <= 5; j = j + 2) {
                System.out.println("i =" + i + " j =" + j);
            }
        }
    }
}</code></pre>

      <h3>Nested Loop Example 2</h3>
      <pre><code class="language-java">class nestedloops2 {
    public static void main() {
        int i, j;
        for (i = 14; i >= 10; i = i - 2) {
            for (j = 9; j >= 1; j = j - 4) {
                System.out.println("i =" + i + " j =" + j);
            }
        }
    }
}</code></pre>

      <h3>Pattern Printing: Floyd's Triangle</h3>
      <pre><code class="language-java">/*
 * Output:
 * *
 * **
 * ***
 */
class floydTriangle {
    public static void main() {
        int i, j;
        for (i = 1; i <= 3; ++i) { //rows
            for (j = 1; j <= i; j++) { //column
                System.out.print("*");
            }
            System.out.println();
        }
    }
}</code></pre>

      <h3>Pattern Printing: Inverted Triangle</h3>
      <pre><code class="language-java">/*
 * Output:
 * ****
 * ***
 * **
 * *
 */
class InvertedTriangle {
    public static void main() {
        int i, j;
        for (i = 1; i <= 4; ++i) { //rows
            for (j = 4; j >= i; j--) { //column
                System.out.print("*");
            }
            System.out.println();
        }
    }
}</code></pre>

      <h3>Pattern: Inverted Number Triangle</h3>
      <pre><code class="language-java">/*
 * Output:
 * 4321
 * 432
 * 43
 * 4
 */
class invertedNum {
    public static void main() {
        int i, j;
        for (i = 1; i <= 4; ++i) {
            for (j = 4; j >= i; j--) {
                System.out.print(j);
            }
            System.out.println();
        }
    }
}</code></pre>

      <h3>Pattern: Number Triangle</h3>
      <pre><code class="language-java">/*
 * Output:
 * 5
 * 54
 * 543
 * 5432
 * 54321
 */
class triangleNum {
    public static void main() {
        int i, j;
        for (i = 5; i >= 1; --i) {
            for (j = 5; j >= i; j--) {
                System.out.print(j);
            }
            System.out.println();
        }
    }
}</code></pre>

      <h3>Pattern: Triangle with Spacing</h3>
      <pre><code class="language-java">class triangleNumwithSpace {
    public static void main() {
        int i, j;
        for (i = 5; i >= 1; --i) {
            for (j = 5; j >= i; j--) {
                System.out.print(j + "\t");
            }
            System.out.println();
        }
    }
}</code></pre>

      <h3>Pattern: Square Symbol</h3>
      <pre><code class="language-java">/*
 * Output:
 * ****
 * ****
 * ****
 */
class squareSymbol {
    public static void main() {
        int i, j;
        for (i = 1; i <= 3; i++) {
            for (j = 1; j <= 4; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}</code></pre>

      <h3>Pattern: Alphabet Triangle</h3>
      <pre><code class="language-java">/*
 * Output:
 * A
 * AB
 * ABC
 * ABCD
 * ABCDE
 */
class nestedloop5 {
    public static void main() {
        int i, j;
        for (i = 65; i <= 69; i++) {
            for (j = 65; j <= i; j++) {
                System.out.print((char)j);
            }
            System.out.println();
        }
    }
}</code></pre>

      <h3>Pattern: Floyd's Triangle with User Input</h3>
      <pre><code class="language-java">import java.util.Scanner;
class floydTriangleReq {
    public static void main() {
        int i = 1, j, c = i, n;
        Scanner ob = new Scanner(System.in);
        System.out.println("Enter no. of lines floyd triangle required:");
        n = ob.nextInt();
        System.out.println("_____Output______");
        for (i = 1; i <= n; i++) {
            for (j = 1; j <= i; j++) {
                System.out.print(c);
                c++;
            }
            System.out.println();
        }
    }
}</code></pre>
    </div>
  `
};
