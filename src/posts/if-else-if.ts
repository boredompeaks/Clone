import { BlogPost } from "../types";

export const post: BlogPost = {
  slug: "if-else-if",
  title: "If-Else-If Ladder",
  date: "August 2022",
  author: "Badar Bawani",
  category: "Java",
  images: [
    "/images/posts/if-else-if_img_17654503584458.jpg",
    "/images/posts/if-else-if_img_17654503607816.jpg",
    "/images/posts/if-else-if_img_17654503620841.jpg",
    "/images/posts/if-else-if_img_17654503635421.jpg",
    "/images/posts/if-else-if_img_17654503659764.jpg",
    "/images/posts/if-else-if_img_17654503683312.jpg"
  ],
  content: `
    <div class="prose dark:prose-invert max-w-none">
      <h3 class="text-xl font-bold mb-4">Practical Examples</h3>

      <div class="space-y-12">
        <section>
          <p class="font-medium mb-4">1. WAP to accept student name, mathematics marks and check the grade.</p>
          <img src="/images/posts/if-else-if_img_17654503584458.jpg" class="rounded-lg shadow-md w-full" alt="Grade Check Program" />
        </section>

        <section>
          <p class="font-medium mb-4">2. WAP to accept customer's name and total purchase amount, depending upon the purchase amount give discount, calculate and display amount to be paid.</p>
          <img src="/images/posts/if-else-if_img_17654503607816.jpg" class="rounded-lg shadow-md w-full" alt="Discount Program" />
        </section>

        <section>
          <p class="font-medium mb-4">3. WAP to accept person name, number of years of investment and accordingly calculate and display the accumulated amount.</p>
          <img src="/images/posts/if-else-if_img_17654503620841.jpg" class="rounded-lg shadow-md w-full" alt="Investment Program" />
        </section>

        <section>
          <p class="font-medium mb-4">4. WAP to accept customer's name, ticket amount and accordingly calculate the discount amount, amount to be paid.</p>
          <img src="/images/posts/if-else-if_img_17654503635421.jpg" class="rounded-lg shadow-md w-full" alt="Ticket Discount Program" />
        </section>

        <section>
          <p class="font-medium mb-4">5. WAP to accept the name, age and gender. If the age is more than 65 and gender is female display message 'wrong category' else calculate the income tax.</p>
          <img src="/images/posts/if-else-if_img_17654503659764.jpg" class="rounded-lg shadow-md w-full" alt="Income Tax Program" />
        </section>

        <section>
          <p class="font-medium mb-4">6. WAP to accept name, roll-on, marks of physics, chemistry, biology. Calculate the science marks and give the grade.</p>
          <img src="/images/posts/if-else-if_img_17654503683312.jpg" class="rounded-lg shadow-md w-full" alt="Science Grade Program" />
        </section>
      </div>
    </div>
  `
};
