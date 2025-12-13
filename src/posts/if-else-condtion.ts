import { BlogPost } from "../types";

export const post: BlogPost = {
  slug: "if-else-condtion",
  title: "If-Else Condition Examples",
  date: "June 2022",
  author: "Badar Bawani",
  category: "Java",
  content: `
    <div class="prose dark:prose-invert max-w-none">
      <h3>1. Check if person is eligible to drive</h3>
      <pre><code class="language-java">import java.util.*;
class Ifcondition_1 {
    public static void main() {
        int age;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter age of the person");
        age = sc.nextInt();
        if (age > 18) {
            System.out.println("You are eligible to drive");
        } else {
            System.out.println("You are not eligible to drive");
        }
    }
}</code></pre>

      <h3>2. Check if person is a senior citizen</h3>
      <pre><code class="language-java">import java.util.*;
class Ifcondition_2 {
    public static void main() {
        int age;
        String n;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter name of the person");
        n = sc.nextLine();
        System.out.println("Enter age of the person");
        age = sc.nextInt();
        if (age >= 60) {
            System.out.println(n + " is a senior citizen");
        } else {
            System.out.println(n + " is not a senior citizen");
        }
    }
}</code></pre>

      <h3>3. Check if student passed Social Science</h3>
      <pre><code class="language-java">import java.util.*;
class Ifcondition_3 {
    public static void main() {
        int h, g, ss;
        String n;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter name of the student");
        n = sc.nextLine();
        System.out.println("Enter history marks out of 100");
        h = sc.nextInt();
        System.out.println("Enter geography marks out of 100");
        g = sc.nextInt();
        ss = (h + g) / 2;
        
        if (ss >= 40) {
            System.out.println(n + " has passed in social science");
        } else {
            System.out.println(n + " has failed in social science");
        }
    }
}</code></pre>

      <h3>4. Calculate Shopping Discount</h3>
      <p>Discount is 10% for purchases >= 25000, else 5%.</p>
      <pre><code class="language-java">import java.util.*;
class Ifcondition_4 {
    public static void main() {
        String nm;
        double p, d, amt;
        Scanner ob = new Scanner(System.in);
        
        System.out.println("Enter the name of customer:");
        nm = ob.nextLine();
        System.out.println("Enter the purchase amount");
        p = ob.nextDouble();
        
        if (p >= 25000) {
            d = 0.10 * p;
        } else {
            d = 0.05 * p;
        }
        
        amt = p - d;
        System.out.println("Customer name:" + nm);
        System.out.println("Total Purchase amount:" + p);
        System.out.println("Discount amount:" + d);
        System.out.println("Total Amount to pay after discount:" + amt);
    }
}</code></pre>

      <h3>5. Calculate Income Tax</h3>
      <p>If salary > 2,50,000, tax is 20% on the amount exceeding 2,50,000. Otherwise 0.</p>
      <pre><code class="language-java">import java.util.*;
class Ifcondition_5 {
    public static void main() {
        String nm;
        double ms, as, tax, ta;
        Scanner ob = new Scanner(System.in);
        
        System.out.println("Enter Name");
        nm = ob.nextLine();
        System.out.println("enter Monthly salary");
        ms = ob.nextDouble();
        
        as = ms * 12;
        ta = as - 250000;
        
        if (as > 250000) {
            tax = 0.20 * (as - 250000);
        } else {
            tax = 0;
        }
        
        System.out.println("Name: " + nm);
        System.out.println("Annual Salary: " + as);
        System.out.println("Taxable amount: " + ta);
        System.out.println("Tax to be paid: " + tax);
    }
}</code></pre>

      <h3>6. Reverse a Two-Digit Number</h3>
      <pre><code class="language-java">import java.util.*;
class Ifcondition_6 {
    public static void main() {
        int n, rev = 0;
        Scanner ob = new Scanner(System.in);
        System.out.println("Enter 2 digit number:");
        n = ob.nextInt();
        
        if (n > 9 && n < 100) {
            int x = n % 10;
            int y = n / 10;
            rev = (x * 10) + y;
            System.out.println("2 digit number:" + n);
            System.out.println("Reverse 2 digit number:" + rev);
        } else {
            System.out.println("Number entered is not two digit");
        }
    }
}</code></pre>
    </div>
  `
};
