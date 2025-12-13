import { BlogPost } from "../types";

export const post: BlogPost = {
  slug: "switch-case",
  title: "Switch Case Statement",
  date: "August 2022",
  author: "Badar Bawani",
  category: "Java",
  images: [
    "/images/posts/switch-case_img_17654503306300.jpg",
    "/images/posts/switch-case_img_17654503335456.jpg",
    "/images/posts/switch-case_img_17654503356646.jpg",
    "/images/posts/switch-case_img_17654503388393.jpg"
  ],
  content: `
    <div class="prose dark:prose-invert max-w-none">
      <p>Switch Case Program: Write a program to print the output depending upon the input.</p>
      
      <div class="my-8">
        <img src="/images/posts/switch-case_img_17654503306300.jpg" class="rounded-lg shadow-md w-full" alt="Switch Case Basics" />
      </div>

      <h3 class="text-xl font-bold mt-8 mb-4">Examples</h3>
      
      <section class="mb-8">
        <p class="mb-4"><strong>Vowel or Consonant Checker (Method 1):</strong></p>
        <img src="/images/posts/switch-case_img_17654503335456.jpg" class="rounded-lg shadow-md w-full" alt="Vowel Check Method 1" />
      </section>

      <section class="mb-8">
        <p class="mb-4"><strong>Vowel or Consonant Checker (Method 2):</strong></p>
        <img src="/images/posts/switch-case_img_17654503356646.jpg" class="rounded-lg shadow-md w-full" alt="Vowel Check Method 2" />
      </section>

      <section class="mb-8">
        <p class="mb-4"><strong>Day of Week Printer:</strong></p>
        <img src="/images/posts/switch-case_img_17654503388393.jpg" class="rounded-lg shadow-md w-full" alt="Day of Week" />
      </section>

      <section class="mb-8">
        <p class="mb-4"><strong>Month Printer Code Example:</strong></p>
        <pre><code class="language-java">class switch_month {
    public static void main() {
        int num = 5;
        switch(num) {
            case 1: System.out.println(num + " is January"); break;
            case 2: System.out.println(num + " is Feburary"); break;
            case 3: System.out.println(num + " is March"); break;
            case 4: System.out.println(num + " is April"); break;
            case 5: System.out.println(num + " is May"); break;
            case 6: System.out.println(num + " is June"); break;
            case 7: System.out.println(num + " is July"); break;
            case 8: System.out.println(num + " is August"); break;
            case 9: System.out.println(num + " is September"); break;
            case 10: System.out.println(num + " is October"); break;
            case 11: System.out.println(num + " is November"); break;
            case 12: System.out.println(num + " is December"); break;
            default: System.out.println("The number is out of the range 1 to 12");
        }
    }
}</code></pre>
      </section>
    </div>
  `
};
